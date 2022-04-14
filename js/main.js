function scrollTo(_div) {
  alert();
  $("html, body").animate(
    {
      scrollTop: $("" + _div + "").offset().top,
    },
    400
  );
}
