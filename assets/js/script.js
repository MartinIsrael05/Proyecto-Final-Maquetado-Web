// ==============================
// DATOS
// ==============================

// Carousel (home)
const carouselData = [
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
        containerClass: 'flex justify-content-center column cont-carousel',
        titleClass: 'text-grey title-carousel2Y3',
        title: ['<span>Quality</span>', '<span class="title-carousel-span2">Decor</span>'],
        paragraphClass: 'carousel2-content-p',
        paragraph: 'Choose anything you need from a wide range of impressive home decor solutions.',
        linkHref: 'grid-shop.html',
        linkClass: 'bg-grey text-center text-white carousel2-content-a',
        linkText: 'Shop Now'
    },
    {
        containerClass: 'flex justify-content-center column cont-carousel',
        titleClass: 'text-grey title-carousel2Y3',
        title: ['<span>Impressive</span>', '<span class="title-carousel-span2">Lighting</span>'],
        paragraphClass: 'carousel3-content-p',
        paragraph: 'Improve your home’s lighting with hundreds of products available at Sofa.',
        linkHref: 'grid-shop.html',
        linkClass: 'bg-grey text-center text-white carousel3-content-a',
        linkText: 'Shop Now'
    }
];

// Categorías (home)
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

// Trending Products (home)
const productos = [
    { nombre: "Garden Table", imagen: "assets/images/producto1.png", precio: 23, precioAnterior: 30, etiqueta: "SALE" },
    { nombre: "Club Chair", imagen: "assets/images/producto2.png", precio: 13, etiqueta: "NEW" },
    { nombre: "Pendant Lamp", imagen: "assets/images/producto3.png", precio: 17 },
    { nombre: "Dark Grey Club Chair", imagen: "assets/images/producto4.png", precio: 14, etiqueta: "NEW" },
    { nombre: "Table Lamp", imagen: "assets/images/producto5.png", precio: 11, etiqueta: "NEW" },
    { nombre: "Orange Stacking Chair", imagen: "assets/images/producto6.png", precio: 15 },
    { nombre: "Floor Lamp", imagen: "assets/images/producto7.png", precio: 22, precioAnterior: 32, etiqueta: "SALE" },
    { nombre: "White Chair", imagen: "assets/images/producto8.png", precio: 10 }
];

// Portfolio (home)
const portfolioItems = [ // portfolio
    { src: "assets/images/portfolio1.jpg", title: "SUNSHINE RESTAURANT", category: "DECOR" },
    { src: "assets/images/portfolio2.jpg", title: "QUADRO HOTEL", category: "FURNITURE" },
    { src: "assets/images/portfolio3.jpg", title: "U-STYLE FASHION HOUSE", category: "DECOR" },
    { src: "assets/images/portfolio4.jpg", title: "FLASH CAFE", category: "FURNITURE" },
    { src: "assets/images/portfolio5.jpg", title: "NEW YORK PUBLIC LIBRARY", category: "DECOR" },
    { src: "assets/images/portfolio6.jpg", title: "Q-BIZ COWORKING", category: "FURNITURE" },
    { src: "assets/images/portfolio7.jpg", title: "MONROE’S BAR", category: "DECOR" }
];

