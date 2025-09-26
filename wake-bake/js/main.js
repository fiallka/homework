(function() {
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
})()

