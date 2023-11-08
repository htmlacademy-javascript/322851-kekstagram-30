import { renderThumbnails } from './thumbnails.js';
import { generateRandomIndex, debounce } from './util.js';
import { RERENDER_DELAY } from './constants.js';

const renderer = debounce((photos) => renderThumbnails(photos), RERENDER_DELAY);
const filtersBox = document.querySelector('.img-filters');

const getRandomPhotos = (photos) => {
  const newArr = [];
  const generator = generateRandomIndex(0, photos.length - 1);
  for (let i = 0; i < photos.length; i++) {
    newArr.push(photos[generator()]);
  }
  return newArr;
};

const onFiltersClick = (evt, photos) => {
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
  renderer(newPhotos);
};

const applyFilters = (photos) => {
  filtersBox.classList.remove('img-filters--inactive');
  filtersBox.addEventListener('click', (evt) => {
    evt.stopPropagation();
    onFiltersClick(evt, photos);
  });
};

export { applyFilters };
