// ----------- JQuery start --------

$(function () {

    $('.header__slider').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000
    })


    $('.special_offers__container').owlCarousel({
        loop: false,
        nav: false,
        items: 4,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            768: {
                items: 2,
                loop: true
            },
            1024: {
                items: 3,
                loop: true
            }
        }
    })

    $('.best_sale__items').owlCarousel({
        loop: false,
        nav: false,
        items: 4,
        dots: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000
            },
            576: {
                items: 2,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000
            },
            768: {
                items: 3,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000
            },
            1024: {
                items: 4,
                loop: false,
                autoplay: false
            }
        }
    })

    $('.discount__items').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000
            },
            576: {
                items: 2,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000
            },
            768: {
                items: 3,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000
            },
            1024: {
                items: 4,
                loop: false,
                autoplay: false
            }
        }
    })

    // ----- Calendar Start -------

    let sel_product = document.querySelector(".sel_product");

    if (sel_product) {

        $(".calendar__input").datepicker({
            minDate: new Date()
        });

        $(".calendar__input").on("change", function () {

            $(".calendar__value").text($(this).val())

        });

    }


    // ----- Calendar Start -------

})



// ----------- JQuery end --------





// ------------ JS Functions Start----------------------------------------------


// --------- All Classes Remove Start -----------
const REMOVE_ALL_CLASS = (element, remove) => {

    element.forEach(e => {
        e.classList.remove(remove);
    })

}
// --------- All Classes Remove End -----------

// --------- Open Lists (Clock, State) Start -----------
const OPEN_LIST = (element_item, element_title, element_wrapper, element_input) => {

    if (element_title) {

        element_title.addEventListener("click", () => {

            element_wrapper.classList.toggle("active");

        })

    }

    element_item.forEach(element => {

        element.addEventListener("click", () => {
            element_title.innerText = element.innerText;
            element_input.value = element.innerText;
        })

    })

}
// --------- Open Lists (Clock, State) End -----------



// ------ Remove Class Start -----------
const REMOVE_CLASS = (element_title, element_class, element_wrapper) => {

    if (element_title) {

        element_title.addEventListener("click", e => {

            if (e.target.className !== element_class) {

                if (element_wrapper.classList.contains("active")) {

                    element_wrapper.classList.remove("active");

                }

            }

        })

    }

}
// ------ Remove Class End -----------

// ------------ JS Functions End-----------





// ------------ Preloader Start-----------



window.addEventListener("load", () => {

    let preload = document.querySelector(".preload");
    preload.classList.add("preload_finish");

})



// ------------ Preloader End-----------




// ------------ AOS JS Start-----------

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// ------------ AOS JS End-----------








// ------------ ADD Logo Animation Start---------


let header__title = document.querySelector(".header__title");

setTimeout(() => {
    header__title.classList.add("typing_animation");
}, 1000);



// ------------ ADD Logo Animation End---------



// ------------ Currency Choose Start ---------

const currency_item = document.querySelectorAll(".currency__item");
const currency_list = document.querySelector(".currency__list");
const currency_title = document.querySelector(".currency__title");
const currency_title_value = document.querySelector(".currency_title_value");
const currency_item_value = document.querySelectorAll(".currency_item_value");

// currency_item.forEach(element => {
//     element.addEventListener("click", () => {
//         currency_title_value.innerText = element.innerText
//     })
// })

for (let i = 0; i < currency_item.length; i++) {
    currency_item[i].addEventListener("click", () => {
        currency_title_value.innerText = currency_item_value[i].innerText
    })
}

currency_item.forEach(e => {
    e.addEventListener("click", () => {
        currency_list.style.cssText = "transform: rotateX(90deg);visibility: hidden;"
    })
})

currency_title.addEventListener("mouseover", () => {
    currency_list.style.cssText = "visibility: visible;transform: rotateX(0deg);"
})

// ------------ Currency Choose Start ---------






// ------------ Header Fixed Start---------------


let fix = document.querySelector(".fix");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 200) {

        fix.classList.add("fixed");

    } else {

        fix.classList.remove("fixed");

    }
})


// ------------ Header Fixed End---------------





// let last_scrollTop = 0;
// let navbar = document.querySelector(".fix");

// window.addEventListener("scroll", () => {

//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > last_scrollTop) {

//         navbar.style.top = "-85px";

//     } else {
//         navbar.style.top = "0";
//     }

//     last_scrollTop = scrollTop;

// })






// ------------ Languages Active Start---------------



let language__box = document.querySelectorAll(".language__box");



language__box.forEach(element => {

    element.addEventListener("click", () => {
        REMOVE_ALL_CLASS(language__box, "active");
        element.classList.add("active");
    });

})



// ------------ Languages Active End---------------


// ------------ Burger Menu Start---------------


let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menu_item = document.querySelectorAll(".menu__item");
let burger_item = document.querySelectorAll(".burger__item");


for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener("click", () => {

        menu.classList.remove("menu_open");
        REMOVE_ALL_CLASS(burger_item, "burger_style");

    })
}

burger.addEventListener("click", () => {

    menu.classList.toggle("menu_open");
    for (let i = 0; i < burger_item.length; i++) {
        burger_item[i].classList.toggle("burger_style");
    }

})


// ------------ Burger Menu Start---------------






// ------------ Flowers List Item Selected Start---------------


let category__item = document.querySelectorAll(".category__item");



category__item.forEach(element => {

    element.addEventListener("click", () => {
        REMOVE_ALL_CLASS(category__item, "active");
        element.classList.add("active");
    });

});


// ------------ Flowers List Item Selected End---------------





// ------------ Pagination Style Start ---------------


let pagination__number = document.querySelectorAll(".pagination__number");

pagination__number.forEach(element => {

    element.addEventListener("click", () => {
        REMOVE_ALL_CLASS(pagination__number, "active");
        element.classList.add("active");
    });

});



// ------------ Pagination Style End ---------------





// ---------- Clock and State Start -----------


let clock__title = document.querySelector(".clock__title");
let clock__wrapper = document.querySelector(".clock__wrapper");
let clock__item = document.querySelectorAll(".clock__item");
let clock__input = document.querySelectorAll(".clock__input");

let state__title = document.querySelector(".state__title");
let state__wrapper = document.querySelector(".state__wrapper");
let state__item = document.querySelectorAll(".state__item");
let state__input = document.querySelectorAll(".state__input");

let sel_product = document.querySelector(".sel_product");
let cart_order = document.querySelector(".cart_order");



REMOVE_CLASS(sel_product, "clock__title", clock__wrapper);
REMOVE_CLASS(cart_order, "state__title", state__wrapper);

OPEN_LIST(clock__item, clock__title, clock__wrapper, clock__input);
OPEN_LIST(state__item, state__title, state__wrapper, state__input);


// ---------- Clock and State End -----------




// ------------ To Top Start---------

if (document.querySelector(".to_top")) {

    document.querySelector(".to_top").addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    })

}

// ------------ To Top End---------
