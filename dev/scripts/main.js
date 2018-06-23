const app = {};

app.hamburger = () => {
  $('#nav-icon').click(() => {
    $('.global-nav').toggleClass('active');
  });
}

app.closeHamburger = () => {
  $('.global-nav__item').click(() => {
    $('.global-nav').removeClass('active');
    $('#nav-icon').removeClass('open');
  });
}

app.hamburgerAnimate = () => {
  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
  });
}

app.smoothScroll = () => {
  $("a").on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
}

app.init = () => {
  app.hamburger();
  app.closeHamburger();
  app.hamburgerAnimate();
  app.smoothScroll();
}

$(function () {
  app.init();
});
