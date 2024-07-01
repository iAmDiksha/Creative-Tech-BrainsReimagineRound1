document.addEventListener("DOMContentLoaded", () => {
  
  let t1 = gsap.timeline();

  t1.from("#logo, #menu, .right-menu",{
    duration: 1,
    delay: 0.5,
    y: "-10px",
    opacity: 0,
  })

  t1.from(".header-right",{
    opacity: 0,
    ease: "bounce.out",
    y: "-100px",
    duration: 3,
    delay: 0.3
  })

  t1.from(".anime",{
    delay:0.2,
    y: "100px",
    opacity: 0,
    stagger: 0.5,
  })

    const images = document.querySelectorAll('.header-img')

    let currentIndex = 0;

    let shoeChange = () => {
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

document.body.addEventListener('scroll',()=>{
  if(menu.classList.contains("flex-col"))
  {
    close.classList.remove('show');
    close.classList.add('hide');
    open.classList.add('show');
    open.classList.remove('hide');
    menu.classList.remove('flex-col')
  }
})

var splide = new Splide( '.splide', {
    perPage: 3.5,
    perMove: 1,
    gap    : '1rem',
    padding: '3rem',
    type: 'loop',
    drag: 'free',
    focus  : 'center',
    autoplay: true,
    breakpoints: {
      1240:{
         perPage: 3,
         padding: '0rem'
      },
      850: {
        perPage: 2.5,
        gap    : '.7rem',
      },
      710: {
        perPage: 2,
        gap    : '.7rem',
      },
      590: {
        perPage: 1.7,
        gap    : '.7rem',
        pagination: false,
        arrows: 0
      },
      540: {
        perPage: 1.5,
        gap    : '.7rem',
      },
      500:{
          perPage: 1,
          gap    : '.7rem',
          padding: '1rem',
      }
    },
  } );
  
  splide.mount();