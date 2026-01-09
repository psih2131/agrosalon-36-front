
// $(function () {
// 	$('.main-sec__slider').slick({
// 		infinite: true,
// 		speed: 1000,
// 		adaptiveHeight: true,
// 		slidesToScroll: 1,
// 		dots: false,
// 		slidesToShow: 1,
// 		prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>',
// 		nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
// 		responsive: [
// 			{
// 				breakpoint: 1200,
// 				settings: {
// 					autoplay: true,
// 					autoplaySpeed: 3000,
// 				}
// 			},
// 			{
// 				breakpoint: 900,
// 				settings: {
// 					autoplay: true,
// 					autoplaySpeed: 3000,
// 					arrows: false,
// 				}
// 			},
// 		]
// 	});

// });


document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".popular-products-slider", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".popular-swiper-button-next",
            prevEl: ".popular-swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            300: {
                slidesPerView: 1,
                spaceBetween: 0,

                // centeredSlides: true
            },
            // when window width is >= 320px

            // when window width is >= 320px
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            1220: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            1540: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }

    });
})

