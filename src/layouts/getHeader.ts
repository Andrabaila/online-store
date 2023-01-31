import { query } from '../data/query';

export function getHeader() {
    if (document.querySelector('header')) {
        return;
    }
    const header: HTMLElement = document.body.appendChild(document.createElement('header'));
    header.classList.add('header');

    const logo: HTMLAnchorElement = header.appendChild(document.createElement('a'));
    logo.classList.add('header__logo');
    logo.href = '../';
    logo.addEventListener('click', () => {
        query.splice(0, query.length);
        localStorage.removeItem('query-andrabaila');
        const sortField = document.querySelector('.main__item_options-sort');
        if (sortField) {
            if (sortField.firstChild instanceof HTMLOptionElement) {
                sortField.firstChild.selected = true;
            }
        }
    });
    const logoHeader = logo.appendChild(document.createElement('h1'));
    logoHeader.classList.add('logo');
    logoHeader.textContent = 'Online Store';

    const cartTotal: HTMLDivElement = header.appendChild(document.createElement('div'));
    cartTotal.classList.add('sum-total');

    const cartLink: HTMLAnchorElement = header.appendChild(document.createElement('a'));
    cartLink.classList.add('header__cart-link');
    cartLink.href = '../#/cart';

    const cartIcon: HTMLDivElement = cartLink.appendChild(document.createElement('div'));
    cartIcon.classList.add('cart');

    const productsInCart: HTMLDivElement = cartIcon.appendChild(document.createElement('div'));
    productsInCart.classList.add('products-in-cart');
}
