import { data } from '../data/data';
import { getLinkedData } from '../features/getLinkedData';
import { showCheckedProducts } from '../features/showCheckedProducts';
import { getCheckedAmount } from '../features/getCheckedAmount';

export async function drawCheckFilter(parent: HTMLElement, name: string, array: string[]) {
    const dataList = getLinkedData(await data);
    const checkFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    checkFilter.classList.add('filter');
    const checkHeader: HTMLHeadingElement = checkFilter.appendChild(document.createElement('h3'));
    checkHeader.classList.add('filter-header');
    checkHeader.textContent = name;
    const checkForm: HTMLFormElement = checkFilter.appendChild(document.createElement('form'));
    checkForm.classList.add('form');
    checkForm.addEventListener('change', (event) => showCheckedProducts(dataList, event));

    for (let i = 0; i < array.length; i += 1) {
        const filterContainer: HTMLDivElement = checkForm.appendChild(document.createElement('div'));
        filterContainer.classList.add('filter-container');
        const checkInput: HTMLInputElement = filterContainer.appendChild(document.createElement('input'));
        checkInput.type = 'checkbox';
        checkInput.classList.add('input-checkbox');
        checkInput.id = array[i];
        const checkLabel: HTMLLabelElement = filterContainer.appendChild(document.createElement('label'));
        checkLabel.classList.add('checkbox');
        checkLabel.textContent = array[i];
        checkLabel.setAttribute('for', array[i]);
        const checkedItemStock: HTMLSpanElement = filterContainer.appendChild(document.createElement('span'));
        checkedItemStock.classList.add('filter-stock');
        getCheckedAmount(checkedItemStock, array[i]);
    }
}
