import html from "html-literal";

export default state => html`
  <table id="egglist">
    <tr>
      <th>Location</th>
      <th>Brand</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Availabilty</th>
    </tr>
    ${state.eggs
      .map(egg => {
        return `<tr><td>${egg.location}</td><td>${egg.brand}</td><td>${
          egg.quantity
        }</td><td>${egg.price}</td><td>${
          egg.availability
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
