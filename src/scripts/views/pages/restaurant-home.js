import RestaurantDataSource from '../../data/restaurant-source';
import { restaurantHomeTemplate } from '../templates/template-creator';

const RestaurantHome = {
  async render() {
    return `
        <div class="main-content">
            <h2 class="main-content-header">Discover Your Choice</h2>
            <div class="restaurants" id="restaurants">
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += restaurantHomeTemplate(restaurant);
    });
  },
};

export default RestaurantHome;
