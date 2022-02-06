const pick_txt01 = document.querySelector(".pick_txt01");
const pick_txt02 = document.querySelector(".pick_txt02");
const pick_bt = document.querySelector(".pick_bt");

if (window.matchMedia("(min-width: 1024px)").matches) {
  let pick_txt01_left = 200;
  let pick_txt02_left = 92;
  opacity0();
  left0();

  window.addEventListener("scroll", show);

  function show() {
    let scrollY = window.scrollY;

    if (scrollY > 1100) {
      opacity1();
      transition();
      pick_txt01.style.left = `${pick_txt01_left}px`;
      pick_txt02.style.left = `${pick_txt02_left}px`;
    } else {
      opacity0();
      transition();
      left0();
    }
  }
}

if (
  window.matchMedia("screen and (min-width: 768px) and (max-width: 1023px)")
    .matches
) {
  let pick_txt01_top = 720;
  let pick_txt02_top = 830;
  opacity0();
  tablet_top();

  window.addEventListener("scroll", show);

  function show() {
    let scrollY = window.scrollY;

    if (scrollY > 2800) {
      transition();
      pick_txt01.style.top = `${pick_txt01_top}px`;
      pick_txt01.style.opacity = "1";
      if (scrollY > 3000) {
        pick_txt02.style.top = `${pick_txt02_top}px`;
        pick_txt02.style.opacity = "1";
        pick_bt.style.opacity = "1";
      }
    } else {
      opacity0();
      transition();
      tablet_top();
    }
  }
}

if (window.matchMedia("(max-width: 767px)").matches) {
  let pick_txt01_top = 410;
  let pick_txt02_top = 490;
  opacity0();
  mobile_top();

  window.addEventListener("scroll", show);

  function show() {
    let scrollY = window.scrollY;

    if (scrollY > 2900) {
      transition();
      pick_txt01.style.top = `${pick_txt01_top}px`;
      pick_txt01.style.opacity = "1";
      if (scrollY > 3100) {
        pick_txt02.style.top = `${pick_txt02_top}px`;
        pick_txt02.style.opacity = "1";
        pick_bt.style.opacity = "1";
      }
    } else {
      opacity0();
      transition();
      mobile_top();
    }
  }
}

function tablet_top() {
  pick_txt01.style.top = "500px";
  pick_txt02.style.top = "1000px";
}

function mobile_top() {
  pick_txt01.style.top = "300px";
  pick_txt02.style.top = "390px";
}

function left0() {
  pick_txt01.style.left = "-700px";
  pick_txt02.style.left = "-700px";
}

function opacity0() {
  pick_txt01.style.opacity = "0";
  pick_txt02.style.opacity = "0";
  pick_bt.style.opacity = "0";
}

function opacity1() {
  pick_txt01.style.opacity = "1";
  pick_txt02.style.opacity = "1";
  pick_bt.style.opacity = "1";
}

function transition() {
  pick_txt01.style.transition = "2s";
  pick_txt02.style.transition = "2.5s";
  pick_bt.style.transition = "2s";
}
