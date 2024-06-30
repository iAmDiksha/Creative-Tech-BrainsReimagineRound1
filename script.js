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

var splide = new Splide( '.splide', {
    perPage: 3,
    perMove: 1,
    gap    : '1rem',
    padding: '3rem',
    type: 'loop',
    drag: 'free',
    focus  : 'center',
    autoplay: true,
    breakpoints: {
      1150:{
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
      },
      540: {
        perPage: 1.5,
        gap    : '.7rem',
      },
      500:{
          perPage: 1,
          gap    : '.7rem',
          padding: '1.5rem'
      }
    },
  } );
  
  splide.mount();

   document.addEventListener("DOMContentLoaded", function() {
    // Initialize Slick sliders
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // GSAP animations for sliders
    gsap.utils.toArray('.slide').forEach(slide => {
        gsap.from(slide, {
            scrollTrigger: {
                trigger: slide,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });
});
