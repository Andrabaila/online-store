import { getHeader } from '../layouts/getHeader';
import { getFooter } from '../layouts/getFooter';
import { getCartProductList } from '../layouts/getCartProductList';
import { getCartSummary } from '../layouts/getCartSummary';

export function getCartPage() {
    getHeader();

    const body = document.querySelector('body');
    const main = document.querySelector('main');

    if (main) main.remove();

    const newMain = document.createElement('main');
    newMain.classList.add('main', 'main_cart');
    body?.append(newMain);

    getCartProductList();
    getCartSummary();
    getFooter();
}
