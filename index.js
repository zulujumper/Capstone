//npm run serve

import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}

// add menu toggle to bars icon in nav bar
function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Home") {
    document.querySelector("form").addEventListener("submit", event => {
      // prevent the default action aka redirect to the same url using POST method
      event.preventDefault();

      const custZip = event.target.elements.custZip.value; //creates a variable from the customer's zip code input
      console.log("Target Zip Code", custZip); // test to see customer's zip code in console

      axios
        .get(`${process.env.APIURL}/kroger/locations/${custZip}`) //sends zip code to Kroger API to get nearby stores
        .then(response => {
          console.log(response.data.data);
          store.Results.locations = response.data.data; //sends json data to Results store
          router.navigate("/Results"); // navigates to the Results page
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  if (state.view === "Results") {
    document.querySelector("form").addEventListener("submit", event => {
      // prevent the default action aka redirect to the same url using POST method
      event.preventDefault();

      const storeID = event.target.elements.storeSelect.value; //creates a variable from customer's store selection
      console.log("Store Selected", storeID); //test to see customer's locationId selection in console

      axios
        .get(`${process.env.APIURL}/kroger/products/${storeID}`) //sends locationId to Kroger API to get nearby stores
        .then(response => {

          console.log(response.data.data);
          store.Eggtable.products = response.data.data; //sends json data to Eggtable store
          router.navigate("/Eggtable"); // navigates to the Eggtable page
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=tucson`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        // render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
