import { PROMO_CODES } from '../data/promo';
import { cart } from '../data/cart';
import { query } from '../data/query';

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

    const main = document.querySelector('.main_start');
    if (main) {
        localStorage.setItem('main-andrabaila', main.innerHTML);
    }

    if (query.length) {
        const queryJson = query.map((el) => JSON.stringify(el));
        localStorage.setItem('query-andrabaila', queryJson.join(','));
    }
}
