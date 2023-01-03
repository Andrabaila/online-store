import { getProducts } from '../API/getProducts';
//import { getLinkedData } from './getLinkedData';
import { ID_INDEX } from '../constants/constants';
import { drawProductList } from '../layouts/drawProductList';
import { getProductPage } from '../pages/getProductPage';
import { Product, OptionsText, NotInformative } from '../data/types';
import { showNotFound } from './showNotFound';
import { updateRangeValues } from './updateRangeValues';
import { updateCheckedAmount } from './updateCheckedAmount';

export async function searchProducts(dataList: Product[]) {
    const searchInput = document.querySelector('.search-input');
    let value;
    if (searchInput instanceof HTMLInputElement) {
        value = searchInput.value.trim();
    }

    const data = await getProducts();
    const dataValuesArray = [];
    for (let i = 0; i < dataList.length; i++) {
        const array = Object.values(dataList[i]);
        dataValuesArray.push(array);
    }

    const resultList: Product[] = [];
    if (value && value !== '') {
        for (let i = 0; i < dataValuesArray.length; i++) {
            for (let j = NotInformative.id; j < dataValuesArray[i].length - NotInformative.photos; j++) {
                const checkedItem = dataValuesArray[i][j].toString().toLowerCase();
                if (checkedItem.indexOf(value.toLowerCase()) > -1) {
                    const id = dataValuesArray[i][ID_INDEX];
                    resultList.push(data[Number(id) - 1]);
                }
            }
        }
    }

    const resultSet = Array.from(new Set(resultList));
    const parent = document.querySelector('.main__item_product-list');
    const found = document.querySelector('.main__item_options-found');
    if (parent instanceof HTMLDivElement) {
        parent.innerHTML = '';
        parent.classList.remove('main__not-found');
        if (resultSet) {
            for (let i = 0; i < resultSet.length; i += 1) {
                const productItem: HTMLDivElement = parent.appendChild(document.createElement('div'));
                productItem.classList.add('main__item_product');
                productItem.addEventListener('click', getProductPage);
            }
            drawProductList(parent, resultSet);
            if (found instanceof HTMLParagraphElement) {
                if (resultSet.length === 0) {
                    found.textContent = `${OptionsText.found}0`;
                    showNotFound(parent);
                }
                found.textContent = `${OptionsText.found}${resultSet.length}`;
            }
        }
    }
    updateRangeValues();
    updateCheckedAmount();
}
