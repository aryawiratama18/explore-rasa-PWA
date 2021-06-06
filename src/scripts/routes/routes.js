import RestaurantHome from '../views/pages/restaurant-home';
import RestaurantDetail from '../views/pages/restaurant-detail';
import FavouritePage from '../views/pages/favourite-page';

const routes = {
  '/': RestaurantHome,
  '/home': RestaurantHome,
  '/detail/:id': RestaurantDetail,
  '/favourite': FavouritePage,
};

export default routes;
