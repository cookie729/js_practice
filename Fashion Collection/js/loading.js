
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading__screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load',() => {
// ローディング中、グレースクリーン
  const loadingKeyframe = {
    opacity:[1,0],
    visibility:['visible', 'hidden']
  }
  const timing = {
    duration:2000,
    delay:1200,
    easing:'ease',
    fill:'forwards'
  }

  loadingAreaGrey.animate(loadingKeyframe,timing);

// ローディング終了時、グリーンスクリーン
  const screenKeyframe = {
    translate:['0 100vh','0 0', '0 -100vh']
  }
  const screenTiming = {
    duration:2000,
    delay:800,
    easing:'ease',
    fill:'forwards'
  }
  loadingAreaGreen.animate(screenKeyframe,screenTiming)
// テキストを透明化 
  const textKeyframe = {
    opacity:[1,0],
    offset:[.8,1]
  }
  const textTiming = {
    duration:1200,
    easing:'ease',
    fill:'forwards',
  }
  loadingText.animate(textKeyframe,textTiming)
  
});



