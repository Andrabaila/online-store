import { cart } from '../data/cart';
import { Product } from '../data/types';

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
    console.log(cartPagesArr);
}
