import { isEscapeKey } from './util.js';
import { createValidator, hashTagField, commentField } from './validators.js';
import { cancelEffects } from './edit-image.js';

const form = document.querySelector('#upload-select-image');
const uploadInputElement = form.querySelector('#upload-file');
const editorBox = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const pristine = createValidator(form);

hashTagField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

commentField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});


const onCancelButtonKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeImageForm();
  }
};

const onCancelButtonClick = () => {
  closeImageForm();
};

function closeImageForm() {
  editorBox.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onCancelButtonKeydown);
  uploadInputElement.files = null;
  hashTagField.value = '';
  commentField.value = '';
  cancelEffects();
}

uploadInputElement.addEventListener('change', () => {
  editorBox.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCancelButtonKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    form.submit();
  }
});


