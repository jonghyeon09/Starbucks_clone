const img01 = document.querySelector(".store_img01");
const img02 = document.querySelector(".store_img02");
const img03 = document.querySelector(".store_img03");
const img04 = document.querySelector(".store_img04");
const txt01 = document.querySelector(".store_txt01");
const txt02 = document.querySelector(".store_txt02");
const bt = document.querySelector(".store_bt");

opacity_0();

if (window.matchMedia("(min-width: 1024px)").matches) {
  let txt01_right = 149;
  let txt02_right = 168;
  let bt_right = 402;

  start();

  window.addEventListener("scroll", scroll);

  function scroll() {
    let scrollY = window.scrollY;

    if (scrollY >= 2300) {
      txt01.style.right = `${txt01_right}px`;
      txt02.style.right = `${txt02_right}px`;
      bt.style.right = `${bt_right}px`;
      opacity_1();
      tran();
    } else {
      start();
      opacity_0();
      tran();
    }
  }
}

if (
  window.matchMedia("screen and (min-width: 768px) and (max-width: 1023px)")
    .matches
) {
  let txt01_top = 390;
  let txt02_top = 510;
  let bt_bottom = 70;

  tablet_start();

  window.addEventListener("scroll", scroll);

  function scroll() {
    let scrollY = window.scrollY;

    if (scrollY >= 4400) {
      txt01.style.top = `${txt01_top}px`;
      txt02.style.top = `${txt02_top}px`;
      bt.style.bottom = `${bt_bottom}px`;
      opacity_1();
      tran();
    } else {
      tablet_start();
      opacity_0();
      tran();
    }
  }
}

if (window.matchMedia("(max-width: 767px)").matches) {
  let txt01_top = 360;
  let txt02_top = 460;
  let bt_bottom = 150;

  tablet_start();

  window.addEventListener("scroll", scroll);

  function scroll() {
    let scrollY = window.scrollY;

    if (scrollY >= 3800) {
      txt01.style.top = `${txt01_top}px`;
      txt02.style.top = `${txt02_top}px`;
      bt.style.bottom = `${bt_bottom}px`;
      opacity_1();
      tran();
    } else {
      tablet_start();
      opacity_0();
      tran();
    }
  }
}

function start() {
  txt01.style.right = "-700px";
  txt02.style.right = "-700px";
  bt.style.right = "-700px";
}
function tablet_start() {
  txt01.style.top = "0";
  txt02.style.top = "800px";
  bt.style.bottom = "-70px";
}

function opacity_0() {
  img01.style.opacity = "0";
  img02.style.opacity = "0";
  img03.style.opacity = "0";
  img04.style.opacity = "0";
  txt01.style.opacity = "0";
  txt02.style.opacity = "0";
  bt.style.opacity = "0";
}

function opacity_1() {
  img01.style.opacity = "1";
  img02.style.opacity = "1";
  img03.style.opacity = "1";
  img04.style.opacity = "1";
  txt01.style.opacity = "1";
  txt02.style.opacity = "1";
  bt.style.opacity = "1";
}

function tran() {
  img01.style.transition = "3s";
  img02.style.transition = "3.5s";
  img03.style.transition = "4s";
  img04.style.transition = "4.5s";
  txt01.style.transition = "3s";
  txt02.style.transition = "3.5s";
  bt.style.transition = "4s";
}