// Blogs (home)
const blogs = [
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




/* ==============================
 CLASES BASE DE SLIDER
 ==============================
*/
class Slider {
    constructor(containerSelector, data, renderItem, itemsPerPage = 1, autoTime = 5000) {
        this.container = document.querySelector(containerSelector);
        this.data = data;
        this.renderItem = renderItem;
        this.itemsPerPage = itemsPerPage;
        this.currentIndex = 0;
        this.autoTime = autoTime;
        this.autoID = null;

        if (!this.container || data.length === 0) return;

        this.addNavigation();
        this.startAutoSlide();
    }

    startAutoSlide() {
        if (!this.autoTime) return;
        clearInterval(this.autoID);
        this.autoID = setInterval(() => this.next(), this.autoTime);
    }

    stopAutoSlide() {
        clearInterval(this.autoID);
        this.autoID = null;
    }

    markInteraction() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }

    render() {
        this.container.innerHTML = '';
        for (let i = 0; i < this.itemsPerPage; i++) {
            const index = (this.currentIndex + i) % this.data.length;
            this.renderItem(this.container, this.data[index]);
        }
    }

    next() {
        this.markInteraction();
        this.currentIndex = (this.currentIndex + 1) % this.data.length;
        this.render();
    }

    prev() {
        this.markInteraction();
        this.currentIndex = (this.currentIndex - 1 + this.data.length) % this.data.length;
        this.render();
    }

    addNavigation() {
        const prevButton = document.createElement('button');
        prevButton.textContent = '❮';
        prevButton.className = 'carousel-button prev-button';
        prevButton.addEventListener('click', () => this.prev());

        const nextButton = document.createElement('button');
        nextButton.textContent = '❯';
        nextButton.className = 'carousel-button next-button';
        nextButton.addEventListener('click', () => this.next());

        this.container?.parentElement?.prepend(nextButton, prevButton);
    }
}


/* ==============================
 SLIDER DE 1 ELEMENTO
 ==============================
*/
class SingleItemSlider extends Slider {
    constructor(sectionSelectors, data) {
        const sections = Array.from(document.querySelectorAll(sectionSelectors));

        const renderItem = (section, itemData) => {
            section.innerHTML = '';

            const container = document.createElement('div');
            container.className = itemData.containerClass + ' h-100';

            const h1 = document.createElement('h1');
            h1.className = itemData.titleClass;
            h1.innerHTML = itemData.title.join(' ');
            container.appendChild(h1);

            const p = document.createElement('p');
            p.className = itemData.paragraphClass;
            p.textContent = itemData.paragraph;
            container.appendChild(p);

            const a = document.createElement('a');
            a.href = itemData.linkHref;
            a.className = itemData.linkClass;
            a.textContent = itemData.linkText;
            container.appendChild(a);

            section.appendChild(container);
        };

        const dummyDiv = document.createElement('div');
        document.body.appendChild(dummyDiv);

        super(sectionSelectors.split(',')[0], data, () => { }, 1);

        this.sections = sections;
        this.data = data;
        this.renderItem = renderItem;

        this.render();
    }

    render() {
        this.updateVisibleSlide();
        this.sections.forEach((section, index) => {
            if (this.data[index]) {
                this.renderItem(section, this.data[index]);
            }
        });
    }

    updateVisibleSlide() {
        if (!this.sections) return;
        this.sections.forEach((section, index) => {
            section.style.display = index === this.currentIndex ? 'block' : 'none';
        });
    }
}


/* ==============================
    SLIDER DE MULTIPLES ELEMENTOS)
    ==============================
*/
class MultiItemSlider extends Slider {
    constructor(containerSelector, data, renderItem, itemsPerPage = 4, step = 1) {
        super(containerSelector, data, renderItem, itemsPerPage);
        this.step = step;

        this.render();
        this.conectarControladores();
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = '';

        for (let i = 0; i < this.itemsPerPage; i++) {
            const index = (this.currentIndex + i) % this.data.length;
            this.renderItem(this.container, this.data[index], index);
        }
    }

    next() {
        this.currentIndex = (this.currentIndex + this.step) % this.data.length;
        this.render();
    }

    prev() {
        this.currentIndex = (this.currentIndex - this.step + this.data.length) % this.data.length;
        this.render();
    }

    conectarControladores() {
        const parent = this.container.closest('section') || this.container.parentElement;
        const prevBtn = parent.querySelector('[data-prev]');
        const nextBtn = parent.querySelector('[data-next]');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    }

    addNavigation() { }
}


/* ===================================================================
   BUILDERS · PORTFOLIO
   =================================================================== 
*/
class PortfolioGallery {

    constructor(sectionSel, items) {
        this.section = document.querySelector(sectionSel);
        if (!this.section || !items.length) return;

        this.items = items;
        this.buildModal();
        this.buildGrid();
    }

