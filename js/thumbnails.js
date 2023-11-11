import { showBigPicture } from './show-big-picture.js';
import { renderBigPicture } from './render-big-picture.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesBox = document.querySelector('.pictures');

const clearThumbnails = () => {
  const thumbnails = document.querySelectorAll('.picture');
  thumbnails.forEach((thumbnail) => thumbnail.remove());
};

const renderThumbnails = (photos) => {
  clearThumbnails();
  const thumbnailsListFragment = document.createDocumentFragment();
  photos.forEach(({id, url, description, likes, comments}) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);
    thumbnail.id = `picture-${id}`;
    const img = thumbnail.querySelector('.picture__img');
    img.src = url;
    img.alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnailsListFragment.append(thumbnail);
  });
  picturesBox.append(thumbnailsListFragment);
  picturesBox.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const pictureId = evt.target.parentNode.id.split('-')[1];
      const currentPhoto = photos.filter((photo) => (photo.id === parseInt(pictureId, 10)))[0];
      renderBigPicture(currentPhoto);
      showBigPicture();
    }

  });
  return thumbnailsListFragment;
};

export { renderThumbnails, picturesBox };
