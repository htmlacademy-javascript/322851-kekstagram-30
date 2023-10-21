import { photos } from './data';
import { createThumbnails } from './thumbnails';

const pictures = document.querySelector('.pictures');

pictures.appendChild(createThumbnails(photos));

