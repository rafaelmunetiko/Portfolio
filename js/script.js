let currentLang = localStorage.getItem('language') || 'pt-br';

/*===== Translations =====*/

const translations = {
    'pt-br': {
        'logo': 'Portfólio',
        'nav_home': 'Home',
        'nav_services': 'Serviços',
        'nav_portfolio': 'Portfólio',
        'nav_certificate': 'Certificados',
        'nav_hobbies': 'Meus Hobbies',
        'nav_contato': 'Contato',
        'home_hello': 'Olá, eu sou',
        'home_i_am': 'Rafael Munetiko',
        'typing_professions': ["Desenvolvedor Front-End", "Desenvolvedor Back-End", "Analista de Dados"],
        'home_intro': 'Com 9 anos de experiência em RH, estou fazendo a transição para a área de Análise de Dados e Desenvolvimento Front-End e Back-End. Sou movido pelo desafio de construir soluções que conectam dados e código, criando experiências digitais que não só funcionam, mas encantam.',
        'home_skills_intro': 'Conhecimentos em ferramentas como:',
        'home_objective': 'Meu objetivo é criar soluções rápidas e eficazes, sempre com foco em inovação e eficiência.',
        'home_download_cv': 'Download CV',
        'cv_link': 'docs/curriculum_pt.pdf',
        'services_title': 'Meus <span>Serviços</span>',
        'services_frontend_title': 'Front-End',
        'services_frontend_desc': 'Desenvolvo interfaces web interativas e responsivas utilizando HTML, CSS e JavaScript. Meu foco é criar designs modernos e funcionais, garantindo uma experiência de usuário intuitiva e agradável, independentemente do dispositivo utilizado.',
        'services_backend_title': 'Back-End',
        'services_backend_desc': 'Tenho experiência no desenvolvimento de soluções back-end com Python, Java e C#. Trabalho na criação de APIs e integração de sistemas e bancos de dados (SQL e NoSQL), buscando sempre soluções eficientes, seguras e de fácil manutenção.',
        'services_data_title': 'Análise de Dados',
        'services_data_desc': 'Utilizo ferramentas como Power BI, Tableau, SQL e Excel para analisar dados e gerar insights que ajudam as empresas a tomar decisões estratégicas. Meu objetivo é transformar dados em informações claras e práticas, apoiando melhorias nos processos e resultados organizacionais.',
        'read_more': 'Leia Mais',
        'read_less': 'Leia Menos',
        'portfolio_title': 'Últimos <span>Projetos</span>',
        'portfolio_project1_title': 'Portfolio',
        'portfolio_project1_desc': 'Projeto de um portfólio na web desenvolvido em html, css e javascript',
        'portfolio_project2_title': 'API de Restaurantes com FastAPI',
        'portfolio_project2_desc': 'Busca e organiza cardápios de restaurantes externos em endpoints próprios, com consultas rápidas via Swagger UI.',
        'portfolio_project3_title': 'Gestão de Presença Escolar',
        'portfolio_project3_desc': 'Aplicativo que integra uma API ao Microsoft 365, registrando presença e automatizando processos com Power Platform.',
        'portfolio_project4_title': 'Alura Books',
        'portfolio_project4_desc': 'Responsive landing page para o Alura Books, focada na venda de livros de programação e otimizada para diferentes dispositivos.',
        'portfolio_project5_title': 'Teclado Sonoro',
        'portfolio_project5_desc': 'Teclado sonoro interativo desenvolvido com HTML, CSS e JavaScript para aprendizado prático.',
        'portfolio_project6_title': 'Dashboard Gatito',
        'portfolio_project6_desc': 'Dashboard interativo para análise de vendas e faturamento do Gatito Petshop, com insights sobre clientes, produtos e expansão.',
        'certificates_title': 'Certificados',
        'certificate_python_poo': 'Aprenda a programar em Python com Orientação a Objetos',
        'certificate_html_css': 'A partir do zero: HTML e CSS para projetos web',
        'certificate_data_modeling': 'Modelagem de dados',
        'certificate_power_automate': 'Power Automate: criando fluxos de trabalho automatizados e otimizando rotinas',
        'certificate_power_apps': 'Power Apps: descobrindo o poder da automação LowCode',
        'certificate_power_bi': 'Power BI Completo - Do Básico ao Avançado',
        'certificate_sql': 'O curso completo de Banco de Dados e SQL, sem mistérios!',
        'certificate_sharepoint': 'SharePoint 1: criando um site de colaboração para a equipe',
        'certificate_azure': 'Azure Cloud: criando um servidor com banco de dados para receber uma aplicação',
        'hobbies_title': 'Meus <span>Hobbies</span>',
        'hobbies_games_front': 'Jogos & Estratégia',
        'hobbies_games_back_p1': 'Não é só diversão, é treino para raciocínio rápido, solução de problemas e trabalho em equipe. Aprender a perder (e ganhar) também faz parte.',
        'hobbies_games_back_p2': 'Soft skills desenvolvidas: Raciocínio Lógico, Colaboração, Resiliência',
        'hobbies_literature_front': 'Literatura & Storytelling',
        'hobbies_literature_back_p1': 'Ler ensina a interpretar melhor o mundo, contar boas histórias e até se comunicar de forma mais clara. Quem escreve bem, se expressa melhor em qualquer área.',
        'hobbies_literature_back_p2': 'Soft skills desenvolvidas: Comunicação, Criatividade, Pensamento Crítico',
        'hobbies_scouting_front': 'Trabalho Voluntário & Escotismo',
        'hobbies_scouting_back_p1': 'Organizar projetos voluntários e viver o escotismo me ensinou na prática sobre liderança, resiliência e como resolver problemas com poucos recursos.',
        'hobbies_scouting_back_p2': 'Soft skills desenvolvidas: Liderança, Adaptabilidade, Trabalho em Equipe',
        'hobbies_music_front': 'Música & Ritmo',
        'hobbies_music_back_p1': 'Entre tocar violão e mixar faixas, aprendi que ritmo e criatividade andam juntos. Música é sobre sentir o momento e se conectar com as pessoas.',
        'hobbies_music_back_p2': 'Soft skills desenvolvidas: Criatividade, Sensibilidade, Conexão com o Público',
        'hobbies_sports_front': 'Esportes & Disciplina',
        'hobbies_sports_back_p1': 'Futebol pela estratégia e trabalho em equipe, academia pela constância e disciplina. O corpo aprende, mas a mente também cresce junto.',
        'hobbies_sports_back_p2': 'Soft skills desenvolvidas: Disciplina, Persistência, Foco',
        'hobbies_tech_front': 'Meetups & Comunidade Tech',
        'hobbies_tech_back_p1': 'Nada substitui aprender com quem já está no jogo. Participar de meetups me fez entender que networking não é sobre se vender, é sobre construir junto.',
        'hobbies_tech_back_p2': 'Soft skills desenvolvidas: Networking, Aprendizado Contínuo, Colaboração',
        'footer_copyright': '© 2025 Rafael Munetiko. Todos os direitos reservados.',
        'footer_phrase': 'Transformando dados em decisões estratégicas para um futuro mais inteligente.'
    },
    'en': {
        'logo': 'Portfolio',
        'nav_home': 'Home',
        'nav_services': 'Services',
        'nav_portfolio': 'Portfolio',
        'nav_certificate': 'Certificates',
        'nav_hobbies': 'My Hobbies',
        'nav_contato': 'Contact',
        'home_hello': 'Hello, I\'m',
        'home_i_am': 'Rafael Munetiko',
        'typing_professions': ["Front-End Developer", "Back-End Developer", "Data Analyst"],
        'home_intro': 'With 9 years of experience in HR, I am transitioning to the area of Data Analysis and Front-End and Back-End Development. I am driven by the challenge of building solutions that connect data and code, creating digital experiences that not only work but also enchant.',
        'home_skills_intro': 'Knowledge in tools such as:',
        'home_objective': 'My goal is to create fast and effective solutions, always focused on innovation and efficiency.',
        'home_download_cv': 'Download CV',
        'cv_link': 'docs/curriculum_en.pdf',
        'services_title': 'My <span>Services</span>',
        'services_frontend_title': 'Front-End',
        'services_frontend_desc': 'I develop interactive and responsive web interfaces using HTML, CSS, and JavaScript. My focus is on creating modern and functional designs, ensuring an intuitive and enjoyable user experience, regardless of the device used.',
        'services_backend_title': 'Back-End',
        'services_backend_desc': 'I have experience in developing back-end solutions with Python, Java, and C#. I work on creating APIs and integrating systems and databases (SQL and NoSQL), always seeking efficient, secure, and easy-to-maintain solutions.',
        'services_data_title': 'Data Analysis',
        'services_data_desc': 'I use tools like Power BI, Tableau, SQL, and Excel to analyze data and generate insights that help companies make strategic decisions. My goal is to transform data into clear and practical information, supporting improvements in organizational processes and results.',
        'read_more': 'Read More',
        'read_less': 'Read Less',
        'portfolio_title': 'Latest <span>Projects</span>',
        'portfolio_project1_title': 'Portfolio',
        'portfolio_project1_desc': 'Web portfolio project developed in html, css and javascript',
        'portfolio_project2_title': 'Restaurants API with FastAPI',
        'portfolio_project2_desc': 'Searches and organizes menus from external restaurants into its own endpoints, with quick queries via Swagger UI.',
        'portfolio_project3_title': 'School Attendance Management',
        'portfolio_project3_desc': 'Application that integrates an API with Microsoft 365, recording attendance and automating processes with Power Platform.',
        'portfolio_project4_title': 'Alura Books',
        'portfolio_project4_desc': 'Responsive landing page for Alura Books, focused on selling programming books and optimized for different devices.',
        'portfolio_project5_title': 'Sound Keyboard',
        'portfolio_project5_desc': 'Interactive sound keyboard developed with HTML, CSS, and JavaScript for practical learning.',
        'portfolio_project6_title': 'Gatito Dashboard',
        'portfolio_project6_desc': 'Interactive dashboard for sales and revenue analysis of Gatito Petshop, with insights on customers, products, and expansion.',
        'certificates_title': 'Certificates',
        'certificate_python_poo': 'Learn to program in Python with Object-Oriented Programming',
        'certificate_html_css': 'From scratch: HTML and CSS for web projects',
        'certificate_data_modeling': 'Data modeling',
        'certificate_power_automate': 'Power Automate: creating automated workflows and optimizing routines',
        'certificate_power_apps': 'Power Apps: discovering the power of LowCode automation',
        'certificate_power_bi': 'Complete Power BI - From Basic to Advanced',
        'certificate_sql': 'The complete course on Databases and SQL, without mysteries!',
        'certificate_sharepoint': 'SharePoint 1: creating a collaboration site for the team',
        'certificate_azure': 'Azure Cloud: creating a server with a database to receive an application',
        'hobbies_title': 'My <span>Hobbies</span>',
        'hobbies_games_front': 'Games & Strategy',
        'hobbies_games_back_p1': 'It\'s not just fun, it\'s training for quick thinking, problem-solving, and teamwork. Learning to lose (and win) is also part of it.',
        'hobbies_games_back_p2': 'Soft skills developed: Logical Reasoning, Collaboration, Resilience',
        'hobbies_literature_front': 'Literature & Storytelling',
        'hobbies_literature_back_p1': 'Reading teaches you to better interpret the world, tell good stories, and even communicate more clearly. Whoever writes well, expresses themselves better in any area.',
        'hobbies_literature_back_p2': 'Soft skills developed: Communication, Creativity, Critical Thinking',
        'hobbies_scouting_front': 'Volunteering & Scouting',
        'hobbies_scouting_back_p1': 'Organizing volunteer projects and living scouting taught me in practice about leadership, resilience, and how to solve problems with few resources.',
        'hobbies_scouting_back_p2': 'Soft skills developed: Leadership, Adaptability, Teamwork',
        'hobbies_music_front': 'Music & Rhythm',
        'hobbies_music_back_p1': 'Between playing the guitar and mixing tracks, I learned that rhythm and creativity go together. Music is about feeling the moment and connecting with people.',
        'hobbies_music_back_p2': 'Soft skills developed: Creativity, Sensitivity, Connection with the Audience',
        'hobbies_sports_front': 'Sports & Discipline',
        'hobbies_sports_back_p1': 'Football for strategy and teamwork, gym for consistency and discipline. The body learns, but the mind also grows together.',
        'hobbies_sports_back_p2': 'Soft skills developed: Discipline, Persistence, Focus',
        'hobbies_tech_front': 'Meetups & Tech Community',
        'hobbies_tech_back_p1': 'Nothing replaces learning from those who are already in the game. Participating in meetups made me understand that networking is not about selling yourself, it\'s about building together.',
        'hobbies_tech_back_p2': 'Soft skills developed: Networking, Continuous Learning, Collaboration',
        'footer_copyright': '© 2025 Rafael Munetiko. All rights reserved.',
        'footer_phrase': 'Transforming data into strategic decisions for a smarter future.'
    }
};

