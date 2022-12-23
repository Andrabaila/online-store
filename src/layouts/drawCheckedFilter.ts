export function drawCheckedFilter(parent: HTMLDivElement, name: string, array: string[]) {
    const checkedFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    checkedFilter.classList.add('filter');
    const checkedHeader: HTMLParagraphElement = checkedFilter.appendChild(document.createElement('p'));
    checkedHeader.classList.add('filter-header');
    checkedHeader.textContent = name;
    const checkedForm: HTMLFormElement = checkedFilter.appendChild(document.createElement('form'));
    checkedForm.classList.add('form');

    for (let i = 0; i < array.length; i += 1) {
        const checkedLabel: HTMLLabelElement = checkedForm.appendChild(document.createElement('label'));
        checkedLabel.classList.add('checkbox');
        const checkedInput: HTMLInputElement = checkedLabel.appendChild(document.createElement('input'));
        checkedInput.type = 'checkbox';
        checkedInput.classList.add('input-checkbox');
        const checkedItemHeader: HTMLSpanElement = checkedLabel.appendChild(document.createElement('span'));
        checkedItemHeader.textContent = array[i];
    }
}
