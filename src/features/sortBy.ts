import { Product } from '../data/types';
import { getProducts } from '../API/getProducts';
import { SORT_OPTIONS } from '../constants/constants';
import { drawProductList } from '../layouts/drawProductList';
import { getProductPage } from '../pages/getProductPage';

export async function sortBy(this: HTMLSelectElement) {
    const productList = document.querySelectorAll('.main__item_product');
    const dataList: Product[] = [];
    const data = await getProducts();
    for (let i = 0; i < productList.length; i++) {
        const id = productList[i].childNodes[0].textContent;
        dataList.push(data[Number(id) - 1]);
    }

    if (this.value === SORT_OPTIONS[1]) {
        dataList.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (this.value === SORT_OPTIONS[2]) {
        dataList.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (this.value === SORT_OPTIONS[3]) {
        dataList.sort((a, b) => (a.stock > b.stock ? 1 : -1));
    } else if (this.value === SORT_OPTIONS[4]) {
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
