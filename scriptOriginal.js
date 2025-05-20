// DATOS
// home
const carouselData = [  // carousel
    {
        containerClass: 'cont-center column',
        titleClass: 'text-white text-center tituloCarrousel',
        title: ['Top-notch Furniture'],
        paragraphClass: 'text-center carousel-content-p',
        paragraph: 'Sofa Store provides the best furniture and accessories for homes and offices.',
        linkHref: 'grid-shop.html',
        linkClass: 'bg-white text-151515 carousel-content-a',
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

// about us 
const historyCards = [ // our history
    {
        title: 'Establishment',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio.'
    },
    {
        title: 'First Success',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio.'
    },
    {
        title: 'New Products',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio.'
    },
    {
        title: 'National Recognition',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio.'
    },
    {
        title: 'Market Leaders',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio.'
    }
];

const teamMembers = [ // our team
    {
        name: 'KATE FERRAND',
        image: './assets/images/kateFerrand-aboutUs.jpg',
        description: 'Cum exsul crescere, omnes lanistaes experientia gratis, castus detriuses.',
        socialLinks: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://x.com/',
            instagram: 'https://www.instagram.com/',
            email: 'https://mail.google.com/mail/u/0/#inbox'
        }
    },
    {
        name: 'RICK MARTINEZ',
        image: './assets/images/rickMartinez-aboutUs.jpg',
        description: 'Cum zelus mori, omnes repressores desiderium magnum, rusticus medicinaes.',
        socialLinks: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://x.com/',
            instagram: 'https://www.instagram.com/',
            email: 'https://mail.google.com/mail/u/0/#inbox'
        }
    },
    {
        name: 'SAMANTHA WILLIAMS',
        image: './assets/images/samanthaWilliams-aboutUs.jpg',
        description: 'Cum compater resistere, omnes menses fallere placidus, germanus gemnaes.',
        socialLinks: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://x.com/',
            instagram: 'https://www.instagram.com/',
            email: 'https://mail.google.com/mail/u/0/#inbox'
        }
    },
    {
        name: 'PETER SMITH',
        image: './assets/images/peterSmith-aboutUs.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
        socialLinks: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://x.com/',
            instagram: 'https://www.instagram.com/',
            email: 'https://mail.google.com/mail/u/0/#inbox'
        }
    },
    {
        name: 'CAROLINE LOPEZ',
        image: './assets/images/carolineLopez-aboutUs.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
        socialLinks: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://x.com/',
            instagram: 'https://www.instagram.com/',
            email: 'https://mail.google.com/mail/u/0/#inbox'
        }
    },
    {
        name: 'WILL MCMILLAN',
        image: './assets/images/willMcmillan-aboutUs.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
        socialLinks: {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://x.com/',
            instagram: 'https://www.instagram.com/',
            email: 'https://mail.google.com/mail/u/0/#inbox'
        }
    }
];

