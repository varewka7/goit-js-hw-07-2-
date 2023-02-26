import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureContainer = document.querySelector('.gallery')
const pictureMarkup = createGalleryItemsMarkup(galleryItems)

pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup)

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt= '${description}'
    />
  </a>
</div>`
    }).join('')

}

pictureContainer.addEventListener('click', onGallaryClick)


function onGallaryClick(e) {
  e.preventDefault();
  // console.log(e.target.dataset)
  
  
  // if (e.target.classList.contains('gallery__link')) {
  //   return;
  // }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
  instance.show();

  document.addEventListener('keydown', onEscClick);
    
  function onEscClick(e) {
   
    e.code === 'ESCAPE';
    instance.close();
    document.removeEventListener('keydown', onEscClick);
  }
}