const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuFriesIcon = document.querySelector('.menu');
const navShoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');
const productDetailClose= document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


navBarEmail.addEventListener("click", toggleDesktopMenu);
menuFriesIcon.addEventListener("click", toggleMobileMenu);
navShoppingCar.addEventListener("click", toggleShoppingCar);
productDetailClose.addEventListener("click", closeProductDetail);

let products = []

products.push(
    {
        name: "Mouse",
        price: "30",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"}
)

products.push(
    {
        name: "Bike",
        price: "120",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
)

products.push(
    {
        name: "Television",
        price: "300",
        image: "https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40",
    }
)

function openProductDetail(){    

    const isShoppingMenuActive = !shoppingCartContainer.classList.contains('inactive');

    if (isShoppingMenuActive){
        shoppingCartContainer.classList.add('inactive');
    }
    
    productDetail.classList.remove('inactive');
}

function closeProductDetail(){

    productDetail.classList.add('inactive');
}
function toggleDesktopMenu(){

    const isActiveShoppingMenu = !shoppingCartContainer.classList.contains('inactive');

    if (isActiveShoppingMenu){
        // shoppingMenu.classList.toggle('inactive');
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    
    const isShoppingMenuActive = !shoppingCartContainer.classList.contains('inactive');

    if (isShoppingMenuActive){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetail();
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar(){

    const isDesktopMenuActive = !desktopMenu.classList.contains('inactive');
    const isMobileMenuActive = !mobileMenu.classList.contains('inactive');

    if (isDesktopMenuActive) {
        // desktopMenu.classList.toggle('inactive');
        desktopMenu.classList.add('inactive');
    }
    if (isMobileMenuActive){
        // shoppingMenu.classList.toggle('inactive');
        mobileMenu.classList.add('inactive');
    }

    closeProductDetail();
    shoppingCartContainer.classList.toggle('inactive');
}



function renderProducts(arr){

    for (const product of arr) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const imageProduct = document.createElement("img");
        imageProduct.setAttribute("src", product.image);
        
        imageProduct.addEventListener("click", openProductDetail);
    
        const productDetails = document.createElement("div");
        
        const priceProduct = document.createElement("p");
        priceProduct.innerText = "$"+ product.price;
    
        const nameProduct = document.createElement("p");
        nameProduct.innerText = product.name;
    
        productDetails.append(priceProduct, nameProduct);
    
        const figure = document.createElement("figure");
    
        const imageCart = document.createElement("img");
        imageCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        figure.appendChild(imageCart);
       
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        productInfo.append(productDetails, figure);
    
        productCard.append(imageProduct, productInfo);
    
        cardsContainer.appendChild(productCard);

    }
}

renderProducts(products);