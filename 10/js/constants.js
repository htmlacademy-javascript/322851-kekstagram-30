const PHOTOS_NUM = 25;
const AVATAR_NUM = 6;
const COMMENTS_NUM = 5;
const EFFECTS = {
  'chrome': {min: 0, max: 1, step: 0.1, start: 1},
  'sepia': {min: 0, max: 1, step: 0.1, start: 1},
  'marvin': {min: 0, max: 100, step: 1, start: 100},
  'phobos': {min: 0, max: 3, step: 0.1, start: 3},
  'heat': {min: 1, max: 3, step: 0.1, start: 3}
};

export { PHOTOS_NUM, AVATAR_NUM, COMMENTS_NUM, EFFECTS };
