$(document).ready(function () {
  const map = document.querySelectorAll(".gnb_top > ul > li");
  const logo = document.querySelector(".logo a");
  $(logo).click(function (e) {
    location.href = "index.html";
  });
  $(map[3]).click(function (e) {
    location.href = "map.html";
  });
});
