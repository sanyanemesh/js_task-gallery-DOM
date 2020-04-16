'use strict';

const thumbs = document.querySelector('#thumbs');
const img = document.querySelector('#largeImg');

thumbs.onclick = function() {
  const thumbnail = event.target.closest('.list-item__link');

  if (!thumbnail) {
    return;
  }
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
};

function showThumbnail(href, title) {
  img.src = href;
  img.alt = title;
}
