import { data } from '../data/data';
import { setHash } from '../features/setHash';
import { drawProductList } from './drawProductList';

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
}