const testimonials = [ // testimonials
    {
        quote: "Genetrix sunt urbs de flavum navis. Magnum paluss ducunt ad urbs. Cum secula favere, omnes assimilationes tractare regius, emeritis caculaes.",
        author: "JANE LEE",
        role: "Client",
        image: "./assets/images/janeLee-aboutUs.jpg"
    },
    {
        quote: "Zirbus velums, tanquam camerarius byssus. Pol, extum! Abactus varius ausus est. Cum elogium ortum, omnes ignigenaes acquirere altus, pius.",
        author: "JAMES PETERSON",
        role: "Client",
        image: "./assets/images/jamesPeterson-aboutUs.jpg"
    },
    {
        quote: "Caculas ortum in peritus virundum! Congregabo callide ducunt ad flavum glos. Cum pes mori, omnes caculaes attrahendam rusticus, bi-color.",
        author: "ANN MCMILLAN",
        role: "Client",
        image: "./assets/images/janeLee-aboutUs.jpg"
    },
    {
        quote: "Classis de salvus cursus, convertam galatae! Terror peregrinationes, tanquam audax cedrium. Cum luna prarere, omnes cannabises resuscitabo.",
        author: "PATRICK GOODMAN",
        role: "Client",
        image: "./assets/images/jamesPeterson-aboutUs.jpg"
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

function autoSlide(container, items, currentIndex, itemsPerPage, renderItem, intervalTime) {
    // Renderizar los elementos iniciales
    renderItems(container, items, currentIndex, itemsPerPage, renderItem);

    // Configurar el intervalo para avanzar automáticamente
    setInterval(() => {
        currentIndex = nextSlide(container, items, currentIndex, itemsPerPage, renderItem);
    }, intervalTime);
}


// FUNCIONES ESPECIFICAS
// home
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

    sections[0].parentElement.prepend(prevButton);
    sections[0].parentElement.prepend(nextButton);

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

    const contenedorGeneralFilas = document.createElement("div");
    contenedorGeneralFilas.classList.add("column", "w-80");

    const titulo = document.createElement("h2");
    titulo.classList.add("text-151515");
    titulo.textContent = "Trending Products";
    contenedorGeneralFilas.prepend(titulo);

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
        h4.classList.add("text-center", "text-151515", "title-articulo-trending-products");
        h4.textContent = producto.nombre;

        divInfo.appendChild(h4);

        if (producto.precioAnterior) {
            const divPrecios = document.createElement("div");
            divPrecios.classList.add("cont-center", "cont-precios");

            const precioAnterior = document.createElement("p");
            precioAnterior.classList.add("precio-tachado");
            precioAnterior.textContent = `$${producto.precioAnterior}.00`;

            const precio = document.createElement("p");
            precio.classList.add("text-center", "text-blue", "text-bold");
            precio.textContent = `$${producto.precio}.00`;

            divPrecios.appendChild(precioAnterior);
            divPrecios.appendChild(precio);
            divInfo.appendChild(divPrecios);
        } else {
            const precio = document.createElement("p");
            precio.classList.add("text-center", "text-blue", "text-bold");
            precio.textContent = `$${producto.precio}.00`;
            divInfo.appendChild(precio);
        }

        article.appendChild(divInfo);

        const divHoverIcons = document.createElement("div");
        divHoverIcons.classList.add("cont-center", "hover-icons");

        const divIcon1 = document.createElement("div");
        divIcon1.classList.add("bg-white", "text-center", "cont-center", "icon-circle-trendingProducts");
        const a1 = document.createElement("a");
        a1.classList.add("cont-center");
        a1.href = "single-product.html";
        const imgLupa = document.createElement("img");
        imgLupa.src = "assets/images/lupa.png";
        imgLupa.alt = "Lupa";
        a1.appendChild(imgLupa);
        divIcon1.appendChild(a1);

        const divIcon2 = document.createElement("div");
        divIcon2.classList.add("bg-white", "text-center", "cont-center", "icon-circle2-trendingProducts");
        const a2 = document.createElement("a");
        a2.classList.add("cont-center");
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

    contenedorGeneralFilas.appendChild(contenedorFila1);
    contenedorGeneralFilas.appendChild(contenedorFila2);

    section.appendChild(contenedorGeneralFilas);
}

function portfolio() { // portfolio (home)
    const portfolioSection = document.querySelector(".portfolio");

    const cont_flexible_portfolio = document.createElement("div");
    cont_flexible_portfolio.classList.add("cont-center");

    const portfolioContainer = document.createElement("article");
    portfolioContainer.classList.add("parent", "w-80");

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
    cont_flexible_portfolio.appendChild(portfolioContainer);
    portfolioSection.appendChild(cont_flexible_portfolio);
}

function renderBlog(container, blog) { // blog (home)
    const blogCard = document.createElement('article');
    blogCard.className = 'blog-card';

    const figure = document.createElement('figure');
    const link = document.createElement('a');
    link.href = 'blog-post.html';
    const img = document.createElement('img');
    img.src = blog.imgSrc;
    img.alt = 'Blog Image';
    link.appendChild(img);
    figure.appendChild(link);

    const link_title = document.createElement('a');
    link_title.href = 'blog-post.html';
    link_title.classList.add('text-151515');
    link_title.style.textDecoration = 'none';
    const h3 = document.createElement('h3');
    h3.textContent = blog.title;
    link_title.appendChild(h3);

    const p = document.createElement('p');
    p.classList.add('text-777777');
    p.textContent = blog.date;

    blogCard.appendChild(figure);
    blogCard.appendChild(link_title);
    blogCard.appendChild(p);

    container.appendChild(blogCard);
}
let blogCurrentIndex = 0;
const blogContainer = document.querySelector('#blog-contenedor');
const blogsPerPage = 4;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
if (prev && next) { // si le saco el if no me funciona. Me va a decir que en las demas paginas no exste y por eso me va a tirar error en la consola
    prev.addEventListener('click', () => {
        blogCurrentIndex = prevSlide(blogContainer, blogs, blogCurrentIndex, blogsPerPage, renderBlog);
    });
    next.addEventListener('click', () => {
        blogCurrentIndex = nextSlide(blogContainer, blogs, blogCurrentIndex, blogsPerPage, renderBlog);
    });
}
if (blogContainer) {
    autoSlide(blogContainer, blogs, blogCurrentIndex, blogsPerPage, renderBlog, 5000); // 5000 ms = 5 segundos
}

// about us
function navFewWords() { // few words
    const tabs = document.querySelectorAll('.tabs .tab-item');
    const tabPanes = document.querySelectorAll('.tab-content .tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');

            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            // Show the corresponding tab pane
            const tabPane = document.getElementById(tab.getAttribute('data-tab'));
            tabPane.classList.add('active');
        });
    });
}