/*===== /Translations =====*/

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

/*===== /Menu Hamburguer =====*/

/*===== Expande o texto "Leia mais" =====*/

document.addEventListener("click", function (event) {
    const allParagraphs = document.querySelectorAll(".services-box p");
    if (event.target.classList.contains("read-more-btn")) {
        const readMoreButton = event.target;
        const servicesBox = readMoreButton.closest(".services-box");
        const paragraph = servicesBox.querySelector("p");

        if (paragraph) {
            paragraph.classList.toggle("expanded");
            readMoreButton.textContent = paragraph.classList.contains("expanded") ? translations[currentLang]['read_less'] : translations[currentLang]['read_more'];

            allParagraphs.forEach(p => {
                const currentServicesBox = p.closest(".services-box");
                if (currentServicesBox !== servicesBox) {
                    p.classList.remove("expanded");
                    const otherButton = currentServicesBox.querySelector(".read-more-btn");
                    if (otherButton) {
                        otherButton.textContent = translations[currentLang]['read_more'];
                    }
                }
            });
        }
    } else {
        allParagraphs.forEach(p => {
            p.classList.remove("expanded");
            const currentServicesBox = p.closest(".services-box");
            const otherButton = currentServicesBox.querySelector(".read-more-btn");
            if (otherButton) {
                otherButton.textContent = translations[currentLang]['read_more'];
            }
        });
    }
});

