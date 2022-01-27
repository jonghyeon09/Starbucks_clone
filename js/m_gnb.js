$(document).ready(function () {
  const m_gnb_title = document.querySelectorAll(".m_gnb_title > a");
  const m_gnb_sub = document.querySelectorAll(".m_gnb_sub");
  const m_gnb_sub_a = document.querySelectorAll(".m_gnb_sub>li>a");
  const m_gnb_sub2 = document.querySelectorAll(".m_gnb_sub2");
  const m_gnb_sub2_a = document.querySelectorAll(".m_gnb_sub2>li>a");
  const sub_up = document.querySelectorAll(".arrow_up");
  const sub_arrow = document.querySelectorAll(".arrow_sub");
  let count = false;
  let i;

  $(m_gnb_sub).hide();
  $(m_gnb_sub2).hide();
  $(sub_up).css({ transform: "rotate(0.5turn)" });
  $(sub_arrow).css({ transform: "rotate(0.5turn)" });

  $(m_gnb_title).click(function () {
    i = $(this).index();

    if (count == false) {
      sub_menu_down(i);
      count = true;
    } else if (count == true) {
      sub_menu_up(i);
      count = false;
    }
  });

  function sub_menu_down(i) {
    $(m_gnb_sub).stop().slideDown();
    $(sub_up[i]).css({ transform: "none" });
  }
  function sub_menu_up(i) {
    $(m_gnb_sub).stop().slideUp();
    $(sub_up[i]).css({ transform: "rotate(0.5turn)" });
  }
});
