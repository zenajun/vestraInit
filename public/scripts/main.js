'use strict';

var app = {};

app.hamburger = function () {
  $('#nav-icon').click(function () {
    $('.global-nav').toggleClass('active');
  });
};

app.closeHamburger = function () {
  $('.global-nav__item').click(function () {
    $('.global-nav').removeClass('active');
    $('#nav-icon').removeClass('open');
  });
};

app.hamburgerAnimate = function () {
  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
  });
};

app.smoothScroll = function () {
  $("a").on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
};

app.init = function () {
  app.hamburger();
  app.closeHamburger();
  app.hamburgerAnimate();
  app.smoothScroll();
};

$(function () {
  app.init();
});