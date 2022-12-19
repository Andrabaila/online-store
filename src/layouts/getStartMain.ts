import { getFilters } from './getFilters';

export function getStartMain() {
    const main: HTMLElement = document.body.appendChild(document.createElement('main'));
    main.classList.add('main');

    const filters: HTMLDivElement = main.appendChild(document.createElement('div'));
    filters.classList.add('filters');

    const resetCopyBtnBlock: HTMLDivElement = filters.appendChild(document.createElement('div'));
    resetCopyBtnBlock.classList.add('reset-copy');

    const resetBtn: HTMLButtonElement = resetCopyBtnBlock.appendChild(document.createElement('button'));
    resetBtn.classList.add('reset-button');
    resetBtn.textContent = 'Reset filters';

    const copyFiltersBtn: HTMLButtonElement = resetCopyBtnBlock.appendChild(document.createElement('button'));
    copyFiltersBtn.classList.add('copy-filters-button');
    copyFiltersBtn.textContent = 'Copy filters';

    getFilters(filters);

    const products: HTMLDivElement = main.appendChild(document.createElement('div'));
    products.classList.add('products');
}