function renderHistoryCard(container, card) { // our history
    const article = document.createElement('article');
    article.classList.add('card');

    const h3 = document.createElement('h3');
    h3.classList.add('text-center', 'text-151515');
    h3.textContent = card.title;

    const p = document.createElement('p');
    p.classList.add('text-center', 'text-777777');
    p.textContent = card.description;

    article.appendChild(h3);
    article.appendChild(p);
    container.appendChild(article);
}
const historyContainer = document.querySelector('.history-cards');
const prevButton = document.querySelector('.prev-ourHistory');
const nextButton = document.querySelector('.next-ourHistory');
const cardsPerPage = 4;
let currentIndex = 0;
if (historyContainer && prevButton && nextButton) {  // si le saco el if no me funciona. Me va a decir que en las demas paginas no exste y por eso me va a tirar error en la consola
    prevButton.addEventListener('click', () => {
        currentIndex = prevSlide(historyContainer, historyCards, currentIndex, cardsPerPage, renderHistoryCard);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = nextSlide(historyContainer, historyCards, currentIndex, cardsPerPage, renderHistoryCard);
    });
}

function renderTeamMember(container, member) { // our team
    const article = document.createElement('article');
    article.classList.add('team-member');

    const photoDiv = document.createElement('div');
    photoDiv.classList.add('cont-team-photo');
    const img = document.createElement('img');
    img.src = member.image;
    img.alt = member.name;
    img.classList.add('team-photo');
    photoDiv.appendChild(img);

    const h3 = document.createElement('h3');
    h3.classList.add('team-member-name', 'text-center');
    const link = document.createElement('a');
    link.classList.add('text-151515');
    link.href = '#';
    const span = document.createElement('span');
    span.classList.add('team-member-name-span');
    span.textContent = member.name;
    link.appendChild(span);
    h3.appendChild(link);

    const p = document.createElement('p');
    p.classList.add('text-center', 'text-777777');
    p.textContent = member.description;

    const socialLinksDiv = document.createElement('div');
    socialLinksDiv.classList.add('social-links', 'flex', 'justify-content-center');
    for (const [platform, url] of Object.entries(member.socialLinks)) { // Object.entries() devuelve un array con los pares clave-valor de un objeto. Es decr que convierte al objeto en un array
        const a = document.createElement('a');
        a.classList.add('text-151515');
        a.href = url;
        switch (platform) {
            case 'facebook':
                a.innerHTML = '&#xf09a;'; // FontAwesome icon for Facebook
                break;
            case 'twitter':
                a.innerHTML = '&#xf099;'; // FontAwesome icon for Twitter
                break;
            case 'instagram':
                a.innerHTML = '&#xf16d;'; // FontAwesome icon for Instagram
                break;
            case 'email':
                a.innerHTML = '&#xf0e0;'; // FontAwesome icon for Email
                break;
        }
        socialLinksDiv.appendChild(a);
    }

    article.appendChild(photoDiv);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(socialLinksDiv);
    container.appendChild(article);
}
const teamContainer = document.querySelector('.our-team-aboutUs .contenedorOurTeam');
const prevSpan = document.querySelector('.prev-ourTeam');
const nextSpan = document.querySelector('.next-ourTeam');

