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
    // ------------------- swiper 1
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        loop: true,
        speed: 600,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });
    // ----------------tabs
    document.querySelectorAll('.tabs-wrapper').forEach(wrapper => {
        const buttons = wrapper.querySelectorAll('.tab-btn');
        const contents = wrapper.querySelectorAll('.tab-content');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;

                // Активируем кнопку
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Активируем контент
                contents.forEach(content => {
                    content.classList.remove('active');
                    if (content.dataset.tab === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    });
    // Accordion
    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(eL => {

        eL.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
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
})()