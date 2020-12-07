// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){
    
    // Activación de Slick Slider
    $('.slick-personas').slick({
        // JSON - Javascript Object Notation
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        dots: true,
        arrows: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    
    
    // Activación de otra librería...
});

// En CSS el tiempo se mide en segundos = 0.5s
// En JS el tiempo se mide en milisegundos = 500