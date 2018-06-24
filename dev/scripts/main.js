const app = {};

app.hamburger = () => {
  $('#nav-icon').click(() => {
    $('.animated').toggleClass('active-nav');
  });
}

app.closeHamburger = () => {
  $('.menu-link').click(() => {
    $('.animated').removeClass('active-nav');
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

app.bxSlider = () => {
  $('.slider').bxSlider();
}

app.disableScroll = () => {
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });
}

app.restoreScroll = () => {
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  });
}

app.openModal = () => {
  const $modal = $('.modal');
  $('button.request-quote').on('click', function() {
    $($modal).css({
      display: 'block'
    });
    app.disableScroll();
  });
}

app.closeModal = () => {
  const modal = document.getElementById('modal');
  window.onclick = function (e) {   
    if (e.target === modal) {
      modal.style.display = "none";
      app.restoreScroll();
    }
  }    
}

app.init = () => {
  app.hamburger();
  app.closeHamburger();
  app.hamburgerAnimate();
  app.smoothScroll();
  app.bxSlider();
  app.openModal();
  app.closeModal();
}


$(function () {
  app.init();  
});
