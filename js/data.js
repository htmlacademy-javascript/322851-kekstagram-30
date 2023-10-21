import { getElementOfArray, getRandomInteger, generateRandomIndex } from './util.js';
import { PHOTOS_NUM, AVATAR_NUM } from './constants.js';

// Исходные данные

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

// Генераторы индексов
const generateCommentIndex = generateRandomIndex(1, 750);
const generatePhotoIndex = generateRandomIndex(1, PHOTOS_NUM);

// Основные функции
const createComment = () => ({
  id: generateCommentIndex(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_NUM)}.svg`,
  message: getElementOfArray(MESSAGES),
  name: getElementOfArray(NAMES),
});

const createPhoto = () => {
  const id = generatePhotoIndex();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Это ${getElementOfArray(THEMES)}`,
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
  };
};

const photos = Array.from({length: PHOTOS_NUM}, createPhoto);

export { photos };
