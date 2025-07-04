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


// ==============================
// CLASES BASE DE SLIDER
// ==============================

class Slider {
    constructor(containerSelector, data, renderItem, itemsPerPage = 1, autoTime = 5000) {
        this.container     = document.querySelector(containerSelector);
        this.data          = data;
        this.renderItem    = renderItem;
        this.itemsPerPage  = itemsPerPage;
        this.currentIndex  = 0;
        this.autoTime      = autoTime;
        this.autoID        = null;
        this.interacted    = false;

        if (!this.container || data.length === 0) return;

        this.addNavigation();
        this.startAutoSlide();
    }

    // Auto-slide cada X milisegundos, solo si no hubo interacción del usuario
    startAutoSlide() {
        clearInterval(this.autoID);
        if (!this.interacted) {
            this.autoID = setInterval(() => this.next(), this.autoTime);
        }
    }

    stopAutoSlide() {
        clearInterval(this.autoID);
        this.autoID = null;
    }

    markInteraction() {
        this.interacted = true;
        this.stopAutoSlide();
    }

    render() {
        this.container.innerHTML = '';
        for (let i = 0; i < this.itemsPerPage; i++) {
            const index = (this.currentIndex + i) % this.data.length;
            this.renderItem(this.container, this.data[index]);
        }
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.data.length;
        this.render();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.data.length) % this.data.length;
        this.render();
    }

    // Crea botones prev y next internos (usado en SingleItemSlider)
    addNavigation() {
        const prevButton = document.createElement('button');
        prevButton.textContent = '❮';
        prevButton.className = 'carousel-button prev-button';
        prevButton.addEventListener('click', () => {
            this.markInteraction();
            this.prev();
        });

        const nextButton = document.createElement('button');
        nextButton.textContent = '❯';
        nextButton.className = 'carousel-button next-button';
        nextButton.addEventListener('click', () => {
            this.markInteraction();
            this.next();
        });

        this.container?.parentElement?.prepend(nextButton);
        this.container?.parentElement?.prepend(prevButton);
    }
}


// ==============================
// SLIDER DE 1 ELEMENTO (HERO)
// ==============================

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

        super(sectionSelectors.split(',')[0], data, () => {}, 1);

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


// ==============================
// SLIDER DE MULTIPLES ELEMENTOS (PRODUCTOS, BLOG, ETC.)
// ==============================

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

    // Este tipo de slider no genera botones internos
    addNavigation() {}
}


// ==============================
// FUNCIONES DE RENDER
// ==============================

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


// ==============================
// EJECUCIONES INICIALES
// ==============================

if (document.querySelector("#carousel-section")) {
    new SingleItemSlider('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
}

if (document.querySelector(".blog-container")) {
    new MultiItemSlider('.blog-container', blogs, renderBlogCard, 4, 1);
}

if (document.querySelector("#fila1-categories") && document.querySelector("#fila2-categories")) {
    createCategories(categoriesData);
}
