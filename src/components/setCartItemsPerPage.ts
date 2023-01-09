import { cart } from '../data/cart';
import { Product } from '../data/types';
import { getCartItems } from './getCartItems';

export function setCartItemsPerPage() {
    const maxItemsCount = Number(document.querySelector('.input-count_cart-list')?.childNodes[1].textContent);
    const cartSet = Array.from(new Set(cart));
    const pagesCount = Math.ceil(cartSet.length / maxItemsCount);
    const cartPagesArr: Product[][] = [];
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
    const listBody = getCartItems(cartPagesArr[0]);
    if (cartListHeader) {
        cartListHeader.after(listBody);
    }

    console.log(cartPagesArr);
}
