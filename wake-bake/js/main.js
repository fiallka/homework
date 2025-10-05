(function () {
    // ------------------
    document.addEventListener("DOMContentLoaded", () => {
        const body = document.body;
        const burger = document.querySelector(".burger-icon");
        const navLinks = document.querySelectorAll(".nav__link");

        burger.addEventListener("click", () => {
            body.classList.toggle("body--opened-menu");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                body.classList.remove("body--opened-menu");
            });
        });
    });
    // -------------------
    const btn = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')
    const body = document.body;

    const openModal = () => {
        body.classList.add('body--opened-modal')
    }
    const closeModal = () => {
        body.classList.remove('body--opened-modal')
    }

    btn.addEventListener('click', openModal)

    modal.addEventListener('click', event => {
        const target = event.target
        if (target.classList.contains('modal') || target.closest('.modal__cancel')) {
            closeModal()
        }
    })
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            closeModal();
        }
    }
    )
    //========================
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }
        activeContent.classList.remove('tab-content--show')
        tabContent.classList.add('tab-content--show')

        activeControl.classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')
    }
    // Accordion
    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(eL => {

        eL.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
    // слайдер-галерея 
    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 32,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 15,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });
    // слайдер-отзывы
    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            
            900: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }
        
    });


    // 
})()




