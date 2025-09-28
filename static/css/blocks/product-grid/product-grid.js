import { addProductToBasket, deleteProduct } from '../basket-window/basket-window.js';

/* заполнение карточек товара по шаблону */

function Product(name, price, sale, img, id, feature) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.sale = sale;
    this.img = img;
    this.feature = feature;
}

let gridProducts = [
    { 
        id: 1,
        img: "static/pic/card/products/1.svg",
        name: "Antminer L7 8800 Mh/s", 
        price: "615 000", 
        sale: "",
        feature: "хит",
    },
    { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
    { 
        id: 3,
        img: "static/pic/card/products/3.svg",
        name: "Whatsminer M3x 12.5 Th/...", 
        price: "14 000", 
        sale: "",
        feature: "new"

    },
    {
        id: 4,
        img: "static/pic/card/products/4.svg",
        name: "Antminer Z15e 200 ksol", 
        price: "290 000", 
        sale: "325 000 ₽",
        feature: "sale"
    },
    { 
        id: 5,
        img: "static/pic/card/products/5.svg",
        name: "Innosilicon A11 1500 Mh/s...", 
        price: "173 000", 
        sale: "",
        feature: "хит"
    },
      { 
        id: 5,
        img: "static/pic/card/products/5.svg",
        name: "Innosilicon A11 1500 Mh/s...", 
        price: "173 000", 
        sale: "",
        feature: "хит"
    },
    {
        id: 4,
        img: "static/pic/card/products/4.svg",
        name: "Antminer Z15e 200 ksol", 
        price: "290 000", 
        sale: "325 000 ₽",
        feature: "sale"
    },
     { 
        id: 3,
        img: "static/pic/card/products/3.svg",
        name: "Whatsminer M3x 12.5 Th/...", 
        price: "14 000", 
        sale: "",
        feature: "new"

    },
    { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
     { 
        id: 1,
        img: "static/pic/card/products/1.svg",
        name: "Antminer L7 8800 Mh/s", 
        price: "615 000", 
        sale: "",
        feature: "хит"
    },
     { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
     { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
     { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
     { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
     { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
     { 
        id: 2,
        img: "static/pic/card/products/2.svg",
        name: "Antminer S19j pro 110 Th/s", 
        price: "245 000", 
        sale: "315 000 ₽",
        feature: "sale"
    },
     {
        id: 4,
        img: "static/pic/card/products/4.svg",
        name: "Antminer Z15e 200 ksol", 
        price: "290 000", 
        sale: "325 000 ₽",
        feature: "sale"
    },
     {
        id: 4,
        img: "static/pic/card/products/4.svg",
        name: "Antminer Z15e 200 ksol", 
        price: "290 000", 
        sale: "325 000 ₽",
        feature: "sale"
    },
     {
        id: 4,
        img: "static/pic/card/products/4.svg",
        name: "Antminer Z15e 200 ksol", 
        price: "290 000", 
        sale: "325 000 ₽",
        feature: "sale"
    },
     {
        id: 4,
        img: "static/pic/card/products/4.svg",
        name: "Antminer Z15e 200 ksol", 
        price: "290 000", 
        sale: "325 000 ₽",
        feature: "sale"
    },
];

const templateProductItem = document.getElementById('template-product-card');
const templateContent = templateProductItem.content;
const catalog = document.getElementById('product-grid_list');

function createProductCard(product){
    const productCard = templateContent.cloneNode(true);
    const productFeature = productCard.querySelector('.card_feature-p');
    const productImage = productCard.querySelector('.card_img');
    const productName = productCard.querySelector('.card_p');
    const productPrice= productCard.querySelector('.card_price-p');
    const productSale= productCard.querySelector('.card_sale');
    const cartButton = productCard.querySelector('.card_div-basket');
    const productBasketImg = productCard.querySelector('.card_icon-basket');
    let isInBasket = false;
    cartButton.addEventListener('click', () =>{ 
        if (isInBasket){
            deleteProduct(product.id);
            productBasketImg.src = './static/pic/navigation/basket.svg';
            cartButton.classList.remove('card_div-basket--active');
        }
        else{
            addProductToBasket(product);
            productBasketImg.src = './static/pic/basket-window/basket-active.svg';
            cartButton.classList.add('card_div-basket--active');
        }  
        isInBasket = !isInBasket;      
    });
    productFeature.textContent = product.feature;
    productImage.src = product.img;
    productImage.alt = product.name;
    productName.textContent = product.name;
    productPrice.textContent = product.price + ' ₽';
    productSale.textContent = product.sale;
    return productCard;
}

gridProducts.forEach(function(product) {
    const data = {
        id: product.id,
        img: product.img,
        name: product.name,
        price: product.price,
        sale: product.sale,
        feature: product.feature,
        amount: 1,
    }
    const productCard = createProductCard(data);

    catalog.appendChild(productCard);
});




let scrollPosition = 0;
const productGrid = document.getElementById('product-grid_list');
const pointScroll = document.getElementById('points');
const nextScroll = document.querySelector('.product-grid_arrow-right');
const lastScroll = document.querySelector('.product-grid_arrow-left');
const slides = productGrid.children;
let gap = 20

let currentSlide = 0;
let slideToShow = 5;

 
// точки навигации
function createDots() {
    const totalSlides = Math.ceil(slides.length / slideToShow)

    for (let i = 0; i < totalSlides; i++){
        const dot = document.createElement('div');
        dot.className = "point"
        if (i === 0) dot.classList.add('point--active');

        dot.addEventListener('click', () => {
            goToSlide(i);
        })

        pointScroll.appendChild(dot);
    }
}


function goToSlide(slideIndex) {
    const totalSlides = Math.ceil(slides.length / slideToShow)

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    else if (slideIndex < 0){
        slideIndex = totalSlides - 1;
    }

    currentSlide = slideIndex;
    
    const scrollAmount = currentSlide * (280 + gap) * slideToShow;
    productGrid.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.point');
    dots.forEach((dot, index) =>{
        dot.classList.toggle('point--active', index === currentSlide);
    });
};

function initSlider() {
    createDots();

    lastScroll.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    nextScroll.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
}
document.addEventListener('DOMContentLoaded', initSlider);
