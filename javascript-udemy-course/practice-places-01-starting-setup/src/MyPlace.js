import { Map } from './UI/Map';

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitle = document.querySelector('header h1');
    headerTitle.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
// const coords = {
//   lat: +queryParams.get('lat'),
//   lng: +queryParams.get('lng'),
// };
// console.log(queryParams);
// const address = queryParams.get('address');
const locationId = queryParams.get('location');
fetch('http://localhost:3030/location/' + locationId)
  .then(response => {
    if (response.status === 404) {
      throw new Error('Could not find location');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    new LoadedPlace(data.coords, data.address);
  })
  .catch(err => {
    alert(err.message);
  });
