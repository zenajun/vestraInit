'use strict';

var app = {};

app.hamburger = function () {
  $('#nav-icon').click(function () {
    $('.animated').toggleClass('active-nav');
  });
};

app.closeHamburger = function () {
  $('.menu-link').click(function () {
    $('.animated').removeClass('active-nav');
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

app.bxSlider = function () {
  $('.slider').bxSlider();
};

app.disableScroll = function () {
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });
};

app.restoreScroll = function () {
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  });
};

app.openModal = function () {
  var $modal = $('.modal');
  $('button.request-quote').on('click', function () {
    $($modal).css({
      display: 'block'
    });
    app.disableScroll();
  });
};

app.closeModal = function () {
  var modal = document.getElementById('modal');
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      app.restoreScroll();
    }
  };
};

app.init = function () {
  app.hamburger();
  app.closeHamburger();
  app.hamburgerAnimate();
  app.smoothScroll();
  app.bxSlider();
  app.openModal();
  app.closeModal();
};

$(function () {
  app.init();
});