const { Router } = require("express");
const axios = require("axios").default;

const router = Router();

// sends a POST request to the Kroger API based on customer's zip to get grocery store locations
router.get("/locations/:zipCode", (request, res) => {
  const options = {
    method: "POST",
    url: "https://api.kroger.com/v1/connect/oauth2/token", // getting the access token needed for the request and storing it in the variable 'options'
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic ZWdnYnVkZHlwcm8tODMwZmQ0MjE0ZWUwZjU2NzhmYmYzNThjMTYwODIwZGQyOTY2Mzc3NTI0NjkyOTc3Mzc5OmlaY2FfMl9wYnEwemRZTm9CV2hVSXh0MkVvdnJOdkpQc2d1M3Z2Mkc="
    },
    data: { grant_type: "client_credentials", scope: "product.compact" }
  };

  axios
    .request(options) // using the OAth2 token to send the API request and get locations near the zipcode inputted
    .then(function(response) {
      console.log(response.data);
      const token = response.data.access_token; //creating an access token variable from above API request

      // creating a locationOptions variable GET request to the Kroger API
      const locationOptions = {
        method: "GET",
        url: "https://api.kroger.com/v1/locations",
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: { "filter.zipCode.near": request.params.zipCode }
      };
      axios
        .request(locationOptions)
        .then(function(locationResponse) {
          console.log(locationResponse.data);
          res.json(locationResponse.data); //getting the 'res' response data in json format
        })
        .catch(function(error) {
          console.error(error);
        });
    })
    .catch(function(error) {
      console.error(error);
    });
});

//taking the storeLocation data from above and finding the inventory
router.get("/products/:storeLocation", (request, res) => {
  const options = {
    method: "POST",
    url: "https://api.kroger.com/v1/connect/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic ZWdnYnVkZHlwcm8tODMwZmQ0MjE0ZWUwZjU2NzhmYmYzNThjMTYwODIwZGQyOTY2Mzc3NTI0NjkyOTc3Mzc5OmlaY2FfMl9wYnEwemRZTm9CV2hVSXh0MkVvdnJOdkpQc2d1M3Z2Mkc="
    },
    data: { grant_type: "client_credentials", scope: "product.compact" }
  };

  axios
    .request(options)
    .then(function(response) {
      console.log(response.data);
      const token = response.data.access_token;

      const productOptions = {
        method: "GET",
        url: "https://api.kroger.com/v1/products",
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          "filter.term": "eggs",
          "filter.locationId": request.params.storeLocation,
          "filter.limit": 50
        }
      };
      axios
        .request(productOptions)
        .then(function(productResponse) {
          console.log(productResponse.data);
          res.json(productResponse.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    })
    .catch(function(error) {
      console.error(error);
    });
});

module.exports = router;
