const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const totalCommentsCount = bigPicture.querySelector('.social__comment-total-count');
const shownCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const commentElementTemplate = document.querySelector('.social__comment');
const commentsList = bigPicture.querySelector('.social__comments');
const loaderButton = bigPicture.querySelector('.social__comments-loader');
let count = 0;
let currentComments;

const loadComments = () => {
  for (let i = count; i < count + 5; i++) {
    if (i >= currentComments.length) {
      break;
    }
    const newComment = commentElementTemplate.cloneNode(true);
    const newCommentImg = newComment.querySelector('.social__picture');
    newCommentImg.src = currentComments[i].avatar;
    newCommentImg.alt = currentComments[i].name;
    newComment.querySelector('.social__text').textContent = currentComments[i].message;
    commentsList.append(newComment);
  }
  count += 5;
  shownCommentsCount.textContent = (currentComments.length < 5 || count > currentComments.length) ? currentComments.length : count;
};


const renderBigPicture = ({url, description, likes, comments}) => {
  bigPictureImage.src = url;
  bigPictureImage.alt = description;
  bigPictureCaption.textContent = description;
  bigPictureLikes.textContent = likes;
  totalCommentsCount.textContent = comments.length;
  commentsList.innerHTML = '';
  count = 0;
  currentComments = comments;
  loadComments();
};

loaderButton.addEventListener('click', () => {
  if (count < currentComments.length) {
    loadComments();
  }
});


export { bigPicture, renderBigPicture };
