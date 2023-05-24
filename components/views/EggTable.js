import html from "html-literal";

export default state => html`
<h2 class="avail">Eggs at your selected store</h2>


    <table>
      <tr>
        <th>Brand</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Availability</th>
      </tr>
      ${state.locations
        .map(location => {
          return `<tr><td class="brandName">${product.brand}</td>
        <td class="quantity">${product.items.size}</td>
        <td class="price">${product.description}</td>
        <td class="available">${product.items.fulfillment.inStore}</td>
        </tr>`;
        })
        .join("")}
    </table>
    // <input type="submit" id="send" name="submit" value="FIND THEM!" />

`;
