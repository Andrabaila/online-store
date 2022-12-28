import { drawProductList } from '../layouts/drawProductList';
import { getProductPage } from '../pages/getProductPage';
import { OptionsText, Product } from '../data/types';

export function removeSearch(dataList: Product[]) {
    const searchInput = document.querySelector('.search-input');
    if (searchInput && searchInput instanceof HTMLInputElement) {
        searchInput.value = '';
    }

    const parent = document.querySelector('.main__item_product-list');
    if (parent instanceof HTMLDivElement) {
        parent.innerHTML = '';
        parent.classList.remove('main__not-found');
        for (let i = 0; i < dataList.length; i++) {
            const productItem: HTMLDivElement = parent.appendChild(document.createElement('div'));
            productItem.classList.add('main__item_product');
            productItem.addEventListener('click', getProductPage);
        }
        drawProductList(parent, dataList);
    }
    const found = document.querySelector('.main__item_options-found');
    if (found instanceof HTMLParagraphElement) {
        found.textContent = `${OptionsText.found}${dataList.length}`;
    }
}
