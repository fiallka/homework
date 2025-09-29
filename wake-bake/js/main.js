(function () {
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
//====== 
})()




