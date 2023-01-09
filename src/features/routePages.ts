import { getMainPage } from '../pages/getMainPage';
import { getCartPage } from '../pages/getCartPage';
import { getProductPage } from '../pages/getProductPage';
import { get404Page } from '../pages/get404Page';
import { setHash } from './setHash';

export function routePages() {
    const { hash, pathname } = window.location;
    const page = hash.split('-')[0];
    const id = hash.split('-')[1];

    if (pathname.length > 1) {
        get404Page();
        return;
    }

    switch (page) {
        case '':
            setHash('#/');
            getMainPage();
            break;
        case '#/':
            getMainPage();
            break;
        case '#/cart':
            getCartPage();
            break;
        case '#/product':
            getProductPage(id);
            break;
        default:
            get404Page();
    }
}
