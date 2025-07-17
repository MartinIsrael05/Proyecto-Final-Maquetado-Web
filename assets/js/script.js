// ==============================
// DATOS DEL SITIO
// ==============================

// Carousel (home)
const carouselData = [
    { containerClass: 'cont-center column', titleClass: 'text-white text-center tituloCarrousel', title: ['Top-notch Furniture'], paragraphClass: 'text-center carousel-content-p', paragraph: 'Sofa Store provides the best furniture and accessories for homes and offices.', linkHref: 'grid-shop.html', linkClass: 'bg-white text-151515 carousel-content-a', linkText: 'Shop Now' },
    { containerClass: 'flex justify-content-center column cont-carousel', titleClass: 'text-grey title-carousel2Y3', title: ['<span>Quality</span>', '<span class="title-carousel-span2">Decor</span>'], paragraphClass: 'carousel2-content-p', paragraph: 'Choose anything you need from a wide range of impressive home decor solutions.', linkHref: 'grid-shop.html', linkClass: 'bg-grey text-center text-white carousel2-content-a', linkText: 'Shop Now' },
    { containerClass: 'flex justify-content-center column cont-carousel', titleClass: 'text-grey title-carousel2Y3', title: ['<span>Impressive</span>', '<span class="title-carousel-span2">Lighting</span>'], paragraphClass: 'carousel3-content-p', paragraph: 'Improve your home’s lighting with hundreds of products available at Sofa.', linkHref: 'grid-shop.html', linkClass: 'bg-grey text-center text-white carousel3-content-a', linkText: 'Shop Now' }
];

// Categorías (home)
const categoriesData = [
    { image: "assets/images/sillon.png", altText: "Sillón", title: "Living Room", description: "Sofas, coffee tables, couches", link: "#" },
    { image: "assets/images/cama.png", altText: "Cama", title: "Bedroom", description: "Beds, nightstands, dressers", link: "#" },
    { image: "assets/images/cajon.png", altText: "Cajón", title: "Dining Room", description: "Tables, chairs, cabinets", link: "#" },
    { image: "assets/images/bano.png", altText: "Baño", title: "Bathroom", description: "Vanities, mirrors, lighting", link: "#" },
    { image: "assets/images/lampara.png", altText: "Lámpara", title: "Decor & Furniture", description: "Cushions, wall art, drapery", link: "#" },
    { image: "assets/images/bebe.png", altText: "Bebé", title: "Kids Room", description: "Kids beds, trundlers, dressers", link: "#" }
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
const portfolioItems = [
    { src: "assets/images/portfolio1.jpg", title: "SUNSHINE RESTAURANT", category: "DECOR" },
    { src: "assets/images/portfolio2.jpg", title: "QUADRO HOTEL", category: "FURNITURE" },
    { src: "assets/images/portfolio3.jpg", title: "U-STYLE FASHION HOUSE", category: "DECOR" },
    { src: "assets/images/portfolio4.jpg", title: "FLASH CAFE", category: "FURNITURE" },
    { src: "assets/images/portfolio5.jpg", title: "NEW YORK PUBLIC LIBRARY", category: "DECOR" },
    { src: "assets/images/portfolio6.jpg", title: "Q-BIZ COWORKING", category: "FURNITURE" },
    { src: "assets/images/portfolio7.jpg", title: "MONROE’S BAR", category: "DECOR" },
];

// Blogs (home)
const blogs = [
    { imgSrc: 'assets/images/blog1.jpg', title: 'LED Lighting and Its Benefits for Homeowners', date: 'August 9, 2021' },
    { imgSrc: 'assets/images/blog2.jpg', title: 'What to Look for When Shopping for Chairs Online', date: 'August 9, 2021' },
    { imgSrc: 'assets/images/blog3.jpg', title: 'Ways to Decorate Your Home with the Color Red', date: 'August 9, 2021' },
    { imgSrc: 'assets/images/blog4.jpg', title: 'Top 20 Interior Home Decor Trends of 2021', date: 'August 9, 2021' },
    { imgSrc: 'assets/images/blog5.jpg', title: 'HOW TO CHOOSE FURNITURE FOR YOUR HOME', date: 'August 9, 2021' }
];

// Our History (about)
const ourHistoryData = [
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




// ==============================
// CLASES BASE SLIDER
// ==============================
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

    esResponsiveStyles() {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches) {
            // Responsive: solo carousel2 y carousel3
            this.data.forEach((item, idx) => {
                if (idx === 1 || idx === 2) {
                    item.containerClass = 'cont-center column';
                }
            });
        } else {
            // Desktop: restaurar clases originales
            this.data.forEach((item, idx) => {
                if (idx === 1 || idx === 2) {
                    item.containerClass = 'flex justify-content-center column cont-carousel';
                }
            });
        }
        this.render();
    }
}

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


