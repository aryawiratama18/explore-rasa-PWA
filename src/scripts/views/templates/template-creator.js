import CONFIG from '../../global/config';

const restaurantMenuTemplate = (foods, drinks) => `
  <h3>Our Menus</h3>
  <div class="__restaurantFoods">
  <h3>Foods</h3>
    <ul class="food-list">
      ${foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
  </div>
  <div class="__restaurantDrinks">
  <h3>Drinks</h3>
    <ul class="drink-list">
      ${drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>
`;

const restaurantReviews = (reviews) => `
  <h3>Customer Review</h3>
  <div class="__restaurantReviews">
    ${reviews.map((review) => `
    <div class="__review">
      <h4>"${review.review}"</h4>
      <h5>${review.name} (${review.date})</h5>
    </div>
    `).join('')}
  </div>
`;

const restaurantDetailTemplate = (restaurant) => `
    <div class="__restaurantDetail">
      <h2 class="__restaurantDetailName">${restaurant.name}</h2>
      <img class="__restaurantDetailImage" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="__restaurantDetailInfo">
        <h4>Restaurant Information</h4>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating} / 5.0</p>
      </div>
      <div class="__restaurantDetailDesc">
        <h4>Description</h4>
        <p>${restaurant.description}</p>
      </div> 
      </div>
      <div class="__restaurantDetailMenus">
        ${restaurant.menus ? restaurantMenuTemplate(restaurant.menus.foods, restaurant.menus.drinks) : ''}
      </div>
      <div class="__restaurantDetailReviewBox">
        <h3>What do you think?</h3>
        <div class="__reviewBox">
          <form>
            <label class="__custNameLabel" for="nameField">Name: </label>
            <input type="text" id="nameField" required>
            <br>
            <label class="__custReviewLabel" for="reviewField">Review: </label>
            <textarea id="reviewField" required></textarea>
            <br>
            <button aria-label="post this review" class="post" id="postReview">Post It !!</button>
          </form>
        </div>
      </div>
      <div class="__restaurantDetailReview">
        ${restaurant.customerReviews ? restaurantReviews(restaurant.customerReviews) : ''}
      </div>
`;

const restaurantListTemplate = (restaurant) => `
  <div class="__restaurantItem">
    <div class="__restaurantItemHeader">
      <img class="__restaurantImagePoster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="__restaurantItemRating">
        <p>⭐️<span class="__restaurantItemScore">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="__restaurantItemSummary">
    <h3>${restaurant.name}</h3>
    <p>${restaurant.description}</p>
    </div>
    <div class="__readMoreButton">
      <a href="${`/#/detail/${restaurant.id}`}">Read More</a>
    </div>
  </div>
`;

const saveButtonTemplate = () => `
  <button aria-label="save this restaurant" id="saveButton" class="save">
    <i class="fa fa-star-o"></i>
  </button>
`;

const savedButtonTemplate = () => `
  <button aria-label="remove from saved" id="saveButton" class="saved">
    <i class="fa fa-star"></i>
  </button>
`;

export {
  restaurantDetailTemplate,
  restaurantListTemplate,
  saveButtonTemplate,
  savedButtonTemplate,
};
