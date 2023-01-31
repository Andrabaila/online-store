import { cart } from '../data/cart';
import { Product } from '../data/types';
import { getSameItemsInCart } from '../features/getSameItemsInCart';
import { updateCartAmount } from './updateCartAmount';
import { updateCartSum } from './updateCartSum';
import { getSummaryTotalAmount } from '../features/getSummaryTotalAmount';
import { getSummaryTotalPriceBeforePromo } from './getSummaryTotalPriceBeforePromo';
import { getCartSummary } from '../layouts/getCartSummary';
import { setLocalStorage } from './setLocalStorage';

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
