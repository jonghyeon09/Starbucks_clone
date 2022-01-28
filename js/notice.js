$(document).ready(function () {
  const ul = document.querySelector(".notice_slide ul");
  const li = document.querySelectorAll(".notice_slide ul li");
  const li_height = $(li).height();

  $(ul).css({ top: -li_height });
  console.log($(ul).children());
  setInterval(() => {
    $(ul).animate(
      { top: -li_height * 2 },
      {
        complete: function () {
          $(ul).css({ top: -li_height });
          $(ul).append($(ul).children()[0]);
        },
      }
    );
  }, 2000);
});
