import { drawProductList } from '../layouts/drawProductList';
import { setHash } from '../features/setHash';
import { updateCheckedAmount } from './updateCheckedAmount';
import { OptionsText, Product } from '../data/types';
import { updateRangeValues } from './updateRangeValues';
import { showNotFound } from './showNotFound';
import { CATEGORIES } from '../constants/constants';
import { controlQueryParams } from './controlQueryParams';
import { currentList } from '../data/data';
import { setRangeDependencies } from './setRangeDependencies';

export async function showCheckedProducts(dataList: Product[], event: Event) {
    const parent = document.querySelector('.main__item_product-list');
    const found = document.querySelector('.main__item_options-found');
    const filters = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.input-checkbox');
    const filtersArray: HTMLInputElement[] = [];
    for (let i = 0; i < filters.length; i++) {
        filtersArray.push(filters[i]);
    }
    if (parent instanceof HTMLDivElement && found instanceof HTMLParagraphElement) {
        if (event.target instanceof HTMLInputElement) {
            const checkedFilter = event.target.id;
            let checkedItems: Product[] = [];
            if (event.target.checked) {
                for (let i = 0; i < dataList.length; i++) {
                    const values = [dataList[i].category, dataList[i].brand];
                    for (let j = 0; j < filtersArray.length; j++) {
                        if (values.includes(checkedFilter) && filtersArray[j] === event.target) {
                            checkedItems.push(dataList[i]);
                        }
                    }
                }
            } else {
                checkedItems = Array.from(new Set(dataList));
            }

            parent.innerHTML = '';
            for (let i = 0; i < checkedItems.length; i += 1) {
                const productItem = parent.appendChild(document.createElement('div'));
                productItem.classList.add('main__item_product');
                productItem.addEventListener('click', () => {
                    setHash(`/product-${checkedItems[i].id}`);
                });
            }
            drawProductList(parent, checkedItems);

            if (checkedItems.length === 0) {
                found.textContent = `${OptionsText.found}0`;
                showNotFound(parent);
            }
            found.textContent = `${OptionsText.found}${checkedItems.length}`;
            updateRangeValues();
            updateCheckedAmount();

            const key = CATEGORIES.includes(checkedFilter) ? 'category' : 'brand';
            controlQueryParams(key, checkedFilter);

            currentList.splice(0, currentList.length);
            checkedItems.forEach((el) => currentList.push(el));

            setRangeDependencies(checkedItems);
        }
    }
}
