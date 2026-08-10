// FAQボタン(.faq__question)を全て取得
const faqQuestions = document.querySelectorAll(".faq__question");

// 質問ボタン1つずつにクリック時の開閉処理を設定する
// 通常であれば、同じ class に対して、指定しているので、全てが開き、全てが閉じてしまう
// その為、forEach を使い配列としてクリックしたものを処理している
faqQuestions.forEach((question) => {
  // FAQボタンの次の要素(回答部分 .faq__answer)を取得
  const answer = question.nextElementSibling;

  question.addEventListener("click", () => {
    // クリック前の状態が「開いていたか」を判定 true or false
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    // 開閉状態を反転させて aria-expanded に反映(true/false)
    // ※ここを見てCSS側がアイコンの向きを切り替える
    question.setAttribute("aria-expanded", String(!isExpanded));

    // 開く: 回答の高さ(scrollHeight)をmax-heightに設定してアニメーション表示
    // 閉じる: インラインのmax-heightを削除し、CSSの初期値(0)に戻して非表示にする
    answer.style.maxHeight = isExpanded ? null : `${answer.scrollHeight}px`;
    // if (isExpanded) {
    //   answer.style.maxHeight = null;
    // } else {
    //   answer.style.maxHeight = `${answer.scrollHeight}px`;
    // }
  });
});
