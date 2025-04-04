/*===== Swiper =====*/


const swiperContainer = document.querySelector('.certificate-box');
if (swiperContainer) {
    new Swiper('.certificate-box', {
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        watchSlidesProgress: true,
        loopAdditionalSlides: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

/*===== /Swiper =====*/

/*===== Menu Hamburguer =====*/
const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change');
    nav.classList.toggle('open'); 
});

/*===== Expande o texto "Leia mais" =====*/
document.addEventListener("click", function (event) {
    const allParagraphs = document.querySelectorAll(".services-box p");

    if (event.target.classList.contains("read-more-btn")) {
        const paragraph = event.target.previousElementSibling;

        allParagraphs.forEach(p => {
            if (p !== paragraph) {
                p.classList.remove("expanded");
                p.nextElementSibling.textContent = "Leia mais";
            }
        });

        paragraph.classList.toggle("expanded");
        event.target.textContent = paragraph.classList.contains("expanded") ? "Leia menos" : "Leia mais";
    } else {
            allParagraphs.forEach(p => {
            p.classList.remove("expanded");
            p.nextElementSibling.textContent = "Leia mais";
        });
    }
});


/*===== Download do CV =====*/
function downloadPDF() {
    window.open('docs/curriculum.pdf', '_blank');
}

/*===== Dark Mode =====*/
const toggle = document.getElementById('toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
}

toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

/*===== Flip Cards =====*/
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });
});


/*===== Typing Effect =====*/

const texts = ["Desenvolvedor Front-End", "Desenvolvedor Back-End", "Analista de Dados"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let speed = 100;
        let deletingFrontEnd = false;
        let deletingAnalista = false;

        function typeEffect() {
            const typingElement = document.getElementById("typing");
            const currentText = texts[textIndex];

            if (isDeleting) {
                charIndex--;
                speed = 50;

                if (deletingFrontEnd && charIndex === "Desenvolvedor ".length) {
                    isDeleting = false;
                    deletingFrontEnd = false;
                    textIndex = 1; 
                }
               
                if (deletingAnalista && charIndex === 0) {
                    isDeleting = false;
                    deletingAnalista = false;
                    textIndex = 0; 
                }
            } else {
                charIndex++;
                speed = 100;
            }

            typingElement.textContent = currentText.substring(0, charIndex);

            if (!isDeleting && charIndex === currentText.length) {
                speed = 1000;

                if (textIndex === 0) {
                    deletingFrontEnd = true; 
                    isDeleting = true;
                } else if (textIndex === 1) {
                    isDeleting = true; 
                } else if (textIndex === 2) {
                    deletingAnalista = true; 
                    isDeleting = true;
                }
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();

/*===== Pulsing Effect =====*/
const socialMediaLinks = document.querySelectorAll('.social-media a');
const navLinks = document.querySelectorAll('.nav a');


function removePulseEffect() {
    socialMediaLinks.forEach(link => {
        link.style.animation = 'none';
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        socialMediaLinks.forEach(link => {
            link.style.animation = 'pulse 1.5s infinite'; 
        });

        
        setTimeout(removePulseEffect, 1500); 
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav')) { 
        removePulseEffect(); 
    }
});
