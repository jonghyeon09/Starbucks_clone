const bean_img = document.querySelector(".bean_img");
const bean_txt = document.querySelector(".bean_txt");
const ease_out = "2s ease-out";

if (window.matchMedia("(min-width: 1024px)").matches) {
  let bean_img_left = 13.5;
  let bean_txt_right = 8.4;

  start();

  window.addEventListener("scroll", scroll);

  function scroll() {
    let scrollY = window.scrollY;

    if (scrollY >= 100) {
      bean_img.style.left = `${bean_img_left}%`;
      bean_img.style.opacity = "1";
      bean_img.style.transition = ease_out;
      bean_txt.style.right = `${bean_txt_right}%`;
      bean_txt.style.opacity = "1";
      bean_txt.style.transition = ease_out;
    }
    if (scrollY == 0) {
      bean_img.style.left = "-50%";
      bean_img.style.opacity = "0";
      bean_img.style.transition = ease_out;
      bean_txt.style.right = "-50%";
      bean_txt.style.opacity = "0";
      bean_txt.style.transition = ease_out;
    }
  }
}
if (
  window.matchMedia("screen and (min-width: 768px) and (max-width: 1023px)")
    .matches
) {
  let bean_img_left = 20;
  let bean_txt_right = 11;

  start();

  window.addEventListener("scroll", scroll);

  function scroll() {
    let scrollY = window.scrollY;

    if (scrollY >= 100) {
      bean_img.style.left = `${bean_img_left}%`;
      bean_img.style.opacity = "1";
      bean_img.style.transition = ease_out;
      bean_txt.style.right = `${bean_txt_right}%`;
      bean_txt.style.opacity = "1";
      bean_txt.style.transition = ease_out;
    }
    if (scrollY == 0) {
      bean_img.style.left = "-50%";
      bean_img.style.opacity = "0";
      bean_img.style.transition = ease_out;
      bean_txt.style.right = "-50%";
      bean_txt.style.opacity = "0";
      bean_txt.style.transition = ease_out;
    }
  }
}
if (window.matchMedia("(max-width: 767px)").matches) {
  let bean_img_top = 10.5;
  let bean_txt_bottom = 10.5;

  bean_img.style.left = "50%";

  mobile_start();

  window.addEventListener("scroll", scroll);

  function scroll() {
    let scrollY = window.scrollY;

    if (scrollY > 1000) {
      bean_img.style.top = `${bean_img_top}%`;
      bean_img.style.opacity = "1";
      bean_img.style.transition = ease_out;
      bean_txt.style.bottom = `${bean_txt_bottom}%`;
      bean_txt.style.opacity = "1";
      bean_txt.style.transition = ease_out;
    }
    if (scrollY < 1000) {
      bean_img.style.top = "-50%";
      bean_img.style.opacity = "0";
      bean_img.style.transition = ease_out;
      bean_txt.style.bottom = "-50%";
      bean_txt.style.opacity = "0";
      bean_txt.style.transition = ease_out;
    }
  }
}

function start() {
  bean_img.style.left = "-50%";
  bean_img.style.opacity = "0";
  bean_txt.style.right = "-50%";
  bean_txt.style.opacity = "0";
}

function mobile_start() {
  bean_img.style.top = "-50%";
  bean_img.style.opacity = "0";
  bean_txt.style.bottom = "-50%";
  bean_txt.style.opacity = "0";
}
