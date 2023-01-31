import { UI } from '../data/UI';
import { getHtmlElement } from '../components/getHtmlElement';

export function getCartEmptyMain() {
    if (document.querySelector('.main_cart') instanceof HTMLElement) {
        document.querySelector('.main_cart')?.classList.add('main_cart-column');
        getHtmlElement({
            parent: '.main_cart',
            tag: 'h3',
            style: ['page-not-found__title'],
            content: UI.cartTitleEmpty,
        });
        getHtmlElement({
            parent: '.main_cart',
            tag: 'p',
            style: ['page-not-found__text'],
            content: UI.emptyCartMessage,
        });
    }
}
