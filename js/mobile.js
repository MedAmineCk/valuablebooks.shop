/*************header*************/

//menu item clicked
$("nav a").on("click", function () {
  className = "active";
  $("nav a").removeClass(className);
  $(this).addClass(className);
  $("nav").removeClass(className);
  $(".nav_tab_icon").removeClass("open");
});

// tap on mobile menu icon
$(".nav_tab_icon").on("click", function () {
  $(this).toggleClass("open");
  $("nav").toggleClass("active");
});

$("header .contacts").on("click", function () {
  $(this).toggleClass("active");
});

//get the width of screen
//size of wind
//get the possible number of wind
//make a loop on possible number of winds and add them to header winds

function winds(_wind_size) {
  var screen_width = $("main#app").width();
  var num_winds = Math.ceil(screen_width / _wind_size);
  var html_winds = "";
  for (let index = 0; index < num_winds; index++) {
    html_winds += "<li></li>";
  }
  $("ul.winds").append(html_winds);
}
winds(20);
