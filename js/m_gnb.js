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

  $(".m_gnb_bg").hide();

  $(".tablet_gnb03").click(function (e) {
    $(".m_gnb_bg").show();
    $(".m_gnb_wrap").animate({ right: "0" }, 300);
    $("section").animate({ left: "-70%" }, 300);
  });
  $(".m_gnb_close").click(function (e) {
    $(".m_gnb_bg").hide();
    $(".m_gnb_wrap").animate({ right: "-100%" }, 300);
    $("section").animate({ left: "0" }, 300);
  });

  $(m_gnb_sub).hide();
  $(m_gnb_sub2).hide();
  $(sub_up).css({ transform: "rotate(0.5turn)" });
  $(sub_arrow).css({ transform: "rotate(0.5turn)" });

  $(m_gnb_title).click(function (e) {
    e.stopPropagation();
    i = $(this).index();
    $(m_gnb_sub[i]).toggle(300);
    if (count == false) {
      $(sub_up[i]).css({ transform: "none" });
      count = true;
    } else if (count == true) {
      $(sub_up[i]).css({ transform: "rotate(0.5turn)" });
      count = false;
    }
    $(m_gnb_sub2).hide();
    $(sub_arrow).css({ transform: "rotate(0.5turn)" });
  });

  $(m_gnb_sub_li).click(function (e) {
    e.stopPropagation();
    i = $(m_gnb_sub_li).index(this);
    $(m_gnb_sub2[i]).toggle(300);
    if (count_sub == false) {
      $(sub_arrow[i]).css({ transform: "none" });
      count_sub = true;
    } else if (count_sub == true) {
      $(sub_arrow[i]).css({ transform: "rotate(0.5turn)" });
      count_sub = false;
    }
  });
});
