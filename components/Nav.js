import html from "html-literal";

export default () => html`<nav>
      <i class="fas fa-bars"></i>
        <ul class="hidden--mobile nav-links">
          <li class="active"><a href="./index.html">Home</a></li>
          <li class="button"><a href="./contact.html">Contact</a></li>
          <li class="button"><a href="./about.html">About</a></li>
          <li class="button"><a href="./results.html">Results</a></li>
        </ul>
    </nav>`