// ==============================
// PORTFOLIO BUILDER
// ==============================
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

        const a = document.createElement('a');
        a.href = 'single-product.html';
        a.className = 'text-white';
        a.style.textDecoration = 'none';

        const h3 = document.createElement('h3');
        h3.textContent = item.title;
        a.appendChild(h3);
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

        overlay.append(a, h4, icon);
        art.append(fig, overlay);
        return art;
    }
}




// ==============================
// BUILDERS REUTILIZABLES
// ==============================
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

    // Enlace que envuelve la imagen
    const imageLink = document.createElement('a');
    imageLink.href = 'blog-post.html';
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = blog.imgSrc;
    img.alt = blog.title;
    figure.appendChild(img);
    imageLink.appendChild(figure);

    // Enlace que envuelve el título
    const titleLink = document.createElement('a');
    titleLink.style.textDecoration = 'none';
    titleLink.href = 'blog-post.html';
    const h3 = document.createElement('h3');
    h3.textContent = blog.title;
    titleLink.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = blog.date;

    // Ensamblar la tarjeta
    card.appendChild(imageLink);
    card.appendChild(titleLink);
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




// ==============================
// RENDERERS DE SECCIÓN
// ==============================
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

// =====================
// RENDER OUR HISTORY
// =====================
function buildHistoryCard(container, item) {
    const card = document.createElement('article');
    card.className = 'card';

    const h3 = document.createElement('h3');
    h3.className = 'text-center text-151515';
    h3.textContent = item.title;

    const p = document.createElement('p');
    p.className = 'text-center text-777777';
    p.textContent = item.description;

    card.append(h3, p);
    container.appendChild(card);
}

function isMobileHistory() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function getHistoryItemsPerPage() {
    return isMobileHistory() ? 1 : 4;
}

// =====================
// INICIALIZAR SLIDER DE HISTORIA
// =====================
let historySliderInstance;

function initHistorySlider() {
    const containerSelector = '.history-cards';
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Eliminar slider previo si existe
    if (historySliderInstance) {
        container.innerHTML = '';
        historySliderInstance = null;
    }

    historySliderInstance = new MultiItemSlider(
        containerSelector,
        ourHistoryData,
        buildHistoryCard,
        getHistoryItemsPerPage(),
        1 // step de a uno
    );

    // Conectar botones prev/next manualmente si no usas data-prev/data-next
    const parent = container.closest('section') || container.parentElement;
    const prevBtn = parent.querySelector('.prev-ourHistory');
    const nextBtn = parent.querySelector('.next-ourHistory');
    if (prevBtn) prevBtn.addEventListener('click', () => historySliderInstance.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => historySliderInstance.next());
}


// ==============================
// BLOG SLIDER RESPONSIVE
// ==============================
let blogSliderInstance;
let blogAutoSlide = null;

function isMobileBlog() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function startBlogAutoSlide() {
    if (!blogAutoSlide && isMobileBlog() && blogSliderInstance) {
        blogAutoSlide = setInterval(() => {
            blogSliderInstance.next();
        }, 4000); // o el tiempo que prefieras
    }
}

function stopBlogAutoSlide() {
    if (blogAutoSlide) {
        clearInterval(blogAutoSlide);
        blogAutoSlide = null;
    }
}

function initBlogSlider() {
    const containerSelector = '.blog-container';
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const itemsPerPage = isMobileBlog() ? 1 : 4;

    // Eliminar slider previo
    if (blogSliderInstance) {
        container.innerHTML = '';
        blogSliderInstance = null;
    }

    stopBlogAutoSlide();

    blogSliderInstance = new MultiItemSlider(containerSelector, blogs, renderBlogCard, itemsPerPage, 1);

    // Conectar dots de blog
    conectarDotsConSlider(blogSliderInstance, '.pagination-blog span');

    if (isMobileBlog()) {
        startBlogAutoSlide();
    }
}




// ==============================
// VALIDACIÓN REUTILIZABLE DE FORMULARIOS
// ==============================
function isEmailValid(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value.trim());
}

function isPhoneValid(value) {
    const regex = /^\d+$/;
    return regex.test(value.trim());
}

