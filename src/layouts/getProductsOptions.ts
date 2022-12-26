import { SORT_OPTIONS, SMALL_VIEW_CELLS, LARGE_VIEW_CELLS } from '../constants/constants';
import { sortBy } from '../features/sortBy';
import { changeCellsSize } from './changeCellsSize';
import { OptionsText } from '../data/types';

export function getProductsOptions(parent: HTMLDivElement) {
    const options = parent.appendChild(document.createElement('div'));
    options.classList.add('main__item_options');

    const sortField: HTMLSelectElement = options.appendChild(document.createElement('select'));
    sortField.classList.add('main__item_options-sort');
    sortField.addEventListener('change', sortBy);

    for (let i = 0; i < SORT_OPTIONS.length; i += 1) {
        const sortOption: HTMLOptionElement = sortField.appendChild(document.createElement('option'));
        sortOption.classList.add('sort-option');
        sortOption.textContent = SORT_OPTIONS[i];
    }
    if (sortField.firstChild instanceof HTMLOptionElement) {
        sortField.firstChild.setAttribute('disabled', 'disabled');
    }

    const found: HTMLParagraphElement = options.appendChild(document.createElement('p'));
    found.classList.add('main__item_options-found');
    found.textContent = OptionsText.found;

    const searchField: HTMLInputElement = options.appendChild(document.createElement('input'));
    searchField.classList.add('main__item_options-search');
    searchField.type = 'search';
    searchField.placeholder = OptionsText.search;

    const views: HTMLDivElement = options.appendChild(document.createElement('div'));
    views.classList.add('main__item_options-views');

    const smallView: HTMLDivElement = views.appendChild(document.createElement('div'));
    smallView.classList.add('main__item_options-small');
    smallView.classList.add('active-view');
    for (let i = 0; i < SMALL_VIEW_CELLS; i += 1) {
        smallView.appendChild(document.createElement('div')).classList.add('main__item_options-small-cell');
    }
    smallView.addEventListener('click', changeCellsSize);

    const largeView: HTMLDivElement = views.appendChild(document.createElement('div'));
    largeView.classList.add('main__item_options-large');
    for (let i = 0; i < LARGE_VIEW_CELLS; i += 1) {
        largeView.appendChild(document.createElement('div')).classList.add('main__item_options-large-cell');
    }
    largeView.addEventListener('click', changeCellsSize);
}