    buildModal() {
        this.dialog = document.createElement('dialog');
        this.dialog.className = 'portfolio-modal';
        this.imgBig = new Image();
        this.dialog.appendChild(this.imgBig);

        // cerrar al hacer clic en backdrop o ESC
        this.dialog.addEventListener('click', () => this.dialog.close());
        this.dialog.addEventListener('keydown', e => (e.key === 'Escape') && this.dialog.close());

        this.section.appendChild(this.dialog);
    }

    openModal(src, alt) {
        this.imgBig.src = src;
        this.imgBig.alt = alt;
        this.dialog.showModal();
    }

    buildGrid() {
        const wrapper = document.createElement('div');
        wrapper.className = 'cont-center';

        const grid = document.createElement('article');
        grid.className = 'parent w-80';

        this.items.forEach((item, idx) => {
            grid.appendChild(this.buildCard(item, idx));
        });

        wrapper.appendChild(grid);
        this.section.appendChild(wrapper);
    }

    buildCard(item, idx) {
        const art = document.createElement('article');
        art.className = `article-portfolio-${idx + 1}`;

        /* imagen */
        const fig = document.createElement('figure');
        const img = new Image();
        img.src = item.src;
        img.alt = `Imagen ${idx + 1} – Portfolio`;
        fig.appendChild(img);

        /* overlay */
        const overlay = document.createElement('div');
        overlay.className = 'cont-center text-white overlay';

        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        const h4 = document.createElement('h4');
        h4.textContent = item.category;

        /* icono lupa */
        const icon = document.createElement('div');
        icon.className = 'bg-white text-center icon-circle';
        const lupa = new Image();
        lupa.src = 'assets/images/lupa.png';
        lupa.alt = 'Abrir imagen';
        icon.appendChild(lupa);

        icon.addEventListener('click', e => {
            e.stopPropagation(); // evita que el click burbujee al overlay
            this.openModal(item.src, item.title);
        });

        overlay.append(h3, h4, icon);
        art.append(fig, overlay);
        return art;
    }
}




/* ===================================================================
   BUILDERS · ELEMENTOS REUTILIZABLES
   =================================================================== */
/* ---------- Categories (home) ---------- */
function createCategoryCard(category) {
    const article = document.createElement("article");
    article.classList.add("cont-center", "articulos-categories");

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.classList.add("img-articulo-categories");
    img.src = category.image;
    img.alt = category.altText;
    figure.appendChild(img);

    const textContainer = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.classList.add("title-articulo-categories");

    const link = document.createElement("a");
    link.href = category.link;
    link.classList.add("text-white");
    link.textContent = category.title;

    h3.appendChild(link);

    const p = document.createElement("p");
    p.classList.add("p-articulo-categories");
    p.textContent = category.description;

    textContainer.appendChild(h3);
    textContainer.appendChild(p);

    article.appendChild(figure);
    article.appendChild(textContainer);

    return article;
}

/* ---------- Blog (home) ---------- */
function renderBlogCard(container, blog) {
    const card = document.createElement('div');
    card.className = 'blog-card';

    const img = document.createElement('img');
    img.src = blog.imgSrc;
    img.alt = blog.title;

    const h3 = document.createElement('h3');
    h3.textContent = blog.title;

    const p = document.createElement('p');
    p.textContent = blog.date;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);

    container.appendChild(card);
}

