import { getProducts } from '../API/getProducts';
import { getProductPage } from '../pages/getProductPage';
import { drawProductList } from './drawProductList';

export async function getProductsList(parent: HTMLElement) {
    const data = await getProducts();

    const productList: HTMLDivElement = parent.appendChild(document.createElement('div'));
    productList.classList.add('main__item_product-list');

    for (let i = 0; i < data.length; i += 1) {
        const productItem: HTMLDivElement = productList.appendChild(document.createElement('div'));
        productItem.classList.add('main__item_product');
        productItem.addEventListener('click', getProductPage);
    }

    drawProductList(productList, data);
}
