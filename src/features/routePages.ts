import { getMainPage } from '../pages/getMainPage';
import { getCartPage } from '../pages/getCartPage';
import { getProductPage } from '../pages/getProductPage';
import { get404Page } from '../pages/get404Page';

export function routePages() {
    const { hash, pathname } = window.location;
    console.log(pathname);
    const page = hash.split('-')[0];
    const id = hash.split('-')[1];

    if (pathname !== '/') {
        get404Page();
        return;
    }

    switch (page) {
        case '':
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
