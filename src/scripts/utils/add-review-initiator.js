import RestaurantDataSource from '../data/restaurant-source';

const AddReviewInitiator = {
  async init({
    restaurantId, postButton,
  }) {
    this._restaurantId = restaurantId;
    this._postButton = postButton;

    await this._sendReview();
  },

  async _sendReview() {
    const postButton = this._postButton;
    const nameField = document.querySelector('#nameField');
    const reviewField = document.querySelector('#reviewField');

    postButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const review = {
        id: this._restaurantId,
        name: nameField.value,
        review: reviewField.value,
      };
      await RestaurantDataSource.sendReview(review);
    });
  },
};

export default AddReviewInitiator;
