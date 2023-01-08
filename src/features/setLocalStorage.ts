import { PROMO_CODES } from '../data/promo';
import { cart } from '../data/cart';

export function setLocalStorage() {
    const idArray: number[] = [];
    if (cart.length) cart.forEach((el) => idArray.push(el.id));
    localStorage.setItem('idArray', idArray.join(','));

    if (PROMO_CODES.length) {
        const summary = document.querySelector('.summary');
        if (summary) {
            localStorage.setItem('summary-andrabaila', summary.innerHTML);
        }
    }
}
