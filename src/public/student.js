$(document).ready(function () {
  $(".dropdown-menu a").on("click", function () {
    const selText = $(this).text();
    $("#display")
      .removeClass("none")
      .html("<p>" + selText + "</p>");
    if (selText == "Get All student") {
      $("#display").getAll();
    }
    if (selText == "Get One student") {
      $("#display").getOne();
    }
    if (selText == "Post new comment") {
      $("#display").postOne();
    }
    if (selText == "Post New student (Admin only)") {
      $("#display").poststudent();
    }
    if (selText == "Delete All student (Admin only)") {
      $("#display").delAll();
    }
    if (selText == "Delete One student (Admin only)") {
      $("#display").delOne();
    }
  });
});


