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


class Slider {
    constructor(containerSelector, data, renderItem, itemsPerPage = 1) {
        this.container = document.querySelector(containerSelector);
        this.data = data;
        this.renderItem = renderItem;
        this.itemsPerPage = itemsPerPage;
        this.currentIndex = 0;

        if (!this.container || data.length === 0) return;

        // ❌ Ya no llamamos a render() automáticamente aquí
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
            container.className = itemData.containerClass;

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






if (document.querySelector("#carousel-section")) {
    new SingleItemSlider('.carousel-section, .carousel2-section, .carousel3-section', carouselData);
}