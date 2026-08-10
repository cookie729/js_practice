// スライダー内の要素を取得
const sliderImages = document.querySelectorAll('.slider-images img');
const sliderTrack = document.querySelector('.slider-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

// 現在表示中の画像のインデックス
let currentIndex = 0;

// トラックを現在のインデックス分だけ左右にずらして、1秒かけてスライドさせる
const updateSlider = () => {
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

// 次の画像へ(最後の画像の次は最初に戻る)
// 次へボタンがクリックされたとき
nextButton.addEventListener('click', () => {
  // 現在のインデックスに+1したインデックスが呼ばれる
  currentIndex = (currentIndex + 1) % sliderImages.length;
  // updateSlider が呼ばれ、トラックを現在のインデックス分だけ左右にずらして、1秒かけてスライド
  // dots も現在のindex 番号に合わせて active を更新する。 index currentIndex になる様にする
  updateSlider();
});

// 前の画像へ(最初の画像の前は最後に戻る)
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  updateSlider();
});

// ドットをクリックしたら該当の画像に切り替える
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // dot をクリックしたらクリックされた index 番号に currentIndex が更新される
    currentIndex = index;
    updateSlider();
  });
});
