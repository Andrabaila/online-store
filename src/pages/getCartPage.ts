import { getHeader } from '../layouts/getHeader';
import { getFooter } from '../layouts/getFooter';
import { getCartProductList } from '../layouts/getCartProductList';
import { getCartSummary } from '../layouts/getCartSummary';
import { getCheckoutPage } from './getCheckoutPage';
import { getCartEmptyMain } from '../layouts/getCartEmptyMain';
import { cart } from '../data/cart';
import { updateCartAmount } from '../features/updateCartAmount';

export function getCartPage() {
    getHeader();
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (main) {
        main.remove();
    }

    const newMain = document.createElement('main');
    newMain.classList.add('main', 'main_cart');
    if (header) {
        header.after(newMain);
    }

    if (cart.length === 0) {
        getCartEmptyMain();
        updateCartAmount('0');
    } else {
        getCartProductList();
        getCartSummary();
        getCheckoutPage();
    }

    getFooter();
}
