// transiciones
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Observa en el viewport
        rootMargin: "0px", // Sin márgenes adicionales
        threshold: 0.1, // Activa cuando el 10% del elemento sea visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Agrega la clase 'show'
                observer.unobserve(entry.target); // Deja de observar el elemento
            }
        });
    }, observerOptions);

    // Seleccionamos las filas y el footer que necesitan la animación
    const elementosAnimados = document.querySelectorAll(
        ".contenedor-fila-categories, .contenedor-fila-trending-products, .cont-article-founder-section, .footer"
    );

    // Observa cada elemento animado
    elementosAnimados.forEach((elemento) => observer.observe(elemento));
});

// HOME 
// carousel 
const carouselData = [
    {
        containerClass: 'cont-center column',
        titleClass: 'text-white',
        title: ['Top-notch Furniture'],
        paragraphClass: 'text-center carousel-content-p',
        paragraph: 'Sofa Store provides the best furniture and accessories for homes and offices.',
        linkHref: 'grid-shop.html',
        linkClass: 'bg-white text-black carousel-content-a',
        linkText: 'Shop Now'
    },
    {
        containerClass: 'flex left column cont-carousel',
        titleClass: 'text-grey title-carousel2Y3',
        title: ['<span>Quality</span>', '<span class="title-carousel-span2">Decor</span>'],
        paragraphClass: 'carousel2-content-p',
        paragraph: 'Choose anything you need from a wide range of impressive home decor solutions.',
        linkHref: 'grid-shop.html',
        linkClass: 'bg-grey text-center text-white carousel2-content-a',
        linkText: 'Shop Now'
    },
    {
        containerClass: 'flex left column cont-carousel',
        titleClass: 'text-grey title-carousel2Y3',
        title: ['<span>Impressive</span>', '<span class="title-carousel-span2">Lighting</span>'],
        paragraphClass: 'carousel3-content-p',
        paragraph: 'Improve your home’s lighting with hundreds of products available at Sofa.',
        linkHref: 'grid-shop.html',
        linkClass: 'bg-grey text-center text-white carousel3-content-a',
        linkText: 'Shop Now'
    }
];

// categories 
const categoriesData = [
    {
        image: "assets/images/sillon.png",
        altText: "Sillón",
        title: "Living Room",
        description: "Sofas, coffee tables, couches",
        link: "#"
    },
    {
        image: "assets/images/cama.png",
        altText: "Cama",
        title: "Bedroom",
        description: "Beds, nightstands, dressers",
        link: "#"
    },
    {
        image: "assets/images/cajon.png",
        altText: "Cajón",
        title: "Dining Room",
        description: "Tables, chairs, cabinets",
        link: "#"
    },
    {
        image: "assets/images/bano.png",
        altText: "Baño",
        title: "Bathroom",
        description: "Vanities, mirrors, lighting",
        link: "#"
    },
    {
        image: "assets/images/lampara.png",
        altText: "Lámpara",
        title: "Decor & Furniture",
        description: "Cushions, wall art, drapery",
        link: "#"
    },
    {
        image: "assets/images/bebe.png",
        altText: "Bebé",
        title: "Kids Room",
        description: "Kids beds, trundlers, dressers",
        link: "#"
    }
];


// FUNCIONES
// carousel 
function carousel_section(carouselSelector, sectionsData) {
    const sections = document.querySelectorAll(carouselSelector);
    let currentIndex = 0;

    // Generar contenido dinámicamente para cada sección
    sections.forEach((section, index) => {
        const data = sectionsData[index];
        
        
        if (data) {
            // Crear el título
            const titleElement = document.createElement('h1');
            titleElement.className = data.titleClass;
            titleElement.innerHTML = data.title.map(line => line).join(' ');

            // Crear el párrafo
            const paragraphElement = document.createElement('p');
            paragraphElement.className = data.paragraphClass;
            paragraphElement.textContent = data.paragraph;

            // Crear el enlace
            const linkElement = document.createElement('a');
            linkElement.href = data.linkHref;
            linkElement.className = data.linkClass;
            linkElement.textContent = data.linkText;

            // Crear el contenedor
            const container = document.createElement('div');
            container.className = data.containerClass;

            // Añadir elementos al contenedor
            container.appendChild(titleElement);
            container.appendChild(paragraphElement);
            container.appendChild(linkElement);

            // Añadir el contenedor a la sección
            section.innerHTML = ''; // Limpiar contenido previo
            section.appendChild(container);
        }
    });

    // Configurar visibilidad inicial
    function updateCarousel() {
        sections.forEach((section, index) => {
            if (index === currentIndex) { // lo que haces aca es que si la seccion esta seleccionada te muestra sus respectivos estilos
                section.style.visibility = 'visible';
                section.style.opacity = '1';
                section.style.position = 'relative';
                section.style.zIndex = '1';
            } else { // y si no esta seleccionada te los oculta
                section.style.visibility = 'hidden';
                section.style.opacity = '0';
                section.style.position = 'absolute';
                section.style.zIndex = '-1';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % sections.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + sections.length) % sections.length;
        updateCarousel();
    }

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '❮';
    prevButton.classList.add('carousel-button', 'prev-button');
    prevButton.addEventListener('click', prevSlide);

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '❯';
    nextButton.classList.add('carousel-button', 'next-button');
    nextButton.addEventListener('click', nextSlide);

    sections[0].parentElement.appendChild(prevButton);
    sections[0].parentElement.appendChild(nextButton);

    updateCarousel();
}

//categories
function createCategories(categories) {
    // Contenedores de filas
    const fila1 = document.getElementById("fila1-categories");
    const fila2 = document.getElementById("fila2-categories");

    categories.forEach((category, index) => {
        // Crear el contenedor del artículo
        const article = document.createElement("article");
        article.classList.add("cont-center", "articulos-categories");

        // Crear el figure e imagen
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.classList.add("img-articulo-categories");
        img.src = category.image;
        img.alt = category.altText;
        figure.appendChild(img);

        // Crear el contenedor del texto
        const textDiv = document.createElement("div");

        // Crear el título con enlace
        const h3 = document.createElement("h3");
        h3.classList.add("title-articulo-categories");
        const link = document.createElement("a");
        link.classList.add("text-white");
        link.href = category.link;
        link.textContent = category.title;
        h3.appendChild(link);

        // Crear el párrafo
        const p = document.createElement("p");
        p.classList.add("p-articulo-categories");
        p.textContent = category.description;

        // Añadir el título y el párrafo al contenedor de texto
        textDiv.appendChild(h3);
        textDiv.appendChild(p);

        // Añadir el figure y el contenedor de texto al artículo
        article.appendChild(figure);
        article.appendChild(textDiv);

        // Añadir el artículo a la fila correspondiente
        if (index < 3) {
            fila1.appendChild(article);
        } else {
            fila2.appendChild(article);
        }
    });
}

// LLAMADAS A LAS FUNCIONES
//carousel
document.addEventListener('DOMContentLoaded', () => {
    carousel_section('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
});

//categories
createCategories(categoriesData);





