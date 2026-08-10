// 監視対象が範囲内に現れたら実行する動作
const fadeinAnimate = (entries,obs) => {
  const keyframe = {
    opacity: [0,1],
    translate: ['0 50px', 0],
  };
  const timing = {
    duration:1000,
    easing:'ease',
    fill:'forwards',
  };
  entries.forEach((entry) => {
  if(entry.isIntersecting){
  entry.target.animate(keyframe,timing);
  obs.unobserve(entry.target);
  }; 
  });
};
// 監視機能設定
const fadeObserver = new IntersectionObserver(fadeinAnimate);

// 監視対象
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  // 対象を設定した機能で監視するように指示
fadeObserver.observe(fadeElement);
});
