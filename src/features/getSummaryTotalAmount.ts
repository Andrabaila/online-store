import { cart } from '../data/cart';

export function getSummaryTotalAmount() {
    return cart.length.toString();
}
