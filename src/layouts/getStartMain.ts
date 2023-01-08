import { copyFilters } from '../features/copyFilters';
import { setHash } from '../features/setHash';
import { getFilters } from './getFilters';
import { getOptions } from './getOptions';
import { getProductsList } from './getProductsList';

export function getStartMain() {
    document.querySelector('main')?.remove();
    document.querySelector('footer')?.remove();

    const main: HTMLElement = document.body.appendChild(document.createElement('main'));
    main.classList.add('main');

    const productsAndOptions: HTMLElement = main.appendChild(document.createElement('section'));
    productsAndOptions.classList.add('products-and-options');

    getProductsList(productsAndOptions);
    getOptions(productsAndOptions);

    const filters: HTMLElement = main.appendChild(document.createElement('section'));
    filters.classList.add('filters');

    const resetCopyBtnBlock: HTMLDivElement = filters.appendChild(document.createElement('div'));
    resetCopyBtnBlock.classList.add('reset-copy');

    const resetBtn = resetCopyBtnBlock.appendChild(document.createElement('a'));
    resetBtn.classList.add('reset-button');
    resetBtn.classList.add('button');
    resetBtn.textContent = 'Reset filters';
    resetBtn.href = '../';

    const copyFiltersBtn: HTMLButtonElement = resetCopyBtnBlock.appendChild(document.createElement('button'));
    copyFiltersBtn.classList.add('copy-filters-button');
    copyFiltersBtn.classList.add('button');
    copyFiltersBtn.textContent = 'Copy filters';
    copyFiltersBtn.addEventListener('click', (event) => copyFilters(event, 1000));

    getFilters(filters);
}
