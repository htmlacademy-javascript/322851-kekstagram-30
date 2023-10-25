import { pictures } from './thumbnails.js';
import { photos } from './data.js';
import { isEscapeKey } from './util.js';
const bigPicture = document.querySelector('.big-picture');

const onCancelButtonClick = () => {
  closeBigPicture();
};

const onCancelButtonKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const loadComments = (comments, count) => {
  const commentsList = bigPicture.querySelector('.social__comments');
  const commentElement = commentsList.querySelector('li');
  commentsList.innerHTML = '';
  for (let i = count; i < count + 5; i++) {
    if (i >= comments.length) {
      break;
    }
    const newComment = commentElement.cloneNode(true);
    const newCommentImg = newComment.querySelector('.social__picture');
    newCommentImg.src = comments[i].avatar;
    newCommentImg.alt = comments[i].name;
    newComment.querySelector('.social__text').textContent = comments[i].message;
    commentsList.append(newComment);
  }
};

const renderBigPicture = (evt) => {
  const pictureId = evt.target.src.split('photos/')[1].split('.')[0];
  const currentPhoto = photos.filter((photo) => (photo.id === parseInt(pictureId, 10)))[0];
  const img = bigPicture.querySelector('.big-picture__img img');
  img.src = currentPhoto.url;
  img.alt = currentPhoto.description;
  bigPicture.querySelector('.social__caption').textContent = currentPhoto.description;
  bigPicture.querySelector('.likes-count').textContent = currentPhoto.likes;
  bigPicture.querySelector('.social__comment-shown-count').textContent = (currentPhoto.comments.length < 5) ? currentPhoto.comments.length : 5;
  bigPicture.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;
  loadComments(currentPhoto.comments, 0);
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onCancelButtonKeydown);
}

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('.modal-open');
  const cancelButton = bigPicture.querySelector('#picture-cancel');
  document.addEventListener('keydown', onCancelButtonKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
};

pictures.addEventListener('click', (evt) => {
  renderBigPicture(evt);
  showBigPicture();
});
