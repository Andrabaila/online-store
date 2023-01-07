import { setHash } from '../features/setHash';
import { data } from '../data/data';
import { drawProductList } from './drawProductList';
import { setRangeDependencies } from '../features/setRangeDependencies';
import { getLinkedData } from '../features/getLinkedData';
import { showCheckedProducts } from '../features/showCheckedProducts';
import { searchProducts } from '../features/searchProducts';
import { clearSearch } from '../features/clearSearch';

export async function getProductsList(parent: HTMLElement) {
    const productList: HTMLDivElement = parent.appendChild(document.createElement('div'));
    productList.classList.add('main__item_product-list');

    for (let i = 0; i < (await data).length; i += 1) {
        const productItem: HTMLDivElement = productList.appendChild(document.createElement('div'));
        productItem.classList.add('main__item_product');
        productItem.addEventListener('click', async () => {
            const dataItem = (await data)[i];
            setHash(`/product-${dataItem.id}`);
        });
    }

    drawProductList(productList, await data);

    const dataList = await getLinkedData();
    const checkForms = document.querySelectorAll('.form');
    checkForms.forEach((el) => el.addEventListener('change', (event) => showCheckedProducts(dataList, event)));

    setRangeDependencies(dataList);

    const searchField = document.querySelector('.search-input');
    if (searchField) searchField.addEventListener('input', () => searchProducts(dataList));

    const searchClose = document.querySelector('.search-close');
    if (searchClose) searchClose.addEventListener('click', () => clearSearch(dataList));
}
