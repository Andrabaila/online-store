//import { getProducts } from '../API/getProducts';
//import { getLinkedData } from './getLinkedData';
import { drawProductList } from '../layouts/drawProductList';
import { getProductPage } from '../pages/getProductPage';
import { updateCheckedAmount } from './updateCheckedAmount';
import { OptionsText, Product } from '../data/types';
import { updateRangeValues } from './updateRangeValues';
import { showNotFound } from './showNotFound';

export async function showCheckedProducts(dataList: Product[], event: Event) {
    //const data = await getProducts();
    const parent = document.querySelector('.main__item_product-list');
    const found = document.querySelector('.main__item_options-found');
    const filters = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.input-checkbox');
    const filtersArray = [];
    for (let i = 0; i < filters.length; i++) {
        filtersArray.push(filters[i]);
    }
    if (parent instanceof HTMLDivElement && found instanceof HTMLParagraphElement) {
        if (event.target instanceof HTMLInputElement) {
            console.log(event.target);
            const checkedFilter = event.target.id;
            const checkedItems = [];
            //if (event.target.checked) {
            //const firstList = getLinkedData(data);
            for (let i = 0; i < dataList.length; i++) {
                const values = [dataList[i].category, dataList[i].brand];
                for (let j = 0; j < filtersArray.length; j++) {
                    if (values.includes(checkedFilter) && filtersArray[j] === event.target) {
                        checkedItems.push(dataList[i]);
                    }
                }
            }
            parent.innerHTML = '';
            for (let i = 0; i < checkedItems.length; i += 1) {
                const productItem = parent.appendChild(document.createElement('div'));
                productItem.classList.add('main__item_product');
                productItem.addEventListener('click', getProductPage);
            }
            drawProductList(parent, checkedItems);

            if (checkedItems.length === 0) {
                found.textContent = `${OptionsText.found}0`;
                showNotFound(parent);
            }
            found.textContent = `${OptionsText.found}${checkedItems.length}`;
            //}
            updateRangeValues();
            updateCheckedAmount();
        }
    }
}
