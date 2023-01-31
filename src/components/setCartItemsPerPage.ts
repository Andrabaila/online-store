import { cart } from '../data/cart';
import { Product } from '../data/types';
import { getCartItems } from './getCartItems';

export function setCartItemsPerPage() {
    const maxItemsCount = Number(document.querySelector('.input-count_cart-list')?.childNodes[1].textContent);
    const cartSet = Array.from(new Set(cart));
    const pagesCount = Math.ceil(cartSet.length / maxItemsCount);
    const pageNumber = Number(
        document.querySelectorAll('.input-count')[document.querySelectorAll('.input-count').length - 1].childNodes[1]
            .textContent
    );
    const cartPagesArr: Product[][] = [];
    const pagesCountLabel = document.querySelector('.pagination__text_pages-count');
    let k = 0;
    for (let i = 0; i < pagesCount; i++) {
        cartPagesArr.push([]);
        for (let j = 0; j < maxItemsCount; j++) {
            if (k < cartSet.length) {
                cartPagesArr[i].push(cartSet[k]);
                k++;
            }
        }
    }
    const cartListHeader = document.querySelector('.cart-list__header');
    const prevListBody = document.querySelector('.cart-list');
    prevListBody?.remove();
    const listBody = getCartItems(cartPagesArr[pageNumber - 1]);
    if (cartListHeader) {
        cartListHeader.after(listBody);
    }
    if (pagesCountLabel instanceof HTMLDivElement) {
        pagesCountLabel.textContent = cartPagesArr.length.toString();
    }
}
