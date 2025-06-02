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


class Slider {
    constructor(containerSelector, data, renderItem, itemsPerPage = 1) {
        this.container = document.querySelector(containerSelector);
        this.data = data;
        this.renderItem = renderItem;
        this.itemsPerPage = itemsPerPage;
        this.currentIndex = 0;

        if (!this.container || data.length === 0) return;

        this.addNavigation();
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
        this.currentIndex =
            (this.currentIndex - 1 + this.data.length) % this.data.length;
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

        this.container?.parentElement?.prepend(nextButton);
        this.container?.parentElement?.prepend(prevButton);
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

        // ⚠️ Creamos un dummy selector que no se usa
        const dummyDiv = document.createElement('div');
        document.body.appendChild(dummyDiv);

        // Llamamos al super con un selector "falso"
        super(sectionSelectors.split(',')[0], data, () => {}, 1);

        this.sections = sections;
        this.data = data;
        this.renderItem = renderItem;

        this.render(); // Recién ahora, con todo listo
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

    // Evitamos botones automáticos
    // addNavigation() {}  ver si esta bien (cuando lo comento sigue funcionando)
}


const renderBlogCard = (container, blog) => {
    const card = document.createElement('div');
    card.className = 'blog-card'; // asegurate de tener estilo para esto

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
};



if (document.querySelector("#carousel-section")) {
    new SingleItemSlider('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
}

if (document.querySelector(".blog-container")) {
    new MultiItemSlider('.blog-container', blogs, renderBlogCard, 4, 1);
}