import { getCartPage } from '../pages/getCartPage';
import { cart } from '../data/cart';
import { updateCartSum } from '../features/updateCartSum';

export async function getHeader() {
    if (document.querySelector('header')) {
        return;
    }
    const header: HTMLElement = document.body.appendChild(document.createElement('header'));
    header.classList.add('header');

    const logo: HTMLAnchorElement = header.appendChild(document.createElement('a'));
    logo.classList.add('header__logo');
    logo.href = '../index.html';
    const logoHeader = logo.appendChild(document.createElement('h1'));
    logoHeader.classList.add('logo');
    logoHeader.textContent = 'Online Store';

    const cartTotal: HTMLDivElement = header.appendChild(document.createElement('div'));
    cartTotal.classList.add('sum-total');
    setTimeout(() => updateCartSum(), 500);

    const cartLink: HTMLAnchorElement = header.appendChild(document.createElement('a'));
    cartLink.classList.add('header__cart-link');
    cartLink.addEventListener('click', getCartPage);

    const cartIcon: HTMLDivElement = cartLink.appendChild(document.createElement('div'));
    cartIcon.classList.add('cart');

    const productsInCart: HTMLDivElement = cartIcon.appendChild(document.createElement('div'));
    productsInCart.classList.add('products-in-cart');
    setTimeout(() => (productsInCart.textContent = `${cart.length.toString()}`), 500);
}
