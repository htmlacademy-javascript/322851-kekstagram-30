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
  switch (evt.target.id.split('-')[1]) {
    case 'random':
      newPhotos = getRandomPhotos(photos);
      break;
    case 'discussed':
      newPhotos = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
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
