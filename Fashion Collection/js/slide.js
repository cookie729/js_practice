// スライドを表示させる
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");
const openKeyframe = {
  translate: ["100vw", 0],
};
const closeKeyframe = {
  translate: [0, "100vw"],
};
const menuOptions = {
  duration: 800,
  easing: "ease",
  fill: "forwards",
};

// メニューを開く
menuOpen.addEventListener("click", () => {
  menuPanel.animate(openKeyframe, menuOptions);

  // メニューリストを上から順に表示する

  const menuList = (menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ["2rem", 0],
      },
      {
        duration: 1000,
        delay: 300 * index,
        easing: "ease",
        fill: "forwards",
      },
    );
  };
  menuItems.forEach(menuList);
});

// メニューを閉じる
menuClose.addEventListener("click", () => {
  menuPanel.animate(closeKeyframe, menuOptions);
  const itemRiset = (menuItem) => {
    menuItem.animate(
      {opacity:[1,0],},menuOptions);
  };
  menuItems.forEach(itemRiset);
});
