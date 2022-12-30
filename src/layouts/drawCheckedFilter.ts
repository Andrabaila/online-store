import { getCheckedAmount } from '../features/getCheckedAmount';

export async function drawCheckedFilter(parent: HTMLElement, name: string, array: string[]) {
    const checkedFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    checkedFilter.classList.add('filter');
    const checkedHeader: HTMLHeadingElement = checkedFilter.appendChild(document.createElement('h3'));
    checkedHeader.classList.add('filter-header');
    checkedHeader.textContent = name;
    const checkedForm: HTMLFormElement = checkedFilter.appendChild(document.createElement('form'));
    checkedForm.classList.add('form');

    for (let i = 0; i < array.length; i += 1) {
        const filterContainer: HTMLDivElement = checkedForm.appendChild(document.createElement('div'));
        filterContainer.classList.add('filter-container');
        const checkedInput: HTMLInputElement = filterContainer.appendChild(document.createElement('input'));
        checkedInput.type = 'checkbox';
        checkedInput.classList.add('input-checkbox');
        checkedInput.id = array[i];
        const checkedLabel: HTMLLabelElement = filterContainer.appendChild(document.createElement('label'));
        checkedLabel.classList.add('checkbox');
        checkedLabel.textContent = array[i];
        checkedLabel.setAttribute('for', array[i]);
        const checkedItemStock: HTMLSpanElement = filterContainer.appendChild(document.createElement('span'));
        checkedItemStock.classList.add('filter-stock');
        getCheckedAmount(checkedItemStock, array[i]);
    }
}
