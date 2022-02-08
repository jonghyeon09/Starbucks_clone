$(document).ready(function () {
  $.ajax({
    type: "post",
    url: "index.html",
    dataType: "html",
    success: function (data) {
      data.setRequestHeader(header, value);
    },
  });
});
