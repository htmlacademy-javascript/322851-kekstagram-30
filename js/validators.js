const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
const hashTagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const validateHashTags = (values) => {
  let tagsArray = values.split(/\s+/);
  tagsArray = tagsArray.map((tag) => tag.toLowerCase());
  if (!values.length) {
    return true;
  }
  const tagsSet = new Set(tagsArray);
  return tagsArray.length <= 5 && tagsArray.every((tag) => regexp.test(tag)) && tagsSet.size === tagsArray.length;
};

const getHashtagErrorMessage = () => {
  let tagsArray = hashTagField.value.split(/\s+/);
  tagsArray = tagsArray.map((tag) => tag.toLowerCase());
  const tagsSet = new Set(tagsArray);
  if (tagsArray.length > 5) {
    return 'Не более пяти хэштэгов';
  }
  if (tagsSet.size !== tagsArray.length) {
    return 'Одинаковые хэштэги';
  }
  return 'Неправильный хэштэг';
};

const createValidator = (form) => {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__form',
    errorTextTag: 'div',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
  });
  pristine.addValidator(hashTagField, validateHashTags, getHashtagErrorMessage);
  return pristine;
};

export { createValidator, hashTagField, commentField };


