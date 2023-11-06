import { isEscapeKey } from './util.js';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const showErrorMessage = () => {
  const messageBox = dataErrorTemplate.cloneNode(true);
  document.body.append(messageBox);
  setTimeout(() => {
    messageBox.remove();
  }, 5000);
};

const onCancelButtonKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeMessageBox();
  }
};

const onDocumentClick = (evt) => {
  evt.stopPropagation();
  if (!evt.target.classList.contains('success') || !evt.target.classList.contains('error')) {
    closeMessageBox();

  }
};

function closeMessageBox() {
  document.querySelector('.success')?.remove();
  document.querySelector('.error')?.remove();
  document.removeEventListener('keydown', onCancelButtonKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const showFormMessage = (box) => {
  const messageBox = box.cloneNode(true);
  const button = messageBox.querySelector('button');
  button.addEventListener('click', () => {
    messageBox.remove();
  });
  document.addEventListener('keydown', onCancelButtonKeydown);
  document.addEventListener('click', onDocumentClick);
  document.body.append(messageBox);
};


export { showErrorMessage, showFormMessage };
