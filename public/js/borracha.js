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