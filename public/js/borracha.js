// ANIMAÇÃO DO NAV-BAR FUNDO
$(document).ready(function () {
    // Obter a posição da seção do slider
    var sliderOffset = $('.top-backg').offset().top;

    $(window).scroll(function () {
        // Obter a posição atual da barra de rolagem
        var scrollTop = $(window).scrollTop();

        // Comparar a posição atual da barra de rolagem com a posição da seção do slider
        if (scrollTop > sliderOffset) {
            $('nav').addClass('black-bg');
            $('nav-list').addClass('black-bg');
        } else {
            $('nav').removeClass('black-bg');
            $('nav-list').removeClass('black-bg');
        }
    });
});

$(document).ready(function () {
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  })});


// Função para animação de scroll suave
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Selecionar todos os links de navegação
  var links = document.querySelectorAll('nav a');
  
  // Adicionar evento de clique para cada link
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      if (href.startsWith('#')) {
        smoothScroll(href, 1000);
      } else {
        window.location.href = href;
      }
    });
  });
  
  var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
  