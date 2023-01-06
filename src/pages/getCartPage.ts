import { getHeader } from '../layouts/getHeader';
import { getFooter } from '../layouts/getFooter';
import { getCartProductList } from '../layouts/getCartProductList';
import { getCartSummary } from '../layouts/getCartSummary';
import { getCheckoutPage } from './getCheckoutPage';

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
    getCartProductList();
    getCartSummary();
    getFooter();
    getCheckoutPage();
}
