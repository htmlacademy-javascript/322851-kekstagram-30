const PHOTOS_NUM = 25;
const AVATAR_NUM = 6;
const COMMENTS_NUM = 5;
const RERENDER_DELAY = 500;
const Effects = {
  'CHROME': {min: 0, max: 1, step: 0.1, start: 1},
  'SEPIA': {min: 0, max: 1, step: 0.1, start: 1},
  'MARVIN': {min: 0, max: 100, step: 1, start: 100},
  'PHOBOS': {min: 0, max: 3, step: 0.1, start: 3},
  'HEAT': {min: 1, max: 3, step: 0.1, start: 3}
};

const BASE_URL = 'https://30.javascript.pages.academy/kekstagram';
const Routes = {
  'GET_DATA': '/data',
  'POST_DATA': '/'
};

const Methods = {
  'POST': 'post',
  'GET': 'get'
};

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const RANDOM_PHOTOS_COUNT = 10;

export {
  PHOTOS_NUM,
  AVATAR_NUM,
  COMMENTS_NUM,
  Effects,
  BASE_URL,
  Routes,
  Methods,
  RERENDER_DELAY,
  FILE_TYPES,
  RANDOM_PHOTOS_COUNT
};
