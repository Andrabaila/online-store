import { Product } from '../data/types';
import { UI } from '../data/UI';
import { cart } from '../data/cart';
import { updateCartAmount } from './updateCartAmount';
import { updateCartSum } from './updateCartSum';

export async function toggleAddRemove(event: Event, product: Product) {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.textContent === UI.addButtonText) {
            event.target.textContent = UI.removeButtonText;
            cart.push(product);
        } else {
            event.target.textContent = UI.addButtonText;
            const idArray: number[] = [];
            cart.forEach((el) => idArray.push(el.id));
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === product.id) {
                    cart.splice(i, 1);
                    i--;
                }
            }
        }
    }
    updateCartAmount(cart.length.toString());
    updateCartSum();
    event.stopPropagation();
    localStorage.removeItem('summary-andrabaila');
}
