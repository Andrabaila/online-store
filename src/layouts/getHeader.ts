import { setHash } from '../features/setHash';

export function getHeader() {
    if (document.querySelector('header')) {
        return;
    }
    const header: HTMLElement = document.body.appendChild(document.createElement('header'));
    header.classList.add('header');

    const logo: HTMLAnchorElement = header.appendChild(document.createElement('a'));

    logo.classList.add('header__logo');
    logo.href = '#/';
    const logoHeader = logo.appendChild(document.createElement('h1'));
    logoHeader.classList.add('logo');
    logoHeader.textContent = 'Online Store';

    const cartTotal: HTMLDivElement = header.appendChild(document.createElement('div'));
    cartTotal.classList.add('sum-total');
    cartTotal.textContent = 'Cart total: $';

    const cartLink: HTMLAnchorElement = header.appendChild(document.createElement('a'));
    cartLink.classList.add('header__cart-link');
    cartLink.addEventListener('click', getCartPage);

    const cart: HTMLDivElement = cartLink.appendChild(document.createElement('div'));
    cart.classList.add('cart');
    cart.addEventListener('click', () => {
        setHash('/cart');
    });

    const productsInCart: HTMLDivElement = cart.appendChild(document.createElement('div'));
    productsInCart.classList.add('products-in-cart');
    productsInCart.textContent = '0';
}
