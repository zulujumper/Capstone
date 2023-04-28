import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h1>EggBuddy</h1>
    <input type="number" placeholder="Zip code"></input>
    <a href="./Results">FIND ME THE EGGS!</a>
  </section>
  <p>${state.message}</p>
`;
