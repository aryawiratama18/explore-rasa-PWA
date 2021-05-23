import FavouriteRestaurant from '../../data/fav-restaurant-idb';
import { restaurantListTemplate } from '../templates/template-creator';

const FavouritePage = {
  async render() {
    return `
        <div class="main-content">
            <h2 class="main-content-header">Your Favourite Here</h2>
            <div class="restaurants" id="restaurants">
            </div>
        </div>
     `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurant.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantListTemplate(restaurant);
    });
  },
};

export default FavouritePage;
