import { getElementOfArray, getRandomInteger, generateRandomIndex } from './utils.js';

// Исходные данные
const PHOTOS_NUM = 25;
const AVATAR_NUM = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const THEMES = [
  'портрет', 'натюрморт', 'пейзаж', 'фото интерьера', 'коллаж', 'мем'
];

const QUALITIES = [
  'классно',
  'красиво',
  'чудесно',
  'свежо',
  'актуально',
  'отвратительно',
  'смешно',
  'не красиво',
  'плохо'
];

// Основные функции

const generateCommentIndex = generateRandomIndex(1, 750);
const generatePhoto = createPhoto();

function createPhoto() {
  const generatePhotoIndex = generateRandomIndex(1, PHOTOS_NUM);

  return function() {
    const id = generatePhotoIndex();

    return {
      id: id,
      url: `photos/${id}.jpg`,
      description: `Это ${getElementOfArray(THEMES)} и это ${getElementOfArray(QUALITIES)}.`,
      likes: getRandomInteger(15, 200),
      comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
    };
  };
}

function createComment() {
  return {
    id: generateCommentIndex(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_NUM)}.svg`,
    message: getElementOfArray(MESSAGES),
    name: getElementOfArray(NAMES),
  };
}

const photos = Array.from({length: PHOTOS_NUM}, generatePhoto);
//console.log(photos.sort((a,b) => a.id - b.id));

export { photos };
