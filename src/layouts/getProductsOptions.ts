import { SORT_OPTIONS, SMALL_VIEW_CELLS, LARGE_VIEW_CELLS } from '../constants/constants';

export function getProductsOptions(parent: HTMLDivElement) {
    const options = parent.appendChild(document.createElement('div'));
    options.classList.add('main__item_options');

    const sortField: HTMLSelectElement = options.appendChild(document.createElement('select'));
    sortField.classList.add('main__item_options-sort');
    const selectHeader: HTMLOptionElement = sortField.appendChild(document.createElement('option'));
    selectHeader.textContent = 'Sort by:';
    selectHeader.setAttribute('disabled', 'disabled');

    for (let i = 0; i < SORT_OPTIONS.length; i += 1) {
        sortField.appendChild(document.createElement('option')).textContent = SORT_OPTIONS[i];
    }

    const found: HTMLParagraphElement = options.appendChild(document.createElement('p'));
    found.classList.add('main__item_options-found');
    found.textContent = 'Found: 30';

    const searchField: HTMLInputElement = options.appendChild(document.createElement('input'));
    searchField.classList.add('main__item_options-search');
    searchField.type = 'search';
    searchField.placeholder = 'Search product';

    const views: HTMLDivElement = options.appendChild(document.createElement('div'));
    views.classList.add('main__item_options-views');

    const smallView: HTMLDivElement = views.appendChild(document.createElement('div'));
    smallView.classList.add('main__item_options-small');
    for (let i = 0; i < SMALL_VIEW_CELLS; i += 1) {
        smallView.appendChild(document.createElement('div')).classList.add('main__item_options-small-cell');
    }

    const largeView: HTMLDivElement = views.appendChild(document.createElement('div'));
    largeView.classList.add('main__item_options-large');
    for (let i = 0; i < LARGE_VIEW_CELLS; i += 1) {
        largeView.appendChild(document.createElement('div')).classList.add('main__item_options-large-cell');
    }
}
