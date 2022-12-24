import { getHeader } from '../layouts/getHeader';
import { getProducts } from '../API/getProducts';
import { drawProductDescription } from '../layouts/drawProductDescription';
import { getFooter } from '../layouts/getFooter';

export async function showProduct(this: HTMLDivElement) {
    const data = await getProducts();
    const products = document.querySelectorAll('.main__item_product');
    let targetProduct = {};
    for (let i = 0; i < products.length; i++) {
        if (this === products[i]) {
            targetProduct = <HTMLDivElement>products[i];
        }
    }

    let targetData;
    if (targetProduct instanceof HTMLDivElement) {
        for (let i = 0; i < data.length; i++) {
            if (targetProduct.firstChild?.textContent === data[i].title.toUpperCase()) {
                targetData = data[i];
            }
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
    mainPageLink.textContent = 'Store';
    mainPageLink.href = '../index.html';

    if (targetData !== undefined) {
        breadCrumbs.appendChild(document.createElement('span')).textContent = '>>';
        breadCrumbs.appendChild(document.createElement('span')).textContent = targetData.category;
        breadCrumbs.appendChild(document.createElement('span')).textContent = '>>';
        breadCrumbs.appendChild(document.createElement('span')).textContent = targetData.title.toUpperCase();
        drawProductDescription(main, targetData);
    }
    getFooter();
}
