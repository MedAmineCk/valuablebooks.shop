function scrollTo(_div) {
  alert();
  $("html, body").animate(
    {
      scrollTop: $("" + _div + "").offset().top,
    },
    400
  );
}

//preview the Book by clicking the other images
$(".medias .images .img-item").on("click", function () {
  //switch between images
  let thumbnail, selectedItem;
  [thumbnail, selectedItem] = [
    $(this).find("img").attr("src"),
    $(".medias .thumbnail img").attr("src"),
  ];
  $(".medias .thumbnail img").attr("src", thumbnail);
  $(this).find("img").attr("src", selectedItem);
});
