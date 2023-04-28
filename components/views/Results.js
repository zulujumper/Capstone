import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2>EggBuddy</h2>
    <a href="index.html">"Call to Action" "Button"</a>
  </section>
  <p>${state.message}</p>
`;
