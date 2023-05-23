import html from "html-literal";

export default () => html`
  <div class="form-center">
    <form action="https://formspree.io/f/mlekkjoe" method="POST">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" placeholder="Name" required />

      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="youremail@address.com"
      />

      <label for="phone">Phone:</label>
      <input type="tel" name="phone" id="phone" placeholder="555-555-1212" />

      <div class="textarea">
        <label for="msg"></label>
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="7"
          placeholder="What would you like to tell us?"
        ></textarea>
      </div>
      <input type="submit" id="send" name="submit" value="SEND IT" />
    </form>
  </div>
`;
