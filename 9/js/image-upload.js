import { isEscapeKey } from './util.js';
import { createValidator, hashTagField, commentField } from './validators.js';

const form = document.querySelector('#upload-select-image');
const uploadInputElement = form.querySelector('#upload-file');
const editorBox = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');

hashTagField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
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
  uploadInputElement.files = '';
}

uploadInputElement.addEventListener('change', () => {
  editorBox.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCancelButtonKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (createValidator(form).validate()) {
    form.submit();
  }
});


