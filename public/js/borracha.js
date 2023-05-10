// ANIMAÇÃO DO NAV-BAR FUNDO
$(document).ready(function () {
    // Obter a posição da seção do slider
    var sliderOffset = $('.servicos').offset().top;

    $(window).scroll(function () {
        // Obter a posição atual da barra de rolagem
        var scrollTop = $(window).scrollTop();

        // Comparar a posição atual da barra de rolagem com a posição da seção do slider
        if (scrollTop > sliderOffset) {
            $('nav').addClass('black-bg');
        } else {
            $('nav').removeClass('black-bg');
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



  var slides = document.querySelectorAll('.slide');
                var btns = document.querySelectorAll('.btn');
                let currentSlide = 1;

                // Javascript for image slider manual navigation
                var manualNav = function (manual) {
                    slides.forEach((slide) => {
                        slide.classList.remove('active');

                        btns.forEach((btn) => {
                            btn.classList.remove('active');
                        });
                    });

                    slides[manual].classList.add('active');
                    btns[manual].classList.add('active');
                }

                btns.forEach((btn, i) => {
                    btn.addEventListener("click", () => {
                        manualNav(i);
                        currentSlide = i;
                    });
                });

                // Javascript for image slider autoplay navigation
                var counter = 1;
                setInterval(function(){
                  document.getElementById('radio' + counter).checked = true;
                  counter++;
                  if(counter > 4){
                    counter = 1;
                  }
                }, 5000);