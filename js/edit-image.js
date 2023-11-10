import { updateSlider, sliderElement, sliderBox } from './slider.js';
import { Effects } from './constants.js';

const img = document.querySelector('.img-upload__preview img');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const smallerScaleButton = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const effectChoice = document.querySelector('.effects__list');
const effectValue = document.querySelector('.effect-level__value');
let currentEffect = 'none';

sliderBox.classList.add('hidden');

const cancelEffects = () => {
  sliderBox.classList.add('hidden');
  img.style = 'none';
  scaleValue.value = '100%';
  document.querySelector('#effect-none').checked = true;
};

const applyEffect = () => {
  const value = sliderElement.noUiSlider.get();
  effectValue.value = value;
  switch (currentEffect) {
    case 'chrome':
      img.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      img.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      img.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      img.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      img.style.filter = `brightness(${value})`;
      break;
  }
};

biggerScaleButton.addEventListener('click', () => {
  if (parseInt(scaleValue.value, 10) < 100) {
    const newScale = parseInt(scaleValue.value, 10) + 25;
    scaleValue.value = `${newScale}%`;
    img.style.transform = `scale(${newScale / 100})`;
  }
});

smallerScaleButton.addEventListener('click', () => {
  if (parseInt(scaleValue.value, 10) > 25) {
    const newScale = parseInt(scaleValue.value, 10) - 25;
    scaleValue.value = `${newScale}%`;
    img.style.transform = `scale(${newScale / 100})`;
  }
});

effectChoice.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'INPUT') {
    currentEffect = evt.target.value;
    switch (evt.target.value) {
      case 'none':
        cancelEffects();
        break;
      case 'chrome':
        updateSlider(Effects.CHROME);
        break;
      case 'sepia':
        updateSlider(Effects.SEPIA);
        break;
      case 'marvin':
        updateSlider(Effects.MARVIN);
        break;
      case 'phobos':
        updateSlider(Effects.PHOBOS);
        break;
      case 'heat':
        updateSlider(Effects.HEAT);
        break;
    }
  }
}
);

sliderElement.noUiSlider.on('update', applyEffect);

export { cancelEffects };
