new Swiper('.certificate-box', {
    loop: true,
    spaceBetween: 20,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

/*=====turns the menu hamburuer into a X =====*/

const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');  
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
