const sliderElement = document.querySelector('.effect-level__slider');
const sliderBox = document.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower'
});

const updateSlider = ({min, max, start, step}) => {
  sliderBox.classList?.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
    connect: 'lower'
  });
};

export { updateSlider, sliderElement, sliderBox };
