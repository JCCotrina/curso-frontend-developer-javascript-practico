const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuFriesIcon = document.querySelector('.menu');
const navShoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');

navBarEmail.addEventListener("click", toggleDesktopMenu);
menuFriesIcon.addEventListener("click", toggleMobileMenu);
navShoppingCar.addEventListener("click", toggleShoppingCar);

function toggleDesktopMenu(){

    let isActiveShoppingMenu = !shoppingMenu.classList.contains('inactive');

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
    let isActiveDesktopMenu = !desktopMenu.classList.contains('inactive');

    if (isActiveDesktopMenu) {
        // desktopMenu.classList.toggle('inactive');
        desktopMenu.classList.add('inactive');
    }

    shoppingMenu.classList.toggle('inactive');
}