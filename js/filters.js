import { renderThumbnails } from './thumbnails.js';
import { generateRandomIndex, debounce } from './util.js';
import { RERENDER_DELAY, RANDOM_PHOTOS_COUNT } from './constants.js';

const render = debounce((photos) => renderThumbnails(photos), RERENDER_DELAY);
const filtersBox = document.querySelector('.img-filters');

const getRandomPhotos = (photos) => {
  const newPhotos = [];
  const getIndex = generateRandomIndex(0, photos.length - 1);
  for (let i = 0; i < RANDOM_PHOTOS_COUNT; i++) {
    newPhotos.push(photos[getIndex()]);
  }
  return newPhotos;
};

const renderNewPhotos = (evt, photos) => {
  let newPhotos = photos.slice();
  filtersBox.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
  switch (evt.target.id.split('-')[1]) {
    case 'random':
      newPhotos = getRandomPhotos(photos);
      break;
    case 'discussed':
      newPhotos = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
      break;
  }
  render(newPhotos);
};

const applyFilters = (photos) => {
  filtersBox.classList.remove('img-filters--inactive');
  filtersBox.addEventListener('click', (evt) => {
    evt.stopPropagation();
    if (evt.target.classList.contains('img-filters__button')) {
      renderNewPhotos(evt, photos);
    }
  });
};

export { applyFilters };
