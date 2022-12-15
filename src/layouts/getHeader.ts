export function getHeader() {
    const header: HTMLElement = document.body.appendChild(document.createElement('header'));
    header.classList.add('header');

    const logo: HTMLAnchorElement = header.appendChild(document.createElement('a'));
    logo.classList.add('logo');
    logo.href = '../index.html';
    logo.textContent = 'Online Store';

    const cartTotal: HTMLDivElement = header.appendChild(document.createElement('div'));
    cartTotal.classList.add('cart-total');
    const cartTotalText: HTMLSpanElement = cartTotal.appendChild(document.createElement('span'));
    cartTotalText.textContent = 'Cart total: ';
    cartTotal.textContent = '';

    const cart: HTMLDivElement = header.appendChild(document.createElement('div'));
    cart.classList.add('cart');

    const productsInCart: HTMLDivElement = cart.appendChild(document.createElement('div'));
    productsInCart.classList.add('products-in-cart');
    productsInCart.textContent = '';
}