// Dividir los miembros del equipo en dos grupos
const firstGroup = teamMembers.slice(0, 3); // Primeros 3 miembros
const secondGroup = teamMembers.slice(3);  // Últimos 3 miembros

// Función para renderizar un grupo de miembros
function renderTeamMembers(container, members) {
    container.innerHTML = ''; // Limpiar el contenedor
    members.forEach(member => {
        renderTeamMember(container, member); // Reutilizar la función renderTeamMember
    });
}
const membersPerPage = 3; // Mostrar siempre 3 miembros
let currentTeamIndex = 0;

if (teamContainer) {
    prevSpan.addEventListener('click', () => {
        renderTeamMembers(teamContainer, firstGroup);
    });
    
    nextSpan.addEventListener('click', () => {
        renderTeamMembers(teamContainer, secondGroup);
    });
    autoSlide(teamContainer, teamMembers, currentTeamIndex, membersPerPage, renderTeamMember, 5000);
}


function animateNumbers(element, start, end, duration) { // animate numbers
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const progress = currentTime - startTime;
        const increment = Math.min(progress / duration, 1);
        element.textContent = Math.floor(increment * (end - start) + start);
        if (progress < duration) {
            requestAnimationFrame(animation);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(animation);
}

function renderTestimonial(container, testimonial) { // testimonials
    const article = document.createElement('article');
    article.classList.add('testimonial', 'bg-white');

    const quoteP = document.createElement('p');
    quoteP.classList.add('cont-center', 'text-center', 'quote');
    article.appendChild(quoteP);

    const blockquote = document.createElement('blockquote');
    blockquote.classList.add('text-777777');
    const textP = document.createElement('p');
    textP.classList.add('text-center');
    textP.textContent = testimonial.quote;
    blockquote.appendChild(textP);
    article.appendChild(blockquote);

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author', 'cont-center');
    const img = document.createElement('img');
    img.src = testimonial.image;
    img.alt = testimonial.author;
    authorDiv.appendChild(img);

    const authorInfoDiv = document.createElement('div');
    authorInfoDiv.classList.add('author-info');
    const nameP = document.createElement('p');
    nameP.classList.add('name', 'text-151515');
    nameP.textContent = testimonial.author;
    const roleP = document.createElement('p');
    roleP.classList.add('role');
    roleP.textContent = testimonial.role;
    authorInfoDiv.appendChild(nameP);
    authorInfoDiv.appendChild(roleP);

    authorDiv.appendChild(authorInfoDiv);
    article.appendChild(authorDiv);

    container.appendChild(article);
}
const testimonialsContainer = document.querySelector('.testimonials-wrapper');
const prevButtonTestimonials = document.querySelector('.prev-testimonials');
const nextButtonTestimonials = document.querySelector('.next-testimonials');
const testimonialsPerPage = 2;
let currentTestimonialIndex = 0;
if (testimonialsContainer && prevButtonTestimonials && nextButtonTestimonials) {
    prevButtonTestimonials.addEventListener('click', () => {
        currentTestimonialIndex = prevSlide(testimonialsContainer, testimonials, currentTestimonialIndex, testimonialsPerPage, renderTestimonial);
    });

    nextButtonTestimonials.addEventListener('click', () => {
        currentTestimonialIndex = nextSlide(testimonialsContainer, testimonials, currentTestimonialIndex, testimonialsPerPage, renderTestimonial);
    });
}


// LLAMADAS A LAS FUNCIONES
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-lista-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    }); // todo esto es para el menu deplegable del navbar en responsive

    if (document.querySelector("#carousel-section")) { // carousel
        carousel_section('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
    }

    if (document.querySelector("#fila1-categories") && document.querySelector("#fila2-categories")) { // categories
        createCategories(categoriesData);
    }

    if (document.querySelector("#trending-products-section")) { // trending products
        trendingProducts();
    }

    if (document.querySelector(".portfolio")) { // portfolio
        portfolio();
    }

    if (document.querySelector("#blog-contenedor")) { // contenido de blogs
        renderItems(blogContainer, blogs, blogCurrentIndex, blogsPerPage, renderBlog);
    }

    if (document.querySelector('.tabs')) { // few words
        navFewWords();
    }

    if (document.querySelector('.history-cards')) { // our history
        renderItems(historyContainer, historyCards, currentIndex, cardsPerPage, renderHistoryCard);

    }

    if (document.querySelector('.our-team-aboutUs .contenedorOurTeam')) { // our team
        // renderItems(teamContainer, teamMembers, currentTeamIndex, membersPerPage, renderTeamMember);
        renderTeamMembers(teamContainer, firstGroup);
    }

    

    if (document.querySelector('.stat-number-1')) { // animate numbers
        const stats = [
            { selector: '.stat-number-1', end: 245 },
            { selector: '.stat-number-2', end: 382 },
            { selector: '.stat-number-3', end: 1267 },
            { selector: '.stat-number-4', end: 474 }
        ];

        stats.forEach(stat => {
            const element = document.querySelector(stat.selector);
            if (element) {
                animateNumbers(element, 0, stat.end, 1000);
            }
        });
    }

    if (document.querySelector('.testimonials-wrapper')) { // testimonials
        renderItems(testimonialsContainer, testimonials, currentTestimonialIndex, testimonialsPerPage, renderTestimonial);
    }
});


