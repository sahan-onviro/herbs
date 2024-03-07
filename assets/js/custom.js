$(document).ready(function () {
    $('.clients-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<img class="slick-prev" src="./assets/images/svg/left-arrow.svg">',
        nextArrow: '<img class="slick-next" src="./assets/images/svg/right-arrow.svg">'
    });
    $('.cate-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true, dots: false,
        // autoplay: true,
        prevArrow: '<img class="slick-prev" src="./assets/images/svg/left-arrow.svg">',
        nextArrow: '<img class="slick-next" src="./assets/images/svg/right-arrow.svg">',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });
    let navbarMenu = document.querySelector(".navbar .navbar-collapse");
    let closeMenu = document.querySelector(".navbar-collapse .close");
    let navbarMenuToggler = document.querySelector(".navbar-toggler");
    console.log(closeMenu);
    $(closeMenu).click(function () {
        $(navbarMenu).toggleClass("show");
        $("body").toggleClass("height-fixed");
        $(".height-fixed-overlay").remove();
    });
    $(navbarMenuToggler).click(function () {
        $("body").toggleClass("height-fixed");
        if ($("body").hasClass("height-fixed")) {
            $('body').append('<div class="height-fixed-overlay"></div>');
        } else {
            $(".height-fixed-overlay").remove();
        }
    });
    $(document).on('click', '.height-fixed-overlay', function () {
        $(navbarMenu).toggleClass("show");

        $("body").toggleClass("height-fixed");

        $(".height-fixed-overlay").remove();
    });


    var $star_rating = $('.star-rating .star');

    var SetRatingStar = function () {
        return $star_rating.each(function () {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).addClass('star-full');
            } else {
                return $(this).removeClass('star-full');
            }
        });
    };

    $star_rating.on('click', function () {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });
    $star_rating.hover(
        function () {
            var rating = $(this).data('rating');
            $star_rating.each(function () {
                if (parseInt($(this).data('rating')) <= rating) {
                    $(this).addClass('hovered-star');
                }
            });
        },
        function () {
            $star_rating.removeClass('hovered-star');
        }
    );

    SetRatingStar();



    $(".product-slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true, infinite: true,
        asNavFor: ".product-slider-nav",
    });
    $(".product-slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        asNavFor: ".product-slider-for",
        focusOnSelect: true,
    });



    var isTab = window.matchMedia("only screen and (max-width: 991px)").matches;
    if (isTab) {
        let sidebar = document.querySelector('.cate-sidebar > .sub-heading');
        $(sidebar).click(function () {
            $(this).toggleClass('show');
            $(this).siblings('.cate-warpper').toggleClass('show');
        })
    }
    let categories = document.querySelector('.cate-result-wrapper');
    let viewCard = $(categories).find('.view-card');
    let viewList = $(categories).find('.view-list');

    $(viewCard).click(function () {
        if (!$(this).hasClass('selected')) {
            $(this).addClass('selected');
            $(viewList).removeClass('selected');
            $(categories).find('.cate-result').removeClass('result-list');

        }
    });

    $(viewList).click(function () {
        if (!$(this).hasClass('selected')) {
            $(this).addClass('selected');
            $(viewCard).removeClass('selected');
            $(categories).find('.cate-result').addClass('result-list');
        }
    });


});