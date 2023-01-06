import { cart } from '../data/cart';

export function setLocalStorage() {
    localStorage.clear();
    const idArray: number[] = [];
    cart.forEach((el) => idArray.push(el.id));
    localStorage.setItem('idArray', idArray.join(','));
}
