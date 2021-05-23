import CONFIG from './config';

const ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  PICTURE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/${pictureId}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default ENDPOINT;
