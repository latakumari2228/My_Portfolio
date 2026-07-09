const menuBtn = document.querySelector('.menu-btn');

const navLinks = document.querySelector('.nav-links');


menuBtn.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});



// SCROLL ANIMATION

const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            section.style.opacity = '1';

            section.style.transform = 'translateY(0px)';
        }

    });

});



sections.forEach((section) => {

    section.style.opacity = '0';

    section.style.transform = 'translateY(50px)';

    section.style.transition = '1s';

});