import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h1>EggBuddy</h1>

    <form
      class="zipForm"
      id="zipForm"
      method="POST"
      action="">

    <input
      type="number"
      id="custZip"
      name="custZip"
      placeholder="Zip code" />

    <input class="zip" id="zip" type="submit" name="submit" value="FIND ME THE EGGS!" />

    </form>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}&#176;F, and it feels like
    ${state.weather.feelsLike}&#176;F.
  </h3>
`;
