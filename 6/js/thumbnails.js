const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnails = (photos) => {
  const thumbnailsListFragment = document.createDocumentFragment();
  photos.forEach(({url, description, likes, comments}) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);
    const img = thumbnail.querySelector('.picture__img');
    img.src = url;
    img.alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnailsListFragment.append(thumbnail);
  });
  return thumbnailsListFragment;
};

export { createThumbnails };
