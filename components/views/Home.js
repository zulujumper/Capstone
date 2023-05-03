import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h1>EggBuddy</h1>
    <input id="zip" type="number" placeholder="Zip code"></input>
    <a href="./Results">FIND ME THE EGGS!</a>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}&#176;F, and it feels like
    ${state.weather.feelsLike}&#176;F.
  </h3>
`;
