import { Map } from './UI/Map';
import { Modal } from './UI/Modal';
import { getCoordsFromAddress, getAddressFromCoords } from './Utility/Location';
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locatedUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    this.shareBtn.addEventListener('click', this.sharePlaceHandler);

    locatedUserBtn.addEventListener('click', this.locateUserHandler.bind(this));

    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  sharePlaceHandler() {
    const shareLinkInput = document.getElementById('share-link');
    if (!navigator.clipboard) {
      shareLinkInput.select();
      return;
    }
    navigator.clipboard
      .writeText(shareLinkInput.value)
      .then(() => alert('Copied into clipboard'))
      .catch(err => {
        console.log(err);
        shareLinkInput.select();
      });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    fetch('http://localhost:3030/add-location', {
      method: 'POST',
      body: JSON.stringify({
        address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const locationId = data.id;
        this.shareBtn.disabled = false;
        const shareLinkInput = document.getElementById('share-link');
        shareLinkInput.value = `${location.origin}/my-place?location=${locationId}`;
      });
  }
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Loaction feature is not available in your browser');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading loaction - please wait...'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async successResult => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        const address = await getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
        modal.hide();
      },
      error => {
        modal.hide();
        alert(
          'Could not locate you unforunately. Please enter an address manually!'
        );
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading loaction - please wait...'
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (err) {
      console.log(err);
    }
    modal.hide();
  }
}

new PlaceFinder();
