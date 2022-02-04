$(document).ready(function () {
  const bean_img = document.querySelector(".bean_img");
  const bean_txt = document.querySelector(".bean_txt");

  if (window.matchMedia("(min-width: 1024px)").matches) {
    let bean_img_left = 13.5;
    let bean_txt_right = 8.4;

    // $(bean_img).css({ left: "-100%", opacity: "0" });
    // $(bean_txt).css({ right: "-100%", opacity: "0" });
    // $(window).scroll(function (e) {
    //   let scrollY = $(window).scrollTop();
    //   console.log(scrollY);

    //   if (scrollY >= 100) {
    //     show();
    //     // $(window).off("scroll");
    //   }
    //   if (scrollY == 0) {
    //     hide();
    //   }
    // });

    window.addEventListener("scroll", scroll);
    bean_img.style.left = "-100%";
    bean_img.style.opacity = "0";
    bean_txt.style.right = "-100%";
    bean_txt.style.opacity = "0";

    function scroll(params) {
      let scrollY = window.scrollY;
      console.log(scrollY);

      if (scrollY >= 100) {
        bean_img.style.left = `${bean_img_left}%`;
        bean_img.style.opacity = "1";
        bean_img.style.transition = "2s";
        bean_txt.style.right = `${bean_txt_right}%`;
        bean_txt.style.opacity = "1";
        bean_txt.style.transition = "2s";
      }
      if (scrollY == 0) {
        bean_img.style.left = "-100%";
        bean_img.style.opacity = "0";
        bean_img.style.transition = "2s";
        bean_txt.style.right = "-100%";
        bean_txt.style.opacity = "0";
        bean_txt.style.transition = "2s";
      }
    }

    function show() {
      $(bean_img).animate({ left: `${bean_img_left}%`, opacity: "1" }, 2000);
      $(bean_txt).animate({ right: `${bean_txt_right}%`, opacity: "1" }, 2000);
    }

    function hide() {
      $(bean_img).animate({ left: "-100%", opacity: "0" }, 2000);
      $(bean_txt).animate({ right: "-100%", opacity: "0" }, 2000);
    }
  }
  // if (window.matchMedia("(max-width: 1023px)").matches) {
  // }
  // if (window.matchMedia("(max-width: 767px)").matches) {
  // }
});
