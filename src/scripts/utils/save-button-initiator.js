import FavouriteRestaurant from '../data/fav-restaurant-idb';
import { saveButtonTemplate, savedButtonTemplate } from '../views/templates/template-creator';

const SaveButtonInitiator = {
  async init({ saveButtonContainer, restaurant }) {
    this._saveButtonContainer = saveButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderSaved();
    } else {
      this._renderSave();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavouriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderSave() {
    this._saveButtonContainer.innerHTML = saveButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavouriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderSaved() {
    this._saveButtonContainer.innerHTML = savedButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await FavouriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

};

export default SaveButtonInitiator;