/*===== /Expande o texto "Leia mais" =====*/

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

/*===== /Dark Mode =====*/

/*===== Flip Cards =====*/

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });
});

/*===== /Flip Cards =====*/

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

/*===== / Pulsing Effect =====*/

/*===== Translate Effect =====*/

document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    const downloadCvButton = document.querySelector('a.btn[data-i18n="home_download_cv"]'); 

    /*===== Typing Effect =====*/

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speedTyping = 150;
    const speedDeleting = 75;
    const delayBeforeDelete = 1500;
    let currentTexts = translations[currentLang].typing_professions;
    const typingElement = document.getElementById("typing");

    function typeEffect() {
        const currentText = currentTexts[textIndex];
        const currentSpeed = isDeleting ? speedDeleting : speedTyping;

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, delayBeforeDelete);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % currentTexts.length;
            typingElement.textContent = '';
        }

        setTimeout(typeEffect, currentSpeed);
    }

    /*===== / Typing Effect =====*/

    function translatePage(lang) {
        currentLang = lang; 
        localStorage.setItem('language', lang);
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (key === 'typing_professions') {
                    currentTexts = translations[lang][key];
                } else if (key === 'home_download_cv') {
                    element.textContent = translations[lang][key];
                } else if (key === 'read_more' && element.classList.contains('read-more-btn')) {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

    /*===== Download do CV =====*/

        if (translations[lang] && translations[lang].cv_link && downloadCvButton) {
            downloadCvButton.href = translations[lang].cv_link;
            downloadCvButton.setAttribute('target', '_blank');
        }

        langButtons.forEach(btn => {
            btn.classList.remove('active-lang');
            if (btn.id === lang) {
                btn.classList.add('active-lang')
            }
        });

        localStorage.setItem('language', lang);

    /*===== /Download do CV =====*/

        textIndex = 0;
        charIndex = 0;
        isDeleting = false;
        typingElement.textContent = ''; 
        setTimeout(typeEffect, 100);
    }

    translatePage(currentLang);
    typeEffect();

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.id;
            translatePage(selectedLang);
        });
    });

});

/*===== Translate Effect =====*/