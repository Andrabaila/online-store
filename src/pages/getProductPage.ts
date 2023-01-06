import { getHeader } from '../layouts/getHeader';
import { getProducts } from '../API/getProducts';
import { getProductDescription } from '../layouts/getProductDescription';
import { getFooter } from '../layouts/getFooter';

export async function getProductPage(id: string) {
    const data = await getProducts();
    let targetData;

    for (let i = 0; i < data.length; i++) {
        if (Number(id) === data[i].id) {
            targetData = data[i];
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
}
