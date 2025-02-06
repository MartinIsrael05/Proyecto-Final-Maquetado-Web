// DATOS
const carouselData = [  // carousel
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

const categoriesData = [ // categories 
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

const productos = [ // trending products
    { nombre: "Garden Table", imagen: "assets/images/producto1.png", precio: 23, precioAnterior: 30, etiqueta: "SALE" },
    { nombre: "Club Chair", imagen: "assets/images/producto2.png", precio: 13, etiqueta: "NEW" },
    { nombre: "Pendant Lamp", imagen: "assets/images/producto3.png", precio: 17 },
    { nombre: "Dark Grey Club Chair", imagen: "assets/images/producto4.png", precio: 14, etiqueta: "NEW" },
    { nombre: "Table Lamp", imagen: "assets/images/producto5.png", precio: 11, etiqueta: "NEW" },
    { nombre: "Orange Stacking Chair", imagen: "assets/images/producto6.png", precio: 15 },
    { nombre: "Floor Lamp", imagen: "assets/images/producto7.png", precio: 22, precioAnterior: 32, etiqueta: "SALE" },
    { nombre: "White Chair", imagen: "assets/images/producto8.png", precio: 10 },
];

const portfolioItems = [ // portfolio
    { src: "assets/images/portfolio1.jpg", title: "SUNSHINE RESTAURANT", category: "DECOR" },
    { src: "assets/images/portfolio2.jpg", title: "QUADRO HOTEL", category: "FURNITURE" },
    { src: "assets/images/portfolio3.jpg", title: "U-STYLE FASHION HOUSE", category: "DECOR" },
    { src: "assets/images/portfolio4.jpg", title: "FLASH CAFE", category: "FURNITURE" },
    { src: "assets/images/portfolio5.jpg", title: "NEW YORK PUBLIC LIBRARY", category: "DECOR" },
    { src: "assets/images/portfolio6.jpg", title: "Q-BIZ COWORKING", category: "FURNITURE" },
    { src: "assets/images/portfolio7.jpg", title: "MONROE’S BAR", category: "DECOR" }
];

const blogs = [ // blog
    {
        imgSrc: 'assets/images/blog1.jpg',
        title: 'LED Lighting and Its Benefits for Homeowners',
        date: 'August 9, 2021'
    },
    {
        imgSrc: 'assets/images/blog2.jpg',
        title: 'What to Look for When Shopping for Chairs Online',
        date: 'August 9, 2021'
    },
    {
        imgSrc: 'assets/images/blog3.jpg',
        title: 'Ways to Decorate Your Home with the Color Red',
        date: 'August 9, 2021'
    },
    {
        imgSrc: 'assets/images/blog4.jpg',
        title: 'Top 20 Interior Home Decor Trends of 2021',
        date: 'August 9, 2021'
    },
    {
        imgSrc: 'assets/images/blog5.jpg',
        title: 'HOW TO CHOOSE FURNITURE FOR YOUR HOME',
        date: 'August 9, 2021'
    }

];

const blogs_gridBlog = [ // blog (grid-blog)
    {
        imgSrc: 'assets/images/grid blog 1.jpg',
        date: 'August 9, 2021',
        title: 'Top 20 Interior Home Decor Trends of 2021',
        description: 'Est velox nuptia, cesaris. Est dexter turpis, cesaris. Cum nixus persuadere, omnes fluctuies promissio flavum'
    },
    {
        imgSrc: 'assets/images/grid blog 2.jpg',
        date: 'August 9, 2021',
        title: 'How to Choose Furniture for Your Home',
        description: 'Sensorems peregrinatione in rugensis civitas! Ubi est bi-color byssus? Velox, teres ollas recte aperto de castus'
    },
    {
        imgSrc: 'assets/images/grid blog 3.jpg',
        date: 'August 9, 2021',
        title: 'LED Lighting and Its Benefits for Homeowners',
        description: 'Talis tus acceleratrix contactuss lixa est. Pol, a bene equiso. Cum nuptia peregrinatione, omnes adgiumes visum'
    },
    {
        imgSrc: 'assets/images/grid blog 4.jpg',
        date: 'August 9, 2021',
        title: 'What to Look for When Shopping for Chairs Online',
        description: 'Cum zeta experimentum, omnes scutumes fallere domesticus, salvus lapsuses. Neuter, teres calcarias unus'
    },
    {
        imgSrc: 'assets/images/grid blog 5.jpg',
        date: 'August 9, 2021',
        title: 'Ways to Decorate Your Home with the Color Red',
        description: 'Orgia, nixus, et zirbus. Vortexs volare in hafnia! Domesticus, dexter pess inciviliter desiderium de fortis'
    },
    {
        imgSrc: 'assets/images/grid blog 6.jpg',
        date: 'August 9, 2021',
        title: '6 Ideas To Design the Perfect Guest Bedroom',
        description: 'Cur contencio studere? Finis mirabilis buxum est. Ferox lumen grauiter resuscitabos hydra est. Magnum byssus'
    }
];


// FUNCIONES REUTILIZABLES
function renderItems(container, items, currentIndex, itemsPerPage, renderItem) { // Función genérica para renderizar elementos en un contenedor
    container.innerHTML = ""; // Limpiar el contenido anterior
    // Iterar sobre el número de elementos que se deben mostrar por página
    for (let i = 0; i < itemsPerPage; i++) {
        // Calcular el índice del elemento actual en el array de items
        const itemIndex = (currentIndex + i) % items.length;
        // Obtener el elemento actual del array de items
        const item = items[itemIndex];
        // Llamar a la función renderItem para renderizar el elemento en el contenedor
        renderItem(container, item);
    }
}

function prevSlide(container, items, currentIndex, itemsPerPage, renderItem) { // Función genérica para mostrar el slide anterior
    // Calcular el nuevo índice actual restando el número de elementos por página
    // y asegurarse de que el índice sea positivo usando el operador módulo
    currentIndex = (currentIndex - itemsPerPage + items.length) % items.length;

    // Renderizar los elementos en el contenedor usando el nuevo índice actual
    renderItems(container, items, currentIndex, itemsPerPage, renderItem);

    // Devolver el nuevo índice actual
    return currentIndex;
}

function nextSlide(container, items, currentIndex, itemsPerPage, renderItem) { // Función genérica para mostrar el siguiente slide
    // Calcular el nuevo índice actual sumando el número de elementos por página
    // y asegurarse de que el índice esté dentro del rango del array usando el operador módulo
    currentIndex = (currentIndex + itemsPerPage) % items.length;

    // Renderizar los elementos en el contenedor usando el nuevo índice actual
    renderItems(container, items, currentIndex, itemsPerPage, renderItem);

    // Devolver el nuevo índice actual
    return currentIndex;
}


// FUNCIONES ESPECIFICAS
function carousel_section(carouselSelector, sectionsData) { // carousel 
    const sections = document.querySelectorAll(carouselSelector);
    let currentIndex = 0;

    if (sections.length === 0) {
        console.error(`No se encontraron elementos con el selector: ${carouselSelector}`);
        return;
    }

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

function createCategories(categories) { // categories
    // Contenedores de filas
    const fila1 = document.querySelector("#fila1-categories");
    const fila2 = document.querySelector("#fila2-categories");

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

function trendingProducts() { // trending products
    const section = document.querySelector(".trending-products-section");

    const contenedorFila1 = document.createElement("article");
    contenedorFila1.classList.add("cont-center", "contenedor-fila-trending-products");

    const contenedorFila2 = document.createElement("article");
    contenedorFila2.classList.add("cont-center", "contenedor-fila-trending-products");

    productos.forEach((producto, index) => {
        const article = document.createElement("article");
        article.classList.add("articulo-trending-products", "bg-f5", "product-card");

        if (producto.etiqueta) {
            const etiquetaDiv = document.createElement("div");
            etiquetaDiv.classList.add("flex", "right");

            const etiquetaSpan = document.createElement("span");
            etiquetaSpan.classList.add(producto.etiqueta.toLowerCase());
            etiquetaSpan.textContent = producto.etiqueta;

            etiquetaDiv.appendChild(etiquetaSpan);
            article.appendChild(etiquetaDiv);
        }

        const figure = document.createElement("figure");
        figure.classList.add("cont-center");

        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        figure.appendChild(img);
        article.appendChild(figure);

        const divInfo = document.createElement("div");

        const h4 = document.createElement("h4");
        h4.classList.add("text-center", "title-articulo-trending-products");
        h4.textContent = producto.nombre;

        divInfo.appendChild(h4);

        if (producto.precioAnterior) {
            const divPrecios = document.createElement("div");
            divPrecios.classList.add("cont-center", "cont-precios");

            const precioAnterior = document.createElement("p");
            precioAnterior.classList.add("precio-tachado", "text-grey");
            precioAnterior.textContent = `$${producto.precioAnterior}.00`;

            const precio = document.createElement("p");
            precio.classList.add("text-center", "text-blue");
            precio.textContent = `$${producto.precio}.00`;

            divPrecios.appendChild(precioAnterior);
            divPrecios.appendChild(precio);
            divInfo.appendChild(divPrecios);
        } else {
            const precio = document.createElement("p");
            precio.classList.add("text-center", "text-blue");
            precio.textContent = `$${producto.precio}.00`;
            divInfo.appendChild(precio);
        }

        article.appendChild(divInfo);

        const divHoverIcons = document.createElement("div");
        divHoverIcons.classList.add("cont-center", "hover-icons");

        const divIcon1 = document.createElement("div");
        divIcon1.classList.add("bg-white", "text-center", "cont-center", "icon-circle-trendingProducts");
        const a1 = document.createElement("a");
        a1.href = "single-product.html";
        const imgLupa = document.createElement("img");
        imgLupa.src = "assets/images/lupa.png";
        imgLupa.alt = "Lupa";
        a1.appendChild(imgLupa);
        divIcon1.appendChild(a1);

        const divIcon2 = document.createElement("div");
        divIcon2.classList.add("bg-white", "text-center", "cont-center", "icon-circle2-trendingProducts");
        const a2 = document.createElement("a");
        a2.href = "single-product.html";
        const imgCarrito = document.createElement("img");
        imgCarrito.src = "assets/images/cart.png";
        imgCarrito.alt = "Carrito";
        a2.appendChild(imgCarrito);
        divIcon2.appendChild(a2);

        divHoverIcons.appendChild(divIcon1);
        divHoverIcons.appendChild(divIcon2);

        article.appendChild(divHoverIcons);

        if (index < 4) {
            contenedorFila1.appendChild(article);
        } else {
            contenedorFila2.appendChild(article);
        }
    });

    section.appendChild(contenedorFila1);
    section.appendChild(contenedorFila2);
}

function portfolio() { // portfolio (home)
    const portfolioSection = document.querySelector(".portfolio");

    const portfolioContainer = document.createElement("article");
    portfolioContainer.classList.add("parent");

    const fullScreenDialog = document.createElement("dialog");
    const fullScreenImg = document.createElement("img");
    fullScreenDialog.appendChild(fullScreenImg);
    portfolioSection.appendChild(fullScreenDialog);

    fullScreenDialog.addEventListener("click", () => fullScreenDialog.close());

    // generar los artículos dinámicamente
    portfolioItems.forEach((item, index) => {
        const article = document.createElement("article");
        article.classList.add(`article-portfolio-${index + 1}`);

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = `foto ${index + 1} - portfolio`;
        figure.appendChild(img);

        const overlay = document.createElement("div");
        overlay.classList.add("cont-center", "text-white", "overlay");

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const h4 = document.createElement("h4");
        h4.textContent = item.category;

        const iconCircle = document.createElement("div");
        iconCircle.classList.add("bg-white", "text-center", "icon-circle");
        const lupa = document.createElement("img");
        lupa.src = "assets/images/lupa.png";
        lupa.alt = "Lupa";
        iconCircle.appendChild(lupa);

        // Evento para mostrar la imagen en pantalla completa
        iconCircle.addEventListener("click", () => {
            fullScreenImg.src = item.src;
            fullScreenDialog.showModal();
        });

        overlay.append(h3, h4, iconCircle);
        article.append(figure, overlay);
        portfolioContainer.appendChild(article);
    });

    portfolioSection.appendChild(portfolioContainer);
}

function renderBlog(container, blog) { // blog (home)
    const blogCard = document.createElement('article');
    blogCard.className = 'blog-card';

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = blog.imgSrc;
    img.alt = 'Blog Image';
    figure.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = blog.title;

    const p = document.createElement('p');
    p.textContent = blog.date;

    blogCard.appendChild(figure);
    blogCard.appendChild(h3);
    blogCard.appendChild(p);

    container.appendChild(blogCard);
}
// Inicializar el slider de blogs
let blogCurrentIndex = 0;
const blogContainer = document.querySelector('#blog-contenedor');
const blogsPerPage = 4;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
if (prev && next) {
    prev.addEventListener('click', () => {
        blogCurrentIndex = prevSlide(blogContainer, blogs, blogCurrentIndex, blogsPerPage, renderBlog);
    });
    next.addEventListener('click', () => {
        blogCurrentIndex = nextSlide(blogContainer, blogs, blogCurrentIndex, blogsPerPage, renderBlog);
    });
}


// TRANSICIONES
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
        ".contenedor-fila-categories, .cont-article-founder-section, .footer"
    );

    // Observa cada elemento animado
    elementosAnimados.forEach((elemento) => observer.observe(elemento));
});


// LLAMADAS A LAS FUNCIONES
document.addEventListener('DOMContentLoaded', () => { // carousel
    if (document.querySelector("#carousel-section")) {
        carousel_section('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
    }
    
    if (document.querySelector("#fila1-categories") && document.querySelector("#fila2-categories")) {
        createCategories(categoriesData); // categories
    }
    
    if (document.querySelector("#trending-products-section")) {
        trendingProducts(); // trending products
    }

    if (document.querySelector(".portfolio")) {
        portfolio(); // portfolio
    }

    if (document.querySelector("#blog-contenedor")) {
        renderItems(blogContainer, blogs, blogCurrentIndex, blogsPerPage, renderBlog); // Inicializar el contenido de blogs
    }
});


// VALIDACIONES
//formulario footer
//formularios checkout