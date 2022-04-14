// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.
const swiper_cover = new Swiper(".swiper-cover", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Place any jQuery/helper plugins in here.
const swiper_gallery = new Swiper(".swiper-gallery", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//whatsapp pluging
$("#whatsapp .main-btn").on("click", function () {
  $("#whatsapp").toggleClass("active");
});

//config
var conf = {
  accounts: [
    {
      whatsapp: "34600423547",
      label: "Ghailani Fouad",
      message:
        "Hola, envíe su consulta o captura de pantalla de los productos que desea, nos pondremos en contacto con usted en unas horas.",
      logo: "https://ik.imagekit.io/medamineck/Images/logo_ItffEz9e-.png",
    },
  ],
  label: "¡Hola!",
  titel: "iniciar una conversación",
  subtitel:
    "¡Hola! Haga clic en uno de nuestros miembros a continuación para chatear en WhatsApp",
  notification: "El equipo suele responder en cuestión de minutos..",
};
function openWtp(number, text) {
  window.open("https://wa.me/" + number + "?text=" + text);
}
conf.accounts.forEach((item) => {
  var number = item.whatsapp;
  var message = item.message;
  var label = item.label;
  var logo = item.logo;
  $("#whatsapp .wtp-body").append(wtpMudule(number, message, label, logo));
});

function wtpMudule(number, message, label, logo) {
  return (
    '<div class="item animate__animated" onclick="openWtp(\'' +
    number +
    "', '" +
    message +
    "')\">" +
    '<div class="logo-container flex-center">' +
    '<img src="' +
    logo +
    '">' +
    "</div>" +
    '<div class="content">' +
    '<p class="name">' +
    label +
    "</p>" +
    '<p class="sub">+' +
    number +
    "</p>" +
    "</div>" +
    '<div class="icon-container flex-center">' +
    '<span class="material-icons">' +
    " open_in_new" +
    "</span>" +
    "</div>" +
    "</div>"
  );
}
$("#whatsapp .btn-container .label").html(conf.label);
$("#whatsapp .wtp-container .instructions .h1").html(conf.titel);
$("#whatsapp .wtp-container .instructions .sub").html(conf.subtitel);
$("#whatsapp .wtp-body .header").html(conf.notification);
