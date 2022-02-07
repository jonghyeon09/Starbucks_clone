$(document).ready(function () {
  const slider = document.querySelector(".awards_slider");
  const ul = document.querySelector(".awards_slider ul");
  const li = document.querySelector(".awards_slider ul li");
  const play = document.querySelector(".awards_slider_play a");
  const li_width = $(li).width();

  if (window.matchMedia("(max-width: 767px)").matches) {
    let count = 0;
    let e = 0;

    inter = setInterval(() => {
      slide();
    }, 3000);

    $(play).click(function () {
      if (e == 0) {
        clearInterval(inter);
        $(play).removeClass("stop");
        $(play).addClass("start");
        e = 1;
      } else if (e == 1) {
        inter = setInterval(() => {
          slide();
        }, 3000);
        $(play).addClass("stop");
        $(play).removeClass("start");
        e = 0;
      }
    });

    function slide() {
      if (count == 0) {
        $(ul).animate({ left: -li_width });
      } else if (count == 1) {
        $(ul).animate({ left: -li_width * 2 });
      } else if (count == 2) {
        $(ul).animate({ left: -li_width * 3 });
      } else if (count == 3) {
        $(ul).animate({ left: -li_width * 4 });
      } else if (count == 4) {
        $(ul).animate({ left: -li_width * 5 });
      } else if (count == 5) {
        $(ul).animate(
          { left: -li_width * 6 },
          {
            complete: function () {
              $(ul).css({ left: "0" });
              count = 0;
            },
          }
        );
      }
      count++;
    }
  }

  if (
    window.matchMedia("screen and (min-width: 768px) and (max-width: 1023px)")
      .matches
  ) {
    let count = 0;
    let e = 0;

    inter = setInterval(() => {
      slide();
    }, 3000);

    $(play).click(function () {
      if (e == 0) {
        clearInterval(inter);
        $(play).removeClass("stop");
        $(play).addClass("start");
        e = 1;
      } else if (e == 1) {
        inter = setInterval(() => {
          slide();
        }, 3000);
        $(play).addClass("stop");
        $(play).removeClass("start");
        e = 0;
      }
    });

    function slide() {
      if (count == 0) {
        $(ul).animate({ left: -li_width * 3 });
        count = 1;
      } else if (count == 1) {
        $(ul).animate(
          { left: -li_width * 6 },
          {
            complete: function () {
              $(ul).css({ left: "0" });
            },
          }
        );
        count = 0;
      }
    }
  }
});
