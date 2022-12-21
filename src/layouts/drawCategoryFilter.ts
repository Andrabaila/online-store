export function drawCategoryFilter(parent: HTMLDivElement) {
    const categoryFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    categoryFilter.classList.add('filter');

    const categoryHeader: HTMLParagraphElement = categoryFilter.appendChild(document.createElement('p'));
    categoryHeader.classList.add('filter-header');
    categoryHeader.textContent = 'Category';

    const categoryForm: HTMLFormElement = categoryFilter.appendChild(document.createElement('form'));
    categoryForm.classList.add('category-form');
    categoryForm.classList.add('form');
    const shampooLabel: HTMLLabelElement = categoryForm.appendChild(document.createElement('label'));
    shampooLabel.classList.add('category-checkbox');
    shampooLabel.classList.add('checkbox');
    const shampooInput: HTMLInputElement = shampooLabel.appendChild(document.createElement('input'));
    shampooInput.type = 'checkbox';
    shampooInput.classList.add('input-checkbox');
    const shampooHeader: HTMLSpanElement = shampooLabel.appendChild(document.createElement('span'));
    shampooHeader.textContent = 'shampoo';

    const showerGelLabel: HTMLLabelElement = categoryForm.appendChild(document.createElement('label'));
    showerGelLabel.classList.add('category-checkbox');
    showerGelLabel.classList.add('checkbox');
    const showerGelInput: HTMLInputElement = showerGelLabel.appendChild(document.createElement('input'));
    showerGelInput.type = 'checkbox';
    showerGelInput.classList.add('input-checkbox');
    const showerGelHeader: HTMLSpanElement = showerGelLabel.appendChild(document.createElement('span'));
    showerGelHeader.textContent = 'shower gel';
}