/* ---------- Trending Products (home)---------- */
function buildBadge(label) {
    const span = document.createElement('span');
    span.className = label.toLowerCase();
    span.textContent = label;
    return span;
}
function buildFigure(src, alt) {
    const fig = document.createElement('figure');
    fig.className = 'cont-center';
    const img = new Image();
    img.src = src; img.alt = alt;
    fig.appendChild(img);
    return fig;
}
function buildPrice(precio, anterior) {
    const wrap = document.createElement('div');
    if (anterior) wrap.className = 'cont-center cont-precios';

    if (anterior) {
        const oldP = document.createElement('p');
        oldP.className = 'precio-tachado';
        oldP.textContent = `$${anterior}.00`;
        wrap.appendChild(oldP);
    }
    const newP = document.createElement('p');
    newP.className = 'text-center text-blue text-bold';
    newP.textContent = `$${precio}.00`;
    wrap.appendChild(newP);

    return wrap;
}
function buildHoverIcons() {
    const wrap = document.createElement('div');
    wrap.className = 'cont-center hover-icons';

    const cfg = [
        { cls: 'icon-circle-trendingProducts', src: 'assets/images/lupa.png', alt: 'Detalle', href: 'single-product.html' },
        { cls: 'icon-circle2-trendingProducts', src: 'assets/images/cart.png', alt: 'Carrito', href: 'single-product.html' }
    ];
    cfg.forEach(({ cls, src, alt, href }) => {
        const circle = document.createElement('div');
        circle.className = `bg-white text-center cont-center ${cls}`;

        const a = document.createElement('a');
        a.href = href;
        a.className = 'cont-center';

        const img = new Image();
        img.src = src; img.alt = alt;

        a.appendChild(img);
        circle.appendChild(a);
        wrap.appendChild(circle);
    });
    return wrap;
}
function buildProductCard(p) {
    const art = document.createElement('article');
    art.className = 'articulo-trending-products bg-f5 product-card';

    if (p.etiqueta) {
        const badgeBox = document.createElement('div');
        badgeBox.className = 'flex right';
        badgeBox.appendChild(buildBadge(p.etiqueta));
        art.appendChild(badgeBox);
    }
    art.appendChild(buildFigure(p.imagen, p.nombre));

    const info = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.className = 'text-center text-151515 title-articulo-trending-products';
    h4.textContent = p.nombre;
    info.appendChild(h4);
    info.appendChild(buildPrice(p.precio, p.precioAnterior));

    art.append(info, buildHoverIcons());
    return art;
}




/* ===================================================================
    RENDERERS DE SECCIÓN
   =================================================================== */
function createCategories(categories) {
    const fila1 = document.querySelector("#fila1-categories");
    const fila2 = document.querySelector("#fila2-categories");

    categories.forEach((category, index) => {
        const article = createCategoryCard(category);
        if (index < 3) {
            fila1.appendChild(article);
        } else {
            fila2.appendChild(article);
        }
    });
}

function renderTrendingProducts(prodArray, itemsPerRow = 4, sectionSel = '.trending-products-section') {
    const sec = document.querySelector(sectionSel);
    if (!sec) return;

    const wrap = document.createElement('div');
    wrap.className = 'column w-80';

    const h2 = document.createElement('h2');
    h2.className = 'text-151515';
    h2.textContent = 'Trending Products';
    wrap.appendChild(h2);

    let row = null;
    prodArray.forEach((p, i) => {
        if (i % itemsPerRow === 0) {
            row = document.createElement('article');
            row.className = 'cont-center contenedor-fila-trending-products';
            wrap.appendChild(row);
        }
        row.appendChild(buildProductCard(p));
    });

    sec.appendChild(wrap);
}




// ==============================
// EJECUCIONES INICIALES
// ==============================
//menu hamburguesa para responsive
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-lista-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//carousel (home)
if (document.querySelector("#carousel-section")) {
    new SingleItemSlider('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
}

//blog (home)
if (document.querySelector(".blog-container")) {
    new MultiItemSlider('.blog-container', blogs, renderBlogCard, 4, 1);
}

//categories (home)
if (document.querySelector("#fila1-categories") && document.querySelector("#fila2-categories")) {
    createCategories(categoriesData);
}

//trending products (home)
if (document.querySelector('.trending-products-section')) {
    renderTrendingProducts(productos, 4, '.trending-products-section');
}

//portfolio (home)
if (document.querySelector('.portfolio')) {
    new PortfolioGallery('.portfolio', portfolioItems);
}



/* -------------------------------------------------------------------
   HEADER SHRINK ON SCROLL (le tuve que preguntar a la IA porque nunca lo vimos)
   ------------------------------------------------------------------- */
function initHeaderShrink(thresholdPx = 80) {
    const header = document.querySelector('header');
    if (!header) return;

    const shrinkCls = 'header--shrink';
    let ticking = false;

    function handleScroll() {
        const mustShrink = window.scrollY > thresholdPx;
        header.classList.toggle(shrinkCls, mustShrink);
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
}

initHeaderShrink();
