import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate } from '../templates/template-creator';

const RestaurantDetail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);
  },
};

export default RestaurantDetail;
