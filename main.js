const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuFriesIcon = document.querySelector('.menu');
const navShoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navBarEmail.addEventListener("click", toggleDesktopMenu);
menuFriesIcon.addEventListener("click", toggleMobileMenu);
navShoppingCar.addEventListener("click", toggleShoppingCar);

function toggleDesktopMenu(){

    const isActiveShoppingMenu = !shoppingMenu.classList.contains('inactive');

    if (isActiveShoppingMenu){
        // shoppingMenu.classList.toggle('inactive');
        shoppingMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar(){
    const isActiveDesktopMenu = !desktopMenu.classList.contains('inactive');

    if (isActiveDesktopMenu) {
        // desktopMenu.classList.toggle('inactive');
        desktopMenu.classList.add('inactive');
    }

    shoppingMenu.classList.toggle('inactive');
}

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

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>

for (product of products) {

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", product.image);

    const productDetails = document.createElement("div");
    
    const priceProduct = document.createElement("p");
    priceProduct.innerText = "$"+ product.price;

    const nameProduct = document.createElement("p");
    nameProduct.innerText = product.name;

    productDetails.append(priceProduct, nameProduct);

    const figure = document.createElement("figure");

    const imageCart = document.createElement("img");
    imageCart.setAttribute("src", "./icons/bt_add_to_cart.svg   ");

    figure.append(imageCart);



    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    productInfo.append(productDetails, figure);

    productCard.append(imageProduct, productInfo);

    cardsContainer.appendChild(productCard);
    console.log(product);
}