import { getLinkedData } from '../features/getLinkedData';
import { Product, SortOptions } from '../data/types';
import { SMALL_VIEW_CELLS, LARGE_VIEW_CELLS } from '../constants/constants';
import { sortBy } from '../features/sortBy';
import { searchProducts } from '../features/searchProducts';
import { clearSearch } from '../features/clearSearch';
import { changeCellsSize } from './changeCellsSize';
import { OptionsText } from '../data/types';

export async function getOptions(parent: HTMLElement) {
    const dataList = await getLinkedData();
    const initialList: Product[] = [];
    for (let i = 0; i < dataList.length; i++) {
        initialList.push(dataList[i]);
    }

    const options = parent.appendChild(document.createElement('div'));
    options.classList.add('main__item_options');

    const sortField: HTMLSelectElement = options.appendChild(document.createElement('select'));
    sortField.classList.add('main__item_options-sort');
    sortField.addEventListener('change', sortBy);

    const sortOptions = Object.values(SortOptions);
    for (let i = 0; i < sortOptions.length; i += 1) {
        const sortOption: HTMLOptionElement = sortField.appendChild(document.createElement('option'));
        sortOption.classList.add('sort-option');
        sortOption.textContent = sortOptions[i];
    }
    if (sortField.firstChild instanceof HTMLOptionElement) {
        sortField.firstChild.setAttribute('disabled', 'disabled');
    }

    const found: HTMLParagraphElement = options.appendChild(document.createElement('p'));
    found.classList.add('main__item_options-found');
    found.textContent = `${OptionsText.found}${dataList.length}`;

    const searchWrapper: HTMLDivElement = options.appendChild(document.createElement('div'));
    searchWrapper.classList.add('main__item_options-search');

    const searchField: HTMLInputElement = searchWrapper.appendChild(document.createElement('input'));
    searchField.classList.add('search-input');
    searchField.type = 'search';
    searchField.placeholder = OptionsText.search;
    searchField.addEventListener('input', () => searchProducts(dataList));

    const searchClose: HTMLDivElement = searchWrapper.appendChild(document.createElement('div'));
    searchClose.classList.add('search-close');
    searchClose.addEventListener('click', () => clearSearch(dataList));

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
