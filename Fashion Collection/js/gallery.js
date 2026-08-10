const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

// for(let i=0; i<thumbImages.length; i++ ){
//   thumbImages[i].addEventListener('mouseover',(event) => {
//       mainImage.src = event.target.src;
//       mainImage.animate({opacity:[0,1]},500);
//   });
// }

const showImg = (thumbImage) => {
  thumbImage.addEventListener('mouseover',(event) => {
  mainImage.src = event.target.src;
  mainImage.animate({opacity:[0,1]},500);
  }
  )};
thumbImages.forEach(showImg);

