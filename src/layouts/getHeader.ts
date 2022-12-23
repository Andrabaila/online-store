import { getCartPage } from '../pages/getCartPage';

export function getHeader() {
    if (document.querySelector('header')) {
        return;
    }
    const header: HTMLElement = document.body.appendChild(document.createElement('header'));
    header.classList.add('header');

    const logo: HTMLAnchorElement = header.appendChild(document.createElement('a'));
    logo.classList.add('logo');
    logo.href = '../index.html';
    logo.textContent = 'Online Store';

    const cartTotal: HTMLDivElement = header.appendChild(document.createElement('div'));
    cartTotal.classList.add('sum-total');
    cartTotal.textContent = 'Cart total: $0';

    const cart: HTMLDivElement = header.appendChild(document.createElement('div'));
    cart.classList.add('cart');
    cart.addEventListener('click', getCartPage);

    const productsInCart: HTMLDivElement = cart.appendChild(document.createElement('div'));
    productsInCart.classList.add('products-in-cart');
    productsInCart.textContent = '0';
}
