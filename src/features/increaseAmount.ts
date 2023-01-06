import { cart } from '../data/cart';
import { Product } from '../data/types';
import { getSameItemsInCart } from '../features/getSameItemsInCart';
import { updateCartAmount } from './updateCartAmount';
import { updateCartSum } from './updateCartSum';

export function increaseAmount(amount: HTMLParagraphElement, item: Product) {
    const itemsAmount = getSameItemsInCart(item);

    if (Number(itemsAmount) === item.stock) {
        amount.textContent = item.stock.toString();
    } else {
        cart.push(item);
        let numberAmount = Number(itemsAmount);
        numberAmount++;
        amount.textContent = numberAmount.toString();
    }

    updateCartAmount(cart.length.toString());
    updateCartSum();
}
