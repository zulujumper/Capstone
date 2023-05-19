import html from "html-literal";

export default state => html`
<h2 class="avail">Available locations near your zip</h2>

<div class="locations">
<table id="locations">
    <tr>
      <th>Locations</th>
      <th>Address</th>
      <th>Select</th>

    </tr>
    ${state.locations
      .map(location => {
        return `<tr><td class="locationName">${location.name}</td>
        <td class="locationAddress">${location.address.addressLine1}</td>
        <td class="storeSelect"><input type="radio" id="storeSelect" name="storeSelect"></td>
        <td class="hiddenID">${location.locationId}</td>
        </tr>`;
      })
      .join("")}
  </table>
  </div>
`;
