$(document).ready(function () {
  const m_gnb_title = document.querySelectorAll(".m_gnb_title");
  const m_gnb_sub = document.querySelectorAll(".m_gnb_sub");
  const m_gnb_sub_li = document.querySelectorAll(".m_gnb_sub_li");
  const m_gnb_sub2 = document.querySelectorAll(".m_gnb_sub2");
  const sub_up = document.querySelectorAll(".arrow_up");
  const sub_arrow = document.querySelectorAll(".arrow_sub");
  let count = false;
  let count_sub = false;
  let i;

  $(m_gnb_sub).hide();
  $(m_gnb_sub2).hide();
  $(sub_up).css({ transform: "rotate(0.5turn)" });
  $(sub_arrow).css({ transform: "rotate(0.5turn)" });

  $(m_gnb_title).click(function (e) {
    e.stopPropagation();
    i = $(this).index();
    if (count == false) {
      sub_menu_down(i);
      count = true;
    } else if (count == true) {
      sub_menu_up(i);
      count = false;
    }
    console.log(count);
  });

  $(m_gnb_sub_li).click(function (e) {
    e.stopPropagation();
    i = $(m_gnb_sub_li).index(this);
    console.log(i);
    if (count_sub == false) {
      sub2_menu_down(i);
      count_sub = true;
    } else if (count_sub == true) {
      sub2_menu_up(i);
      count_sub = false;
    }
  });

  function sub_menu_down(i) {
    $(m_gnb_sub[i]).stop().slideDown();
    $(m_gnb_sub[i]).css({ display: "block" });
    $(sub_up[i]).css({ transform: "none" });
  }
  function sub_menu_up(i) {
    $(m_gnb_sub[i]).stop().slideUp();
    $(sub_up[i]).css({ transform: "rotate(0.5turn)" });
  }
  function sub2_menu_down(i) {
    $(m_gnb_sub2[i]).stop().slideDown();
    $(sub_arrow[i]).css({ transform: "none" });
  }
  function sub2_menu_up(i) {
    $(m_gnb_sub2[i]).stop().slideUp();
    $(sub_arrow[i]).css({ transform: "rotate(0.5turn)" });
  }
});
