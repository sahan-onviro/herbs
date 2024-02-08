$(document).ready(function () {
    $('.clients-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<img class="slick-prev" src="./assets/images/svg/left-arrow.svg">',
        nextArrow: '<img class="slick-next" src="./assets/images/svg/right-arrow.svg">'
    });
});