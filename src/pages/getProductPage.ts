import { getHeader } from '../layouts/getHeader';
import { data } from '../data/data';
import { getProductDescription } from '../layouts/getProductDescription';
import { getFooter } from '../layouts/getFooter';
import { cart } from '../data/cart';
import { updateCartSum } from '../features/updateCartSum';
import { getCheckoutPage } from './getCheckoutPage';
import { setLocalStorage } from '../features/setLocalStorage';
import { getLocalStorage } from '../features/getLocalStorage';

export async function getProductPage(id: string) {
    let targetData;

    for (let i = 0; i < (await data).length; i++) {
        if (Number(id) === (await data)[i].id) {
            targetData = (await data)[i];
        }
    }

    document.body.innerHTML = '';
    getHeader();

    const main = document.body.appendChild(document.createElement('main'));
    main.classList.add('main');
    main.classList.add('main_product');

    const breadCrumbs: HTMLDivElement = main.appendChild(document.createElement('div'));
    breadCrumbs.classList.add('main__bread-crumbs');

    const mainPageLink = breadCrumbs.appendChild(document.createElement('a'));
    mainPageLink.classList.add('main_product__link');
    mainPageLink.textContent = 'Store'.toUpperCase();
    mainPageLink.href = '#/';

    if (targetData) {
        breadCrumbs.appendChild(document.createElement('span')).textContent = '>>';
        breadCrumbs.appendChild(document.createElement('span')).textContent = targetData.category.toUpperCase();
        breadCrumbs.appendChild(document.createElement('span')).textContent = '>>';
        breadCrumbs.appendChild(document.createElement('span')).textContent = targetData.title.toUpperCase();
        getProductDescription(main, targetData);
    }
    getFooter();

    updateCartSum();
    const cartAmount = document.querySelector('.products-in-cart');
    if (cartAmount) cartAmount.textContent = `${cart.length.toString()}`;

    getCheckoutPage();
}

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);
