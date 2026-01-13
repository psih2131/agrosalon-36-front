
$(function () {
    $('.filtr-acordeon__header').on('click', function () {
        $(this).closest('.filtr-acordeon').find('.filtr-acordeon__body').slideToggle(300)
        $(this).toggleClass('active')
    })


    //header open
    $('.burger-meny').on('click', function () {
        $('.header__mob').slideToggle(500)
        $(this).toggleClass('active')
    })


    $('.product-card-like').on('click', function () {
        $(this).toggleClass('active')
    })

    $('.product-card-compare').on('click', function () {
        $(this).toggleClass('active')
    })


});


document.addEventListener("DOMContentLoaded", () => {

    // products tabs
    const navElements = document.querySelectorAll('.product-about-sec__nav-element')
    if (navElements?.length > 0) {
        const tabsElements = document.querySelectorAll('.product-tab')

        navElements.forEach((nav, index) => {
            nav.addEventListener('click', () => {

                navElements.forEach(el => el.classList.remove('active'))
                tabsElements.forEach(el => el.classList.remove('active'))


                nav.classList.add('active')
                tabsElements[index].classList.add('active')
            })
        })
    }



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
            },

            910: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1150: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }

    });


    var swiperBrend = new Swiper(".popular-brends-slider", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".brends-swiper-button-next",
            prevEl: ".brends-swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            300: {
                slidesPerView: 2,
                spaceBetween: 0,
            },

            910: {
                slidesPerView: 3,
                spaceBetween: 0,
            },

            1150: {
                slidesPerView: 4,
                spaceBetween: 0,
            }
        }

    });




    // мини-превью слайдер
    var swiperThumbs = new Swiper(".product-slider-controll", {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: true,
        watchSlidesProgress: true, // важно для thumbs
        breakpoints: {
            300: { slidesPerView: 1, spaceBetween: 5 },
            767: { slidesPerView: 3, spaceBetween: 10 },
            1220: { slidesPerView: 4, spaceBetween: 15 },
            1540: { slidesPerView: 4, spaceBetween: 20 },
        }
    });

    // основной слайдер
    var swiperMain = new Swiper(".product-slider-big", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".product-slider-controll-button-next",
            prevEl: ".product-slider-controll-button-prev",
        },
        thumbs: {
            swiper: swiperThumbs, // связываем через thumbs
        },
        breakpoints: {
            300: { slidesPerView: 1, spaceBetween: 0 },
            767: { slidesPerView: 1, spaceBetween: 0 },
            1220: { slidesPerView: 1, spaceBetween: 0 },
            1540: { slidesPerView: 1, spaceBetween: 0 },
        }
    });


    // связываем слайдеры
    swiper2.controller.control = swiper3;
    swiper3.controller.control = swiper2;


    const rangeInput = document.querySelectorAll(".range-input input"), priceInput = document.querySelectorAll(".price-input input"), range = document.querySelector(".slider .progress"); let priceGap = 1000; priceInput.forEach(input => { input.addEventListener("input", e => { let minPrice = parseInt(priceInput[0].value), maxPrice = parseInt(priceInput[1].value); if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) { if (e.target.className === "input-min") { rangeInput[0].value = minPrice; range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%"; } else { rangeInput[1].value = maxPrice; range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%"; } } }); }); rangeInput.forEach(input => { input.addEventListener("input", e => { let minVal = parseInt(rangeInput[0].value), maxVal = parseInt(rangeInput[1].value); if ((maxVal - minVal) < priceGap) { if (e.target.className === "range-min") { rangeInput[0].value = maxVal - priceGap } else { rangeInput[1].value = minVal + priceGap; } } else { priceInput[0].value = minVal; priceInput[1].value = maxVal; range.style.left = ((minVal / rangeInput[0].max) * 100) + "%"; range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%"; } }); });

})

