document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.header-img')

    let currentIndex = 0;

    let shoeChange = () => {
        // gsap.from(images[currentIndex].active, 
        //     { y: "-100%",display: "none", duration: 2, ease: "bounce.inOut", roatate: '360deg' },
        // );
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    images[currentIndex].classList.add('active');
    setInterval(shoeChange, 2000);
})

let open = document.querySelector('.open')
let close = document.querySelector('.close')
let menu = document.querySelector("#menu1")

open.addEventListener('click', () => {
    console.log('open clicked')
    open.classList.remove('show');
    open.classList.add('hide');
    close.classList.add('show');
    close.classList.remove('hide');
    menu.classList.add('flex-col')
})
close.addEventListener("click", () => {
    close.classList.remove('show');
    close.classList.add('hide');
    open.classList.add('show');
    open.classList.remove('hide');
    menu.classList.remove('flex-col')
})