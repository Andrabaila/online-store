import { getFilters } from './getFilters';
import { getProductsOptions } from './getProductsOptions';
import { getProductsList } from './getProductsList';

export function getStartMain() {
    const main: HTMLElement = document.body.appendChild(document.createElement('main'));
    main.classList.add('main');

    const productsAndOptions: HTMLElement = main.appendChild(document.createElement('section'));
    productsAndOptions.classList.add('products-and-options');

    getProductsList(productsAndOptions);
    getProductsOptions(productsAndOptions);

    const filters: HTMLElement = main.appendChild(document.createElement('section'));
    filters.classList.add('filters');

    const resetCopyBtnBlock: HTMLDivElement = filters.appendChild(document.createElement('div'));
    resetCopyBtnBlock.classList.add('reset-copy');

    const resetBtn: HTMLButtonElement = resetCopyBtnBlock.appendChild(document.createElement('button'));
    resetBtn.classList.add('reset-button');
    resetBtn.classList.add('button');
    resetBtn.textContent = 'Reset filters';

    const copyFiltersBtn: HTMLButtonElement = resetCopyBtnBlock.appendChild(document.createElement('button'));
    copyFiltersBtn.classList.add('copy-filters-button');
    copyFiltersBtn.classList.add('button');
    copyFiltersBtn.textContent = 'Copy filters';

    getFilters(filters);
}
