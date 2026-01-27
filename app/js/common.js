
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

    //mob catalog filtr open
    $('.category-filtrs__header').on('click', function () {
        $('.category-filtrs__body').slideToggle(500)
        $(this).closest('.category-filtrs').toggleClass('active')
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
            100: {
                slidesPerView: 3,
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


    var swiperReview = new Swiper(".revievs-slider-1", {
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
            100: {
                enabled: false
            },

            910: {
                spaceBetween: 20,
            },

            1150: {

                spaceBetween: 20,
            }
        }

    });

    var swiperReview2 = new Swiper(".revievs-slider-2", {
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
            100: {
                enabled: false
            },

            910: {
                spaceBetween: 20,
            },

            1150: {

                spaceBetween: 20,
            }
        }

    });


    var swiperReview2 = new Swiper(".revievs-slider-1-mob", {
        slidesPerView: 'auto',
        spaceBetween: 30,

        loop: true,              // 🔁 бесконечность
        speed: 500,             // ⏱️ чем больше — тем медленнее движение

        navigation: {
            nextEl: ".revievs-swiper-button-next",
            prevEl: ".revievs-swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            100: {
                enabled: true,
                slidesPerView: 1,
            },

            910: {
                enabled: false
            },

            1150: {
                enabled: false
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
            100: { slidesPerView: 3, spaceBetween: 15 },
            910: { slidesPerView: 3, spaceBetween: 17 },
            1150: { slidesPerView: 4, spaceBetween: 20 },
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


    function phoneMask() {
        [].forEach.call(document.querySelectorAll(".tel"), function (input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___)-___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i);
                }
                var reg = matrix
                    .substr(0, this.value.length)
                    .replace(/_+/g, function (a) {
                        return "\\d{1," + a.length + "}";
                    })
                    .replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5) this.value = "";
            }
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false);
        });
    }

    phoneMask()


    //order user data tabs
    const radios = document.querySelectorAll('.order-user-data-sec__form input[name="data-set-1"]');
    function orderTabs() {
        if (radios?.length > 0) {
            let allTabs = document.querySelectorAll('.order-user-data-sec__tab')

            radios.forEach(radio => {
                radio.addEventListener('change', () => {
                    if (radio.id === 'color-1') {
                        allTabs.forEach(el => el.classList.remove('active'))
                        allTabs[0].classList.add('active')
                    } else if (radio.id === 'color-2') {
                        allTabs.forEach(el => el.classList.remove('active'))
                        allTabs[1].classList.add('active')
                    }
                });
            });
        }
    }

    orderTabs()





    function popupAir() {
        const footerElement = document.querySelector('footer');
        if (!footerElement) {
            alert('dont find teg footer')
        }
        else {
            let airElements = document.querySelectorAll('.popup-air');
            if (airElements.length > 0) {
                let airBtnOpen = document.querySelectorAll('.air-open-btn');
                createAirPopups()

                for (let i = 0; i < airBtnOpen.length; i++) {
                    airBtnOpen[i].onclick = openAirPopup
                }
            }
            else {
                return
            }

            function createAirPopups() {
                let airConteiner = document.createElement("div");
                airConteiner.classList.add('air-conteiner');

                for (let i = 0; i < airElements.length; i++) {
                    let airCloseIcon = document.createElement("div");
                    airCloseIcon.classList.add('air-close');
                    airElements[i].appendChild(airCloseIcon)
                    airConteiner.appendChild(airElements[i])

                }
                footerElement.after(airConteiner)
            }

            function openAirPopup() {
                let currentAirPopupBtn = this.getAttribute('data-popup-current');
                let allPopups = document.querySelectorAll('.popup-air');
                let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`)
                let closeAirIcon = currentAirPopup.querySelector('.air-close');
                closeAllAirPopups(allPopups);
                openAirConteiner();
                currentAirPopup.classList.add('air-popup_active');

                closeAirIcon.addEventListener('click', function () {
                    currentAirPopup.classList.remove('air-popup_active');
                    closeAirConteiner()
                })
            }


            function openAirPopupForForm(curretnDonePopup) {
                let allPopups = document.querySelectorAll('.popup-air');
                let currentAirPopup = document.querySelector(`.popup-air[data-air="${curretnDonePopup}"]`)
                let closeAirIcon = currentAirPopup.querySelector('.air-close');
                closeAllAirPopups(allPopups);
                openAirConteiner();
                currentAirPopup.classList.add('air-popup_active');

                closeAirIcon.addEventListener('click', function () {
                    currentAirPopup.classList.remove('air-popup_active');
                    closeAirConteiner()
                })




            }



            function openAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.add('air-conteiner_active');
            }

            function closeAllAirPopups(allPopups) {
                for (let i = 0; i < allPopups.length; i++) {
                    allPopups[i].classList.remove('air-popup_active');
                }
            }
            function closeAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.remove('air-conteiner_active');
            }

            function sendFormDone() {
                let allPopups = document.querySelectorAll('.popup-air');
                let curretnDonePopup = 'send__form';
                closeAllAirPopups(allPopups)
                openAirPopupForForm(curretnDonePopup);
                setTimeout(function () {
                    closeAllAirPopups(allPopups)
                    setTimeout(closeAirConteiner, 1000);

                }, 3000);
            }

            function sendFormDone2() {
                let allPopups = document.querySelectorAll('.popup-air');
                let curretnDonePopup = 'send__form-revi';
                closeAllAirPopups(allPopups)
                openAirPopupForForm(curretnDonePopup);
                setTimeout(function () {
                    closeAllAirPopups(allPopups)
                    setTimeout(closeAirConteiner, 1000);

                }, 3000);
            }



            //Успешная отправка формы
            document.addEventListener('wpcf7mailsent', function (event) {
                if ('409' == event.detail.contactFormId) {
                    sendFormDone();

                }
                if ('410' == event.detail.contactFormId) {
                    sendFormDone();

                }

            }, false);
        }
    }
    popupAir()




    //popup script

    // <div class="popup-air galery-conteiner" data-air="test">
    // 		<div class="galery-popup">
    // 		</div>
    // 	</div>
    // 	<button class="air-open-btn" data-popup-current="galery">galery</button>
    // 	<button class="air-open-btn" data-popup-current="test">test</button>



    //popup
    // function popupAir() {
    //     const footerElement = document.querySelector('footer');
    //     if (!footerElement) {
    //         alert('dont find teg footer')
    //     }
    //     else {
    //         let airElements = document.querySelectorAll('.popup-air');
    //         if (airElements.length > 0) {
    //             let airBtnOpen = document.querySelectorAll('.air-open-btn');
    //             createAirPopups()

    //             for (let i = 0; i < airBtnOpen.length; i++) {
    //                 airBtnOpen[i].onclick = openAirPopup
    //             }
    //         }
    //         else {
    //             return
    //         }

    //         function createAirPopups() {
    //             let airConteiner = document.createElement("div");
    //             airConteiner.classList.add('air-conteiner');

    //             for (let i = 0; i < airElements.length; i++) {
    //                 let airCloseIcon = document.createElement("div");
    //                 airCloseIcon.classList.add('air-close');
    //                 airElements[i].appendChild(airCloseIcon)
    //                 airConteiner.appendChild(airElements[i])

    //             }
    //             footerElement.after(airConteiner)
    //         }

    //         function openAirPopup() {
    //             let currentAirPopupBtn = this.getAttribute('data-popup-current');
    //             let allPopups = document.querySelectorAll('.popup-air');
    //             let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`)
    //             let closeAirIcon = currentAirPopup.querySelector('.air-close');
    //             let popupWrapper = document.querySelector('.air-conteiner')
    //             closeAllAirPopups(allPopups);
    //             openAirConteiner();
    //             currentAirPopup.classList.add('air-popup_active');

    //             closeAirIcon.addEventListener('click', function () {
    //                 currentAirPopup.classList.remove('air-popup_active');
    //                 closeAirConteiner()
    //             })


    //             document.addEventListener('keydown', function (event) {
    //                 // Проверяем, была ли нажата клавиша ESC
    //                 if (event.key === 'Escape' || event.keyCode === 27) {
    //                     currentAirPopup.classList.remove('air-popup_active');
    //                     closeAirConteiner()
    //                 }
    //             });


    //             popupWrapper.addEventListener('click', handleClickOutside);




    //             // Функция, обрабатывающая клики
    //             function handleClickOutside(event) {
    //                 const block = currentAirPopup;
    //                 if (!block.contains(event.target)) {
    //                     currentAirPopup.classList.remove('air-popup_active');
    //                     closeAirConteiner()

    //                     popupWrapper.removeEventListener('click', handleClickOutside);
    //                 }
    //             }

    //         }


    //         function openAirPopupForForm(curretnDonePopup) {
    //             let allPopups = document.querySelectorAll('.popup-air');
    //             let currentAirPopup = document.querySelector(`.popup-air[data-air="${curretnDonePopup}"]`)
    //             let closeAirIcon = currentAirPopup.querySelector('.air-close');
    //             let popupWrapper = document.querySelector('.air-conteiner')

    //             closeAllAirPopups(allPopups);
    //             openAirConteiner();
    //             currentAirPopup.classList.add('air-popup_active');

    //             closeAirIcon.addEventListener('click', function () {
    //                 currentAirPopup.classList.remove('air-popup_active');
    //                 closeAirConteiner()
    //             })

    //             document.addEventListener('keydown', function (event) {
    //                 // Проверяем, была ли нажата клавиша ESC
    //                 if (event.key === 'Escape' || event.keyCode === 27) {
    //                     currentAirPopup.classList.remove('air-popup_active');
    //                     closeAirConteiner()
    //                 }
    //             });

    //             popupWrapper.addEventListener('click', handleClickOutside);




    //             // Функция, обрабатывающая клики
    //             function handleClickOutside(event) {
    //                 const block = currentAirPopup;
    //                 if (!block.contains(event.target)) {
    //                     currentAirPopup.classList.remove('air-popup_active');
    //                     closeAirConteiner()

    //                     popupWrapper.removeEventListener('click', handleClickOutside);
    //                 }
    //             }
    //         }


    //         function openAirConteiner() {
    //             let airConteier = document.querySelector('.air-conteiner');
    //             airConteier.classList.add('air-conteiner_active');
    //         }

    //         function closeAllAirPopups(allPopups) {
    //             for (let i = 0; i < allPopups.length; i++) {
    //                 allPopups[i].classList.remove('air-popup_active');
    //             }
    //         }
    //         function closeAirConteiner() {
    //             let airConteier = document.querySelector('.air-conteiner');
    //             airConteier.classList.remove('air-conteiner_active');
    //         }

    //         function sendFormDone() {
    //             let allPopups = document.querySelectorAll('.popup-air');
    //             let curretnDonePopup = 'formSend';
    //             closeAllAirPopups(allPopups)
    //             openAirPopupForForm(curretnDonePopup);
    //             setTimeout(function () {
    //                 closeAllAirPopups(allPopups)
    //                 setTimeout(closeAirConteiner, 1000);

    //             }, 3000);
    //         }

    //         //Успешная отправка формы
    //         document.addEventListener('wpcf7mailsent', function (event) {
    //             if ('133' == event.detail.contactFormId) {
    //                 sendFormDone();
    //             }

    //             if ('134' == event.detail.contactFormId) {
    //                 sendFormDone();
    //             }

    //             if ('210' == event.detail.contactFormId) {
    //                 sendFormDone();
    //             }


    //         }, false);
    //     }
    // }
    // popupAir()




})

