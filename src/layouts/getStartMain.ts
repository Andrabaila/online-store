import { getFilters } from './getFilters';
import { getProductsOptions } from './getProductsOptions';
import { getProductsList } from './getProductsList';

export function getStartMain() {
    document.querySelector('main')?.remove();
    document.querySelector('footer')?.remove();

    const main: HTMLElement = document.body.appendChild(document.createElement('main'));
    main.classList.add('main');

    const filters: HTMLDivElement = main.appendChild(document.createElement('div'));
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

    const productsAndOptions: HTMLDivElement = main.appendChild(document.createElement('div'));
    productsAndOptions.classList.add('products-and-options');

    getProductsList(productsAndOptions);
    getProductsOptions(productsAndOptions);
}
