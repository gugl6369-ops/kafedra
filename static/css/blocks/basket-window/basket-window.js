let basket = [];
const productList = document.querySelector('.basket-window_list');
const productTemplate = document.querySelector('#template-product-card-basket');
const productTemplateContent = productTemplate.content;
const basketQuanity = document.getElementById('basket-quantity');
const basketButton = document.getElementById('basket-button');
const newBasketButton = 0;
const basketWindow = document.getElementById('basket-window');
const basketClose = document.getElementById('close-window');
const basketOverlay = document.querySelector('.basket-window_back');
const basketOrder = document.querySelector('.basket-window_button');
let quanity = 0;



function clean() {
    basket = [];
    quanity = 0;
    basketQuanity.textContent = quanity;
    basketButton.style.setProperty('--content', `"${quanity}"`);
    reRender();
}

basketOrder.addEventListener('click', () =>{
    return clean();
})

function open() {
    basketWindow.classList.remove('basket-window--closed');
}

function close() {
    basketWindow.classList.add('basket-window--closed');
}

basketClose.addEventListener('click', () =>{
    close();
})

basketOverlay.addEventListener('click', () =>{
    close();
})

basketButton.addEventListener('click', () =>{
    open();
    
})

export function addProductToBasket(product){
    const isAdded = basket.find(p => p.id === product.id);
    quanity +=1;
    
    if (isAdded){
        isAdded.amount += 1;
        reRender();
    } 
    else{
        basket.push(product);
        productList.appendChild(createProductCard(product));
    }
    basketQuanity.textContent = quanity;
    basketButton.style.setProperty('--content', `"${quanity}"`);

}

function decreaseProduct(id){
    const product = basket.find(p=> p.id===id);
    if (product){
        quanity -= 1;
        basketQuanity.textContent = quanity;
        basketButton.style.setProperty('--content', `"${quanity}"`);
        if (product.amount > 1){
            product.amount -= 1;
            reRender();
        }
        else{
            deleteProduct(id);
        }
    }
}

export function deleteProduct(id){
    const product = basket.find(p=> p.id===id);
    if (product){
        quanity -= product.amount;
        basketQuanity.textContent = quanity;
        basketButton.style.setProperty('--content', `"${quanity}"`);
        basket = basket.filter(p => p.id !== id);
        reRender();
    }
}

function createProductCard(product){
    const productCard = productTemplateContent.cloneNode(true);
    const productImage = productCard.querySelector('.card-basket_img');
    const productName = productCard.querySelector('.card-basket_name');
    const productPrice = productCard.querySelector('.card-basket_price');
    const productUp = productCard.querySelector('.card-basket_arrow-up');
    const productDoun = productCard.querySelector('.card-basket_arrow-doun');
    const productQuanity = productCard.querySelector('.card-basket_product-quanity');
    const productDelete = productCard.querySelector('.card_basket_button');
    productImage.src = product.img;
    productImage.alt = product.name;
    productName.textContent = product.name;
    productPrice.textContent = product.price;
    productQuanity.textContent = product.amount + 'шт.';
    productUp.addEventListener('click', () => {
        addProductToBasket(product);   
    });
    productDoun.addEventListener('click', () => {
        decreaseProduct(product.id);   
    });
    productDelete.addEventListener('click', () => {
        deleteProduct(product.id);   
    });
    return productCard;
}



function reRender(){
    
    productList.innerHTML = '';
    basket.forEach(p => {
        productList.appendChild(createProductCard(p));
    })
}