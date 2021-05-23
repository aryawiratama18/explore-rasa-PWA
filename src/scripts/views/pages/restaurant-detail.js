import RestaurantDataSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import SaveButtonInitiator from '../../utils/save-button-initiator';
import { restaurantDetailTemplate } from '../templates/template-creator';

const RestaurantDetail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="saveButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);

    SaveButtonInitiator.init({
      saveButtonContainer: document.querySelector('#saveButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        menus: restaurant.menus,
        rating: restaurant.rating,
      },
    });
  },
};

export default RestaurantDetail;
