const reserve_img = document.querySelector(".reserve_img");

reserve_img.style.opacity = "0";

if (window.matchMedia("(min-width: 1024px)").matches) {
  window.addEventListener("scroll", show);

  function show() {
    let scrollY = window.scrollY;

    if (scrollY > 1900) {
      reserve_img.style.opacity = "1";
      reserve_img.style.transition = "3s";
    } else {
      reserve_img.style.opacity = "0";
      reserve_img.style.transition = "3s";
    }
  }
}

if (
  window.matchMedia("screen and (min-width: 768px) and (max-width: 1023px)")
    .matches
) {
  window.addEventListener("scroll", show);

  function show() {
    let scrollY = window.scrollY;

    if (scrollY > 3100) {
      reserve_img.style.opacity = "1";
      reserve_img.style.transition = "3s";
    } else {
      reserve_img.style.opacity = "0";
      reserve_img.style.transition = "3s";
    }
  }
}

if (window.matchMedia("(max-width: 767px)").matches) {
  window.addEventListener("scroll", show);

  function show() {
    let scrollY = window.scrollY;

    if (scrollY > 3200) {
      reserve_img.style.opacity = "1";
      reserve_img.style.transition = "3s";
    } else {
      reserve_img.style.opacity = "0";
      reserve_img.style.transition = "3s";
    }
  }
}
