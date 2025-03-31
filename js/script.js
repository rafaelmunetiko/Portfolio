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

/*=====expands the read more text =====*/

document.querySelectorAll(".read-more-btn").forEach(button => {
    button.addEventListener("click", function () {
        const paragraph = this.previousElementSibling;
        
        paragraph.classList.toggle("expanded");
        
        if (paragraph.classList.contains("expanded")) {
            this.textContent = "Leia menos";
        } else {
            this.textContent = "Leia mais";
        }
    });
});

/*=====download cv =====*/

function downloadPDF() {
    
    const pdfUrl = 'docs/curriculum.pdf'; 

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculum.pdf'; 
    link.click();
  }

  /*=====dark mode =====*/

const toggle = document.getElementById('toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true; 
} else {
    document.body.classList.remove('dark-mode');
    toggle.checked = false; 
}

toggle.addEventListener('change', function() {
    if (this.checked) {
        
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); 
    } else {
        
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});