import { cart } from '../data/cart';
import { Product } from '../data/types';
import { getSameItemsInCart } from '../features/getSameItemsInCart';
import { updateCartAmount } from './updateCartAmount';
import { updateCartSum } from './updateCartSum';
import { getSummaryTotalAmount } from '../features/getSummaryTotalAmount';
import { getSummaryTotalPriceBeforePromo } from './getSummaryTotalPriceBeforePromo';
import { getCartSummary } from '../layouts/getCartSummary';
import { setLocalStorage } from './setLocalStorage';

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

    const summaryTotalAmount = document.querySelector('.summary__item-value_amount');
    if (summaryTotalAmount) {
        summaryTotalAmount.textContent = `${getSummaryTotalAmount()}`;
    }
    const priceBeforePromo = document.querySelector('.summary__price-before');
    if (priceBeforePromo) {
        priceBeforePromo.textContent = `$${getSummaryTotalPriceBeforePromo().toString()}`;
    }
    localStorage.removeItem('summary-andrabaila');
    const summary = document.querySelector('.summary');
    summary?.remove();
    getCartSummary();
    setLocalStorage();
}
