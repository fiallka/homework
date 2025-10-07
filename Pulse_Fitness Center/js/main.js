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

})()