//import { photos } from './data.js';
import { renderThumbnails } from './thumbnails.js';
import './show-big-picture.js';
import './image-upload-form.js';
import { getRequest } from './api.js';
import { showErrorMessage } from './errors.js';
import { applyFilters } from './filters.js';

getRequest()
  .then((photos) => {
    renderThumbnails(photos);
    applyFilters(photos);
  })
  .catch(() => showErrorMessage());


