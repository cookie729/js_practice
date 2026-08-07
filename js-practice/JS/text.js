// 上に浮かび上がるアニメーション
const heading = document.querySelector('#heading')

const keyframe1 = {
  opacity: [0, 1],
  translate: ['0 50px', 0]
};
const timing = {
  duration: 2000,
  easing: 'ease-in-out'
};

heading.animate(keyframe1,timing)

// 回転するアニメーション
const rotate = document.querySelector('#rotate')

const keyframe2 = {
  opacity:[0,1],
  rotate:['x 360deg', 0],
};

rotate.animate(keyframe2,timing)

// 色が変化するアニメーション
const color = document.querySelector('#color')

const keyframe3 = {
  color:['#f66', '#fc2', '#0c6', '#0bd']
};
const options = {
  duration:4000,
  direction:'alternate',
  iterations:Infinity,
};
color.animate(keyframe3,options)

//背景が伸びるアニメーション　ただし背景色＝文字色の時に限る
const bglong = document.querySelector('#bglong');

const keyframe4 = {
  color:['transparent','#fff'],
  backgroundPosition:['100% 0','0 0']
};

bglong.animate(keyframe4,timing)

// 文字が伸びるアニメーション
const textlong = document.querySelector('#textlong')

const keyframe5 = {
  clipPath: ['inset(0 100% 0 0)','inset(0 0 0 0)'],
}
textlong.animate(keyframe5,timing)

// 真ん中の円から広がるアニメーション
const circle = document.querySelector('#circle')

const keyframe6 = {
  clipPath: ['circle(0% at 50% 50%)','circle(100% at 50% 50%)'],
}
circle.animate(keyframe6,timing)

// フヨフヨ動くアニメーション
const fuyo = document.querySelector('#fuyo')

const keyframe7 = {
  borderRadius:[
    '20% 50% 50% 70% / 50% 50% 70% 50%',
    '40% 60% 45% 55% / 55% 40% 60% 45%',
    '55% 45% 65% 35% / 40% 60% 45% 55%',
    '45% 55% 40% 60% / 65% 35% 55% 45%',
    '60% 40% 55% 45% / 45% 55% 35% 65%',
    '35% 65% 50% 50% / 55% 45% 60% 40%',
    '20% 50% 50% 70% / 50% 50% 70% 50%',
  ],
  transform: [
    'scale(1)',
    'scale(1.03, .97)',
    'scale(.97, 1.03)',
    'scale(1.02, .98)',
    'scale(.98, 1.02)',
    'scale(1)',
    'scale(1)',
  ],
};
const fuyoOptions = {
  duration: 10000,
  iterations: Infinity,
  direction:'alternate'
}
fuyo.animate(keyframe7,fuyoOptions)