// VALIDACIONES
// FOOTER
// Validación del formulario
const emailInput = document.querySelector('form input[type="email"]');
const form = emailInput.closest('form');
const errorMessage = document.createElement('span');
errorMessage.classList.add('error-message');
form.appendChild(errorMessage);

const successMessage = document.createElement('div');
successMessage.classList.add('success-message');
successMessage.textContent = 'Successfully sent!';
form.appendChild(successMessage);

emailInput.addEventListener('focus', () => {
    emailInput.placeholder = '';
    emailInput.setCustomValidity('');
    form.classList.remove('invalid');
});

emailInput.addEventListener('blur', () => {
    emailInput.placeholder = 'Enter your e-mail';
    validateEmail();
});

form.addEventListener('submit', (event) => {
    if (!validateEmail()) {
        event.preventDefault();
    } else {
        form.classList.add('success');
    }
});

function validateEmail() {
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        emailInput.setCustomValidity('The text field is required.');
        errorMessage.textContent = 'The text field is required.';
        form.classList.add('invalid');
        return false;
    } else if (!emailPattern.test(emailValue)) {
        emailInput.setCustomValidity('The email is not a valid email.');
        errorMessage.textContent = 'The email is not a valid email.';
        form.classList.add('invalid');
        return false;
    } else {
        emailInput.setCustomValidity('');
        form.classList.remove('invalid');
        return true;
    }
}
//formularios checkout
