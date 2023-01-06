import { getMainPage } from '../pages/getMainPage';
import { getCartPage } from '../pages/getCartPage';
import { getProductPage } from '../pages/getProductPage';

export function routePages() {
    const { hash } = window.location;
    console.log(hash);
    const page = hash.split('-')[0];
    const id = hash.split('-')[1];
    console.log(page);
    console.log(id);
    switch (page) {
        case '#/':
            getMainPage();
            break;
        case '#/cart':
            getCartPage();
            break;
        case '#/product':
            getProductPage(id);
            break;
    }
}
