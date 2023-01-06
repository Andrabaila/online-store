import { data } from '../data/data';
import { getLinkedData } from './getLinkedData';
import { SortOptions } from '../data/types';
import { drawProductList } from '../layouts/drawProductList';
import { getProductPage } from '../pages/getProductPage';

export async function sortBy(this: HTMLSelectElement) {
    const dataList = getLinkedData(await data);

    switch (this.value) {
        case SortOptions.priceAsc:
            dataList.sort((a, b) => (a.price > b.price ? 1 : -1));
            break;
        case SortOptions.priceDesc:
            dataList.sort((a, b) => (a.price < b.price ? 1 : -1));
            break;
        case SortOptions.stockAsc:
            dataList.sort((a, b) => (a.stock > b.stock ? 1 : -1));
            break;
        case SortOptions.stockDesc:
            dataList.sort((a, b) => (a.stock < b.stock ? 1 : -1));
    }

    const parent = document.querySelector('.main__item_product-list');

    if (parent instanceof HTMLDivElement) {
        parent.innerHTML = '';
        for (let i = 0; i < dataList.length; i += 1) {
            const productItem: HTMLDivElement = parent.appendChild(document.createElement('div'));
            productItem.classList.add('main__item_product');
            productItem.addEventListener('click', getProductPage);
        }
        drawProductList(parent, dataList);
    }
}
