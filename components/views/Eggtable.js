import html from "html-literal";

export default state => html`
  <h2 class="avail">Eggs at your selected store</h2>

  <table>
    <tr>
      <th>Brand</th>
      <th>Quantity</th>
      <th>       </th>
      <th>Stock Level</th>
      <th>Price</th>
    </tr>
    ${state.products
      .map(product => {
        return `<tr><td class="brandName">${product.brand}</td>
        <td class="quantity">${product?.items[0]?.size}</td>
        <td align="center" class="eggpic"><img src="${product?.images[0]?.sizes[2]?.url}" id="eggpic"></td>
        <td class="available">${product?.items[0]?.inventory?.stockLevel}</td>
        <td class="price">$${product?.items[0]?.price?.regular}</td>
        </tr>`;
      })
      .join("")}
  </table>
`;
