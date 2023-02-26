import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const pictureContainer = document.querySelector('.gallery')
const pictureMarkup = createGalleryItemsMarkup(galleryItems)

pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup)

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
        return `
<div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
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


    new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250
     });
    
    // console.log(lightbox)

//   document.addEventListener('keydown', onEscClick);
    
//   function onEscClick(e) {
//     e.code === 'ESCAPE';
//     document.removeEventListener('keydown', onEscClick);
//   }
}