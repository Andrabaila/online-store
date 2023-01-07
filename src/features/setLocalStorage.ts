import { cart } from '../data/cart';
import { PROMO_CODES } from '../constants/constants';

export function setLocalStorage() {
    const idArray: number[] = [];
    idArray.splice(0, idArray.length - 1);
    if (cart.length) cart.forEach((el) => idArray.push(el.id));
    localStorage.setItem('idArray', idArray.join(','));

    localStorage.setItem('promo-code-andrabaila', PROMO_CODES.join(','));
    const applied = document.querySelector('.promo__applied');

    if (applied) {
        //console.log(applied.classList.contains('applied-visible'));
        localStorage.setItem('promo-code-applied-andrabaila', applied.innerHTML);
    }
}
