import { cart } from '../data/cart';
import { Product } from '../data/types';

export function getSameItemsInCart(item: Product): string {
    let count = 0;
    cart.forEach((el) => {
        if (el.id === item.id) {
            count++;
        }
    });
    return count.toString();
}
