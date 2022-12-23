import { OPTIONS_TEXT, SORT_OPTIONS, SMALL_VIEW_CELLS, LARGE_VIEW_CELLS } from '../constants/constants';
import { changeCellsSize } from './changeCellsSize';

export function getProductsOptions(parent: HTMLDivElement) {
    const options = parent.appendChild(document.createElement('div'));
    options.classList.add('main__item_options');

    const sortField: HTMLSelectElement = options.appendChild(document.createElement('select'));
    sortField.classList.add('main__item_options-sort');

    for (let i = 0; i < SORT_OPTIONS.length; i += 1) {
        sortField.appendChild(document.createElement('option')).textContent = SORT_OPTIONS[i];
    }
    (<HTMLOptionElement>sortField.firstChild).setAttribute('disabled', 'disabled');

    const found: HTMLParagraphElement = options.appendChild(document.createElement('p'));
    found.classList.add('main__item_options-found');
    found.textContent = OPTIONS_TEXT[0];

    const searchField: HTMLInputElement = options.appendChild(document.createElement('input'));
    searchField.classList.add('main__item_options-search');
    searchField.type = 'search';
    searchField.placeholder = OPTIONS_TEXT[1];

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
