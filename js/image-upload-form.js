import { isEscapeKey } from './util.js';
import { createValidator, hashTagField, commentField } from './validators.js';
import { cancelEffects } from './edit-image.js';
import { postRequest } from './api.js';
import { showFormMessage } from './errors.js';
import { FILE_TYPES } from './constants.js';

const form = document.querySelector('#upload-select-image');
const uploadInputElement = form.querySelector('#upload-file');
const editorBox = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const pristine = createValidator(form);
const formErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const formSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const imagePreview = form.querySelector('.img-upload__preview img');


const checkImageType = (name) => FILE_TYPES.some((value) => name.endsWith(value));


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
  if (isEscapeKey(evt) && !document.querySelector('.error')) {
    closeImageForm();
    document.removeEventListener('keydown', onCancelButtonKeydown);
  }
};

const onCancelButtonClick = () => {
  closeImageForm();
};

function closeImageForm() {
  editorBox.classList.add('hidden');
  form.reset();
  cancelEffects();
  document.body.classList.remove('modal-open');
}

uploadInputElement.addEventListener('change', () => {
  const file = uploadInputElement.files[0];
  if (checkImageType(file.name)) {
    imagePreview.src = URL.createObjectURL(file);
  }
  editorBox.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onCancelButtonKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    const data = new FormData(form);
    postRequest(data)
      .then(() => {
        showFormMessage(formSuccessTemplate);
        closeImageForm();
      })
      .catch(() => {
        showFormMessage(formErrorTemplate);
      });
  }
});


