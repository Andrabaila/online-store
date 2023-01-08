import { cart } from '../data/cart';

export function getSummaryTotalPriceBeforePromo() {
    const prices: number[] = [];
    cart.forEach((el) => prices.push(el.price));
    return prices.reduce((acc, el) => acc + el, 0).toFixed(2);
}
