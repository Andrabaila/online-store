import { query } from '../data/query';
import { copyFilters } from '../features/copyFilters';
import { getFilters } from './getFilters';
import { getOptions } from './getOptions';
import { getProductsList } from './getProductsList';

export function getStartMain() {
    document.querySelector('main')?.remove();
    document.querySelector('footer')?.remove();

    const main: HTMLElement = document.body.appendChild(document.createElement('main'));
    main.classList.add('main', 'main_start');

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
    resetBtn.addEventListener('click', () => {
        query.splice(0, query.length);
        localStorage.removeItem('query-andrabaila');
        const sortField = document.querySelector('.main__item_options-sort');
        if (sortField) {
            if (sortField.firstChild instanceof HTMLOptionElement) {
                sortField.firstChild.selected = true;
            }
        }
    });

    const copyFiltersBtn: HTMLButtonElement = resetCopyBtnBlock.appendChild(document.createElement('button'));
    copyFiltersBtn.classList.add('copy-filters-button');
    copyFiltersBtn.classList.add('button');
    copyFiltersBtn.textContent = 'Copy filters';
    copyFiltersBtn.addEventListener('click', (event) => copyFilters(event, 1000));

    getFilters(filters);
}
