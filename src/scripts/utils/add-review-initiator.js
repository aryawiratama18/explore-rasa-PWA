// import RestaurantDataSource from '../data/restaurant-source';

const AddReviewInitiator = {
  async init({
    restaurantId, name, review, postButton,
  }) {
    this._restaurantId = restaurantId;
    this._name = name;
    this._review = review;
    this._postButton = postButton;

    await this._sendReview();
  },

  async _sendReview() {
    const review = {
      id: this._restaurantId,
      name: this._name,
      review: this._review,
    };
    const postButton = this._postButton;
    postButton.addEventListener('click', async (event) => {
      event.preventDefault();
      //   await RestaurantDataSource.sendReview(review);
      console.log(review);
    });
  },
};

export default AddReviewInitiator;
