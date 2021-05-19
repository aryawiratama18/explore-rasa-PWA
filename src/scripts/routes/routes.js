import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import FavouritePage from '../views/pages/favourite-page';

const routes = {
  '/': RestaurantList,
  '/list': RestaurantList,
  '/detail/:id': RestaurantDetail,
  '/favourite': FavouritePage,
};

export default routes;
