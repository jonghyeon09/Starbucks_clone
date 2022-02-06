$(document).ready(function () {
  const ul = document.querySelector(".prom_slider_view ul");
  const li = document.querySelectorAll(".prom_slider_view ul li");
  const pager_bt = document.querySelectorAll(".pager_bt");
  const prev = document.querySelector(".prev a");
  const next = document.querySelector(".next a");
  const prom_bt = document.querySelector(".right_inner");
  const prom_arrow = document.querySelector(".prom img");
  const li_width = $(li).width() + 10;
  const width = $(".prom_slider_view ul li").width() + 10;
  let click = false;
  let count = 0;
  let e = 0;
  let prom_bt_count = 0;

  //모바일
  const prom_slider_view = document.getElementById("prom_slider_view");
  let startPos = 0;
  let offset = 0;
  let curPos = 0;

  prom_slider_view.addEventListener("touchstart", (e) => {
    clearInterval(interval);
    $("#play").removeClass("stop");
    $("#play").addClass("start");
    e = 1;
    startPos = e.touches[0].pageX;
    offset = 0;
  });

  prom_slider_view.addEventListener("touchmove", (e) => {
    offset = curPos + (e.targetTouches[0].pageX - startPos);
    // if (count == 0) {
    //   offset = offset + li_width;
    // } else if (count == 1) {
    //   offset = curPos + (e.targetTouches[0].pageX - startPos);
    // } else if (count == 2) {
    //   offset = offset - li_width;
    // }
    // ul.style.left = `${offset}px`;
    ul.style.transform = `translate3d(${offset}px, 0px, 0px)`;
    document.querySelector("body").style.overflow = "hidden";
  });

  prom_slider_view.addEventListener("touchend", (e) => {
    // ul.style.left = `${li_width}`;
    ul.style.transform = `translate3d(${offset}px, 0px, 0px)`;
    ul.style.transitionDuration = "0ms";

    if (offset < -150) {
      offset0();
      next_event();
    } else if (offset > 150) {
      offset0();
      prev_event();
    } else {
      offset0();
      ul.style.transitionDuration = "100ms";
      li_opacity(count);
    }
    document.querySelector("body").style.overflow = "visible";
  });

  function offset0() {
    ul.style.transform = `translate3d(0px, 0px, 0px)`;
    ul.style.transitionDuration = "1ms";
  }
  //////////////////////////////////////////////////
  $(pager_bt[0]).children().addClass("active");

  $(li[1]).css({ opacity: "1" });

  $(".prom_wrap").hide();

  $(pager_bt).click(function () {
    setTimeout(() => {
      $("#play").removeClass("stop");
      $("#play").addClass("start");
      e = 1;
      clearInterval(interval);
    }, 0);
    i = $(this).index();
    if (click == false) {
      click = true;
      if (i == 0) {
        count = 0;
        $(ul)
          .stop()
          .animate(
            { left: `${width}px` },
            {
              complete: function () {
                click = false;
              },
            }
          );
      } else if (i == 1) {
        count = 1;
        $(ul)
          .stop()
          .animate(
            { left: 0 },
            {
              complete: function () {
                click = false;
              },
            }
          );
      } else if (i == 2) {
        count = 2;
        $(ul)
          .stop()
          .animate(
            { left: -li_width },
            {
              complete: function () {
                click = false;
              },
            }
          );
      }
    }
    pager_idx(i);
    li_opacity(i);
    pager(i);
  });

  $(prom_bt).click(function (e) {
    if (prom_bt_count == 0) {
      $(".prom_wrap").slideDown();
      $(prom_arrow).css({ transform: "rotate(0.5turn)" });
      prom_bt_count = 1;
      interval = setInterval(() => {
        $(next).trigger("click");
      }, 2000);
    } else if (prom_bt_count == 1) {
      $(".prom_wrap").slideUp();
      $(prom_arrow).css({ transform: "none" });
      prom_bt_count = 0;
      clearInterval(interval);
    }
  });

  $(next).click(function () {
    next_event();
    $("#play").removeClass("stop");
    $("#play").addClass("start");
    e = 1;
    clearInterval(interval);
  });

  $(prev).click(function (e) {
    prev_event();
    $("#play").removeClass("stop");
    $("#play").addClass("start");
    e = 1;
    clearInterval(interval);
  });

  $("#play").click(function () {
    if (e == 0) {
      $("#play").removeClass("stop");
      $("#play").addClass("start");
      e = 1;
      clearInterval(interval);
    } else if (e == 1) {
      e = 0;
      $("#play").addClass("stop");
      $("#play").removeClass("start");
      interval = setInterval(() => {
        next_event();
      }, 2000);
    }
  });

  function li_opacity(count) {
    $(li).stop().animate({ opacity: "0.4" }, 500);
    $(li[count + 1])
      .stop()
      .animate({ opacity: "1" }, 500);
  }
  function pager(count) {
    $(pager_bt).children().removeClass("active");
    $(pager_bt[count]).children().addClass("active");
  }
  function pager_idx(i) {
    $(pager_bt).children().removeClass("active");
    $(pager_bt[i]).children().addClass("active");
  }

  function next_event() {
    count++;
    if (click == false) {
      click = true;
      if (count == 0) {
        $(ul)
          .stop()
          .animate(
            { left: 0 },
            {
              complete: function () {
                $(ul).animate({ left: 0 });
                click = false;
              },
            }
          );
      } else if (count == 1) {
        $(ul)
          .stop()
          .animate(
            { left: -li_width * 0 },
            {
              complete: function () {
                $(ul).animate({ left: -li_width * 0 });
                click = false;
              },
            }
          );
      } else if (count == 2) {
        $(ul)
          .stop()
          .animate(
            { left: -li_width * 1 },
            {
              complete: function () {
                $(ul).animate({ left: -li_width * 1 });
                click = false;
              },
            }
          );
      } else if ((count = 3)) {
        $(ul)
          .stop()
          .animate(
            { left: -li_width * 2 },
            {
              complete: function () {
                $(ul).css({ left: `${width}px` });
                click = false;
              },
            }
          );
        count = 0;
      }
    }
    li_opacity(count);
    pager(count);
  }

  function prev_event() {
    count--;
    if (click == false) {
      click = true;
      if (count == -1) {
        $(ul)
          .stop()
          .animate(
            { left: width * 2 },
            {
              complete: function () {
                $(ul).css({ left: -li_width * 1 });
                click = false;
              },
            }
          );
        count = 2;
      } else if (count == 0) {
        $(ul)
          .stop()
          .animate(
            { left: li_width },
            {
              complete: function () {
                $(ul).animate({ left: li_width });
                click = false;
              },
            }
          );
      } else if (count == 1) {
        $(ul)
          .stop()
          .animate(
            { left: 0 },
            {
              complete: function () {
                $(ul).animate({ left: 0 });
                click = false;
              },
            }
          );
      }
    }
    li_opacity(count);
    pager(count);
  }
});
