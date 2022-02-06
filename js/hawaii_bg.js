const hawaii_bg = document.querySelector(".hawaii_bg");

hawaii_bg.style.opacity = "0";

window.addEventListener("scroll", show);

function show() {
  let scrollY = window.scrollY;

  if (scrollY > 500) {
    hawaii_bg.style.opacity = "1";
    hawaii_bg.style.transition = "3s";
  } else {
    hawaii_bg.style.opacity = "0";
    hawaii_bg.style.transition = "3s";
  }
}
