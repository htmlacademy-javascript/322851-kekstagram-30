import { renderThumbnails } from './thumbnails.js';
import { generateRandomIndex, debounce } from './util.js';
import { RERENDER_DELAY, RANDOM_PHOTOS_COUNT } from './constants.js';

const render = debounce((photos) => renderThumbnails(photos), RERENDER_DELAY);
const filtersBox = document.querySelector('.img-filters');

const getRandomPhotos = (photos) => {
  const newArr = [];
  const getIndex = generateRandomIndex(0, photos.length - 1);
  for (let i = 0; i < RANDOM_PHOTOS_COUNT; i++) {
    newArr.push(photos[getIndex()]);
  }
  return newArr;
};

const renderNewPhotos = (evt, photos) => {
  let newPhotos = photos.slice();
  filtersBox.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  switch (evt.target.id.split('-')[1]) {
    case 'random':
      filtersBox.querySelector('#filter-random').classList.add('img-filters__button--active');
      newPhotos = getRandomPhotos(photos);
      break;
    case 'discussed':
      filtersBox.querySelector('#filter-discussed').classList.add('img-filters__button--active');
      newPhotos = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
      break;
    case 'default':
      filtersBox.querySelector('#filter-default').classList.add('img-filters__button--active');
      break;
  }
  render(newPhotos);
};

const applyFilters = (photos) => {
  filtersBox.classList.remove('img-filters--inactive');
  filtersBox.addEventListener('click', (evt) => {
    evt.stopPropagation();
    renderNewPhotos(evt, photos);
  });
};

export { applyFilters };
