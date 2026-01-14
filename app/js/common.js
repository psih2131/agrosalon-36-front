
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



    var swiperHistory = new Swiper(".history-products-slider", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        centeredSlides: true,
        loop: true,
        // navigation: {
        //     nextEl: ".brends-swiper-button-next",
        //     prevEl: ".brends-swiper-button-prev",
        // },
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
                slidesPerView: 3,
                spaceBetween: 0,
            }
        }

    });


    var swiperHistory = new Swiper(".revievs-slider-1", {
        slidesPerView: 'auto',
        spaceBetween: 30,

        loop: true,              // 🔁 бесконечность
        speed: 6000,             // ⏱️ чем больше — тем медленнее движение
        allowTouchMove: false,   // 🚫 отключаем свайп

        autoplay: {
            delay: 0,              // ⬅️ ключевой момент
            disableOnInteraction: false,
        },
        // navigation: {
        //     nextEl: ".brends-swiper-button-next",
        //     prevEl: ".brends-swiper-button-prev",
        // },
        breakpoints: {
            // when window width is >= 320px
            // 300: {
            //     slidesPerView: 2,
            //     spaceBetween: 0,
            // },

            // 910: {
            //     slidesPerView: 3,
            //     spaceBetween: 0,
            // },

            1150: {

                spaceBetween: 20,
            }
        }

    });

    var swiperHistory = new Swiper(".revievs-slider-2", {
        slidesPerView: 'auto',
        spaceBetween: 30,

        loop: true,              // 🔁 бесконечность
        speed: 6000,             // ⏱️ чем больше — тем медленнее движение
        allowTouchMove: false,   // 🚫 отключаем свайп


        autoplay: {
            delay: 0,              // ⬅️ ключевой момент
            disableOnInteraction: false,
            reverseDirection: true,
        },
        // navigation: {
        //     nextEl: ".brends-swiper-button-next",
        //     prevEl: ".brends-swiper-button-prev",
        // },
        breakpoints: {
            // when window width is >= 320px
            // 300: {
            //     slidesPerView: 2,
            //     spaceBetween: 0,
            // },

            // 910: {
            //     slidesPerView: 3,
            //     spaceBetween: 0,
            // },

            1150: {

                spaceBetween: 20,
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
    // swiper2.controller.control = swiper3;
    // swiper3.controller.control = swiper2;


    const rangeInput = document.querySelectorAll(".range-input input"), priceInput = document.querySelectorAll(".price-input input"), range = document.querySelector(".slider .progress"); let priceGap = 1000; priceInput.forEach(input => { input.addEventListener("input", e => { let minPrice = parseInt(priceInput[0].value), maxPrice = parseInt(priceInput[1].value); if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) { if (e.target.className === "input-min") { rangeInput[0].value = minPrice; range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%"; } else { rangeInput[1].value = maxPrice; range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%"; } } }); }); rangeInput.forEach(input => { input.addEventListener("input", e => { let minVal = parseInt(rangeInput[0].value), maxVal = parseInt(rangeInput[1].value); if ((maxVal - minVal) < priceGap) { if (e.target.className === "range-min") { rangeInput[0].value = maxVal - priceGap } else { rangeInput[1].value = minVal + priceGap; } } else { priceInput[0].value = minVal; priceInput[1].value = maxVal; range.style.left = ((minVal / rangeInput[0].max) * 100) + "%"; range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%"; } }); });



    var swiperVideo = new Swiper(".video-products-slider", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".video-swiper-button-next",
            prevEl: ".video-swiper-button-prev",
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
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }

    });




    function warantyStaps() {
        let stapsWrapper = document.querySelector('.waranty-staps')

        if (stapsWrapper) {
            let textCounterCurrentStap = document.querySelector('.waranty-staps__counter-current')
            let currentStap = 1

            let addStapst = document.querySelectorAll('.waranty-stap')

            let btnStap1Nex = document.querySelector('.waranty-stap--1 .btnV1')

            let btnStap2Back = document.querySelector('.waranty-stap--2 .waranty-stap__back-btn')

            let btnStap2Next = document.querySelector('.waranty-stap--2 .btnV1')

            let btnStap3Back = document.querySelector('.waranty-stap--3 .waranty-stap__back-btn')

            btnStap1Nex.addEventListener('click', () => {
                currentStap = 2
                addStapst.forEach(element => {
                    element.classList.remove('active')
                });
                addStapst[1].classList.add('active')

                textCounterCurrentStap.innerHTML = currentStap
            })

            btnStap2Back.addEventListener('click', () => {
                currentStap = 1
                addStapst.forEach(element => {
                    element.classList.remove('active')
                });
                addStapst[0].classList.add('active')

                textCounterCurrentStap.innerHTML = currentStap
            })


            btnStap2Next.addEventListener('click', () => {
                currentStap = 3
                addStapst.forEach(element => {
                    element.classList.remove('active')
                });
                addStapst[2].classList.add('active')

                textCounterCurrentStap.innerHTML = currentStap
            })

            btnStap3Back.addEventListener('click', () => {
                currentStap = 2
                addStapst.forEach(element => {
                    element.classList.remove('active')
                });
                addStapst[1].classList.add('active')

                textCounterCurrentStap.innerHTML = currentStap
            })
        }
    }

    warantyStaps()




    function customSelect() {
        const selects = document.querySelectorAll('.custom-select');

        if (!selects.length) return;

        selects.forEach(select => {
            const header = select.querySelector('.select-header');
            const selectedValue = select.querySelector('.selected-value');
            const hiddenInput = select.querySelector('.custom-select__input');
            const options = select.querySelectorAll('.select-options li');

            if (!header || !selectedValue || !hiddenInput || !options.length) return;

            header.addEventListener('click', (e) => {
                e.stopPropagation();

                // закрываем остальные селекты
                selects.forEach(s => s !== select && s.classList.remove('active'));

                select.classList.toggle('active');
            });

            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();

                    const value = option.dataset.value;
                    const text = option.textContent;

                    selectedValue.textContent = text;
                    hiddenInput.value = value;

                    select.classList.remove('active');

                    // если нужно слушать изменения
                    hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));

                    console.log('Выбрано:', value);
                });
            });
        });

        // клик вне селектов — закрываем все
        document.addEventListener('click', () => {
            selects.forEach(select => select.classList.remove('active'));
        });
    }

    customSelect()


    function customDownloadFile() {
        const downloadBlocks = document.querySelectorAll('.form-download');

        // Если блоков нет — выходим
        if (!downloadBlocks.length) return;

        downloadBlocks.forEach(block => {
            const input = block.querySelector('.form-download__inp');
            const text = block.querySelector('.form-download__text');

            if (!input || !text) return;

            // Клик по блоку — открыть выбор файла
            block.addEventListener('click', () => {
                input.click();
            });

            // После выбора файла — показать имя
            input.addEventListener('change', () => {
                if (!input.files || !input.files.length) return;

                text.textContent = input.files[0].name;
            });
        });
    }

    customDownloadFile()

})

