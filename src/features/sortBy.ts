import { getLinkedData } from './getLinkedData';
import { getSortedList } from './getSortedList';
import { drawProductList } from '../layouts/drawProductList';
import { setHash } from '../features/setHash';
import { controlQueryParams } from './controlQueryParams';
import { setLocalStorage } from './setLocalStorage';

export async function sortBy(this: HTMLSelectElement) {
    const dataList = await getLinkedData();

    getSortedList(this.value, dataList);

    const parent = document.querySelector('.main__item_product-list');

    if (parent instanceof HTMLDivElement) {
        parent.innerHTML = '';
        for (let i = 0; i < dataList.length; i += 1) {
            const productItem: HTMLDivElement = parent.appendChild(document.createElement('div'));
            productItem.classList.add('main__item_product');
            productItem.addEventListener('click', () => {
                setHash(`/product-${dataList[i].id}`);
            });
        }
        drawProductList(parent, dataList);
    }

    controlQueryParams('sort', this.value);
    setLocalStorage();
}
