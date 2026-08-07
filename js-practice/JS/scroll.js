// 対象が範囲内に現れたら実行
const showSea = (entries) => {
  const keyframe = {
    opacity: [0,1],
    translate: ['200px 0', 0],
  };
  entries[0].target.animate(keyframe,1000);
};
const seaObsever = new IntersectionObserver(showSea);

seaObsever.observe(document.querySelector('#sea'));