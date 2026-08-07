// 複数の画像を順番に表示するアニメーション
const items = document.querySelectorAll('.img-item');
console.log(items.length);
for(let i = 0; i < items.length; i++){
  const keyframe1 = {
    opacity:[0,1],
    // rotate: ['x 180deg', 0],回転しながら表示
    // translate:['0 20px', 0],下からふわっと表示される
    // rotate:['5deg',0],
    // scale:[1.1,1]ふわふわと回転しながら落ちてくる
    // filter:['blur(6px)','blur(0)'],
  };
  const options = {
    duration:600,
    delay:600 + i * 300,
    fill:'forwards'
  };
  items[i].animate(keyframe1,options);
}