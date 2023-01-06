import { cart } from '../data/cart';

export function updateCartSum() {
    const cartTotalSum = document.querySelector('.sum-total');
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price;
    }
    if (cartTotalSum instanceof HTMLDivElement) {
        cartTotalSum.textContent = `Cart total: $${sum.toFixed(2).toString()}`;
    }
}
