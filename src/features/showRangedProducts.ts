import { drawProductList } from '../layouts/drawProductList';
import { getProductPage } from '../pages/getProductPage';
import { Product, OptionsText } from '../data/types';
import { showNotFound } from './showNotFound';
import { updateCheckedAmount } from './updateCheckedAmount';

export function showRangedProducts(min: string, max: string, dataList: Product[], name: string) {
    const filteredList: Product[] = [];
    for (let i = 0; i < dataList.length; i++) {
        if (name === 'Price') {
            if (dataList[i].price <= Number(max) && dataList[i].price >= Number(min)) {
                filteredList.push(dataList[i]);
            }
        } else {
            if (dataList[i].stock <= Number(max) && dataList[i].stock >= Number(min)) {
                filteredList.push(dataList[i]);
            }
        }
        //console.log(filteredList);
        const parent = document.querySelector('.main__item_product-list');
        const found = document.querySelector('.main__item_options-found');
        if (parent instanceof HTMLDivElement) {
            parent.innerHTML = '';
            for (let i = 0; i < filteredList.length; i += 1) {
                const productItem: HTMLDivElement = parent.appendChild(document.createElement('div'));
                productItem.classList.add('main__item_product');
                productItem.addEventListener('click', getProductPage);
            }
            drawProductList(parent, filteredList);
            if (found instanceof HTMLParagraphElement) {
                if (filteredList.length === 0) {
                    found.textContent = `${OptionsText.found}0`;
                    showNotFound(parent);
                }
                found.textContent = `${OptionsText.found}${filteredList.length}`;
            }
        }
        updateCheckedAmount();
    }
}
