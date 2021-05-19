import ENDPOINT from '../global/api-endpoint';

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
}

export default RestaurantDataSource;
