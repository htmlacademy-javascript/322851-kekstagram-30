import { renderThumbnails, setPicturesBoxHandler } from './thumbnails.js';
import './show-big-picture.js';
import './image-upload-form.js';
import { getRequest } from './api.js';
import { showErrorMessage } from './messages.js';
import { applyFilters } from './filters.js';

getRequest()
  .then((photos) => {
    renderThumbnails(photos);
    setPicturesBoxHandler(photos);
    applyFilters(photos);
  })
  .catch(() => showErrorMessage());

