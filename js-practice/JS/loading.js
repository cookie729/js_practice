const loadingArea = document.querySelector('#loading');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',() => {
  loadingArea.animate(
    {
      backdropFilter:['blur(10px)','blur(0)'],
      backgroundColor:['rgba(238, 221, 136, 1)','rgba(238, 221, 136, 0)'],
      visibility: ['visible', 'hidden'],
    },
    {
      duration:2000,
      delay:1200,
      easing:'ease',
      fill:'forwards',
    }
  );
  loadingText.animate(
    {
      opacity:[1,0],
      offset:[.8,1]
  },
  {
    duration:1200,
    easing:'ease',
    fill:'forwards'
  });
});