import { isEscapeKey } from './util.js';
import { bigPicture } from './render-big-picture.js';


const onCancelButtonClick = () => {
  closeBigPicture();
};

const onCancelButtonKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCancelButtonKeydown);
}

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const cancelButton = bigPicture.querySelector('#picture-cancel');
  document.addEventListener('keydown', onCancelButtonKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
};

export { showBigPicture };
