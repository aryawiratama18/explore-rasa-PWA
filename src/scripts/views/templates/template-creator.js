import CONFIG from '../../global/config';

const restaurantDetailTemplate = (restaurant) => `
    <div class="__restaurantDetail">
      <h2 class="__restaurantDetailName">${restaurant.name}</h2>
      <img class="__restaurantDetailImage" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="__restaurantDetailInfo">
        <h3>Restaurant Information</h3>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
        <h4>Description</h4>
        <p>${restaurant.description}</p>
      </div> 
      <div class="__restaurantDetailMenus">
        <div class="__restaurantFoods" id="restaurantFoods"/>
        <div class="__restaurantDrinks" id="restaurantDrinks"/>
      </div>
      <div class="__restaurantDetailReview"/>
    </div>
`;

const restaurantListTemplate = (restaurant) => `
  <div class="__restaurantList">
    <div class="__restaurantListHeader">
      <p>⭐️<span class="__restaurantListRating>${restaurant.rating}</span></p>
    </div>
  </div>
`;

export {
  restaurantDetailTemplate,
  restaurantListTemplate,
};