function showInputError(input, message) {
    const container = input.closest('.form-group') || input.parentElement;
    input.classList.add('input-invalid');

    let error = container.querySelector('.error-message');
    if (!error) {
        error = document.createElement('small');
        error.classList.add('error-message');
        container.insertBefore(error, input); // Mostrar sobre el input
    }

    const isFooter = input.closest('footer') !== null;
    error.style.color = isFooter ? '#fff' : '#f5543f';
    error.textContent = message;
    error.style.display = 'block';
    error.style.width = isFooter ? '100%' : 'auto'; // Ajustar ancho según el contexto
    error.style.height = isFooter ? '27%' : 'auto'; // Ajustar altura
}

function clearInputError(input) {
    input.classList.remove('input-invalid');
    const container = input.closest('.form-group') || input.parentElement;
    const error = container.querySelector('.error-message');
    if (error) {
        error.textContent = '';
        error.style.display = 'none';
    }
}

function validateInput(input) {
    const value = input.value.trim();
    const name = input.name.toLowerCase();
    clearInputError(input);

    if (!value) {
        showInputError(input, 'The field is required.');
        return false;
    }

    if (name.includes('email') && !isEmailValid(value)) {
        showInputError(input, 'The email is not a valid email.');
        return false;
    }

    if (name.includes('phone') && !isPhoneValid(value)) {
        showInputError(input, 'Only numbers are required.');
        return false;
    }

    return true;
}

function validateFormFields(form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="tel"]');
    let valid = true;
    inputs.forEach(input => {
        if (!validateInput(input)) valid = false;
    });
    return valid;
}

function applyValidation(form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="tel"]');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const isValid = validateFormFields(form);
        if (isValid) {
            const successEl = form.querySelector('.success-message');
            if (successEl) {
                successEl.style.display = 'block';
                setTimeout(() => {
                    successEl.style.display = 'none';
                    form.reset();
                }, 2000);
            } else {
                console.log('Formulario válido. Aquí podrías enviar los datos.');
                form.reset();
            }
        }
    });
}

// Aplicar validación una vez que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.form-validate').forEach(applyValidation);
});




// ==============================
// HEADER Y FUNCIONES DE INICIO
// ==============================
//menu hamburguesa para responsive
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-lista-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// HEADER SHRINK ON SCROLL (le tuve que preguntar a la IA porque nunca lo vimos)
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

// DARK/LIGHT MODE
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeIcon(newTheme);
}

function updateDarkModeIcon(theme) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    const icon = darkModeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Inicializar tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateDarkModeIcon(savedTheme);

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});




// ==============================
// FUNCIONALIDAD: Dots navegación responsive para carousel
// ==============================
function conectarDotsConSlider(sliderInstance, dotSelector, sectionUpdater = null) {
    const dots = document.querySelectorAll(dotSelector);
    if (!sliderInstance || dots.length !== sliderInstance.data.length) return;

    // Hacer clic en los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderInstance.currentIndex = index;
            sliderInstance.render();
        });
    });

    // Envolver el render original para actualizar visualmente los dots
    const originalRender = sliderInstance.render.bind(sliderInstance);
    sliderInstance.render = () => {
        originalRender();
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === sliderInstance.currentIndex);
        });

        if (sectionUpdater) sectionUpdater(); // solo si es necesario (ej: para el carousel de 3 secciones)
    };

    // Llamamos manualmente una vez al principio
    sliderInstance.render();
}

// Tabs para sección "A Few Words About Us"
function initTabNavigation(tabsSelector, panesSelector, activeClass = 'active') {
    const tabs = document.querySelectorAll(tabsSelector);
    const panes = document.querySelectorAll(panesSelector);

    if (!tabs.length || !panes.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove(activeClass));
            tab.classList.add(activeClass);

            panes.forEach(p => p.classList.remove(activeClass));
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add(activeClass);
        });
    });
}
initTabNavigation('.tabs .tab-item', '.tab-content .tab-pane');




// RENDER SECCIONES
//carousel (home)
let singleItemSliderInstance;
if (document.querySelector("#carousel-section")) {
    singleItemSliderInstance = new SingleItemSlider('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
    singleItemSliderInstance.esResponsiveStyles();
    conectarDotsConSlider(singleItemSliderInstance, '.pagination-carousel span', () => singleItemSliderInstance.updateVisibleSlide());
}

const mediaQueryCarousel = window.matchMedia('(max-width: 768px)');
mediaQueryCarousel.addEventListener('change', () => {
    if (singleItemSliderInstance) {
        singleItemSliderInstance.esResponsiveStyles();
    }
});

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

//blog (home)
if (document.querySelector(".blog-container")) {
    initBlogSlider();
}
const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', () => {
    initBlogSlider();
});


//our history (about-us)
if (document.querySelector('.history-cards')) {
    initHistorySlider();
    window.addEventListener('resize', () => {
        initHistorySlider();
    });
}