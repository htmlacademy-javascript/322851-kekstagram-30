const PHOTOS_NUM = 25;
const AVATAR_NUM = 6;
const COMMENTS_NUM = 5;
const RERENDER_DELAY = 500;
const EFFECTS = {
  'chrome': {min: 0, max: 1, step: 0.1, start: 1},
  'sepia': {min: 0, max: 1, step: 0.1, start: 1},
  'marvin': {min: 0, max: 100, step: 1, start: 100},
  'phobos': {min: 0, max: 3, step: 0.1, start: 3},
  'heat': {min: 1, max: 3, step: 0.1, start: 3}
};

const BASE_URL = 'https://30.javascript.pages.academy/kekstagram';
const ROUTES = {
  'getData': '/data',
  'postData': '/'
};

const METHODS = {
  'POST': 'post',
  'GET': 'get'
};

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export {
  PHOTOS_NUM,
  AVATAR_NUM,
  COMMENTS_NUM,
  EFFECTS,
  BASE_URL,
  ROUTES,
  METHODS,
  RERENDER_DELAY,
  FILE_TYPES };
