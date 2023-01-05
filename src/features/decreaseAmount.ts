import { cart } from '../data/cart';
import { Product } from '../data/types';
import { getSameItemsInCart } from '../features/getSameItemsInCart';
import { updateCartAmount } from './updateCartAmount';
import { updateCartSum } from './updateCartSum';

export function decreaseAmount(amount: HTMLParagraphElement, item: Product) {
    const idArray: number[] = [];
    cart.forEach((el) => idArray.push(el.id));
    if (idArray.includes(item.id)) {
        cart.splice(cart.indexOf(item), 1);
    }

    const itemsAmount = getSameItemsInCart(item);
    if (!Number(itemsAmount)) {
        amount.closest('li')?.remove();
    }
    amount.textContent = itemsAmount;
    updateCartAmount(cart.length.toString());
    updateCartSum();
}
