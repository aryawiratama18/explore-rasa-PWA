import ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

class RestaurantDataSource {
  static async restaurantList() {
    const response = await fetch(ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchResult(query) {
    const response = await fetch(ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async sendReview(review) {
    const response = await fetch(ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(review),
    });

    return response;
  }
}

export default RestaurantDataSource;
