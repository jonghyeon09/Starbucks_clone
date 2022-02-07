$(document).ready(function () {
  const ul = document.querySelectorAll(".footer_menu > ul");
  const li = document.querySelectorAll(".footer_menu > ul>li");
  const title = document.querySelectorAll(".title");
  const title_arrow = document.querySelectorAll(".footer_arrow");
  const sub = document.querySelectorAll(".mobile_sub > a");
  const sub_arrow = document.querySelectorAll(".moblie_arrow");
  const sub_ul = document.querySelectorAll(".mobile_sub > ul");

  if (window.matchMedia("(max-width: 767px)").matches) {
    let count = 0;
    let sub_count = 0;
    $(sub_ul).hide();
    $(sub_arrow).css({ transform: "rotate(0.5turn)" });
    $(li).hide();
    $(title).show();
    $(title_arrow).css({ transform: "rotate(0.5turn)" });

    $(title).click(function () {
      i = $(title).index(this);

      if (count == 0) {
        count = 1;
        $(ul[i]).children().not(title).stop().slideDown();
        $(title_arrow[i]).css({ transform: "none" });
      } else if (count == 1) {
        count = 0;
        $(ul[i]).children().not(title).stop().slideUp();
        $(title_arrow[i]).css({ transform: "rotate(0.5turn)" });
      }
      console.log(count);
    });

    $(sub).click(function (e) {
      i = $(sub).index(this);

      if (sub_count == 0) {
        sub_count = 1;
        $(sub_ul[i]).stop().slideDown();
        $(sub_arrow[i]).css({ transform: "none" });
      } else if (sub_count == 1) {
        sub_count = 0;
        $(sub_ul[i]).stop().slideUp();
        $(sub_arrow[i]).css({ transform: "rotate(0.5turn)" });
      }
    });
  }
});
