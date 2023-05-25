import html from "html-literal";

export default state => html`
  <h2 class="avail">Eggs at your selected store</h2>

  <table>
    <tr>
      <th>Brand</th>
      <th>Quantity</th>
      <th>Availability</th>
    </tr>
    ${state.products
      .map(product => {
        return `<tr><td class="brandName">${product["brand"]}</td>
        <td class="quantity">${product["items"]["0"]["size"]}</td>
        <td class="available">${product["items"]["0"]["fulfillment"]["inStore"]}</td>



        </tr>`;
      })
      .join("")}
  </table>
`;
