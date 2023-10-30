const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
const hashTagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const validateHashTags = (values) => {
  const tags = values.split(/\s+/);
  if (!values.length) {
    return true;
  }
  const set = new Set(tags);
  return tags.length <= 5 && tags.every((tag) => regexp.test(tag)) && set.size === tags.length;
};

const getHashtagErrorMessage = () => {
  const tags = hashTagField.value.split(/\s+/);
  const set = new Set(tags);
  if (tags.length > 5) {
    return 'Не более пяти хэштэгов';
  }
  if (set.size !== tags.length) {
    return 'Одинаковые хэштэги';
  }
  return 'Неправильный хэштэг';
};

const createValidator = (form) => {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__form',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
  });
  pristine.addValidator(hashTagField, validateHashTags, getHashtagErrorMessage);
  return pristine;
};

export { createValidator, hashTagField, commentField };


