$(document).ready(function () {
  const a = document.querySelectorAll(".gnb_bt > a");
  const sub_menu = document.querySelectorAll(".gnb_sub_wrap");
  $("a").click(function (e) {
    e.preventDefault();
  });

  $(".gnb_bt").mouseenter(function () {
    i = $(this).index();
    $(a[i]).addClass("on");
    subMenu(i);
  });

  $(".gnb_bt").mouseleave(function () {
    i = $(this).index();
    $(a[i]).removeClass("on");
    $(sub_menu[i]).stop().slideUp();
  });

  function subMenu(i) {
    $(sub_menu).css({ display: "none" });
    $(sub_menu[i]).stop().slideDown();
    $(sub_menu[i]).css({ display: "block" });
  }
});
