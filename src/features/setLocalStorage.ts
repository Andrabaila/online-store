import { cart } from '../data/cart';

export function setLocalStorage() {
    const idArray: number[] = [];
    idArray.splice(0, idArray.length - 1);
    if (cart.length) cart.forEach((el) => idArray.push(el.id));
    localStorage.setItem('idArray', idArray.join(','));

    const summary = document.querySelector('.summary');
    if (summary) {
        localStorage.setItem('summary-andrabaila', summary.innerHTML);
    }
}
