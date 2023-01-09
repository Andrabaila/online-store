import { cart } from '../data/cart';
import { query } from '../data/query';
import { updateCartSum } from '../features/updateCartSum';
import { copyFilters } from './copyFilters';
import { sortBy } from './sortBy';
import { changeCellsSize } from '../layouts/changeCellsSize';
import { searchProducts } from '../features/searchProducts';
import { clearSearch } from '../features/clearSearch';
import { getLinkedData } from './getLinkedData';
import { setRangeDependencies } from '../features/setRangeDependencies';
import { showCheckedProducts } from '../features/showCheckedProducts';
import { currentList } from '../data/data';

export async function setSavedDependencies(parent: HTMLElement) {
    console.log(query, cart, currentList);
    const currentArr = Array.from(new Set(currentList));
    const dataList = await getLinkedData();
    parent.innerHTML = <string>localStorage.getItem('main-andrabaila');

    updateCartSum();
    const cartAmount = document.querySelector('.products-in-cart');
    if (cartAmount) cartAmount.textContent = `${cart.length.toString()}`;

    const resetBtn = document.querySelector('.reset-button');
    if (resetBtn && resetBtn instanceof HTMLAnchorElement) {
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
    }

    const copyFiltersBtn = document.querySelector('.copy-filters-button');
    if (copyFiltersBtn) {
        copyFiltersBtn.addEventListener('click', (event) => copyFilters(event, 1000));
    }

    const sortField = document.querySelector('.main__item_options-sort');
    const sort = query.find((el) => el['sort']);
    if (sortField && sortField instanceof HTMLSelectElement) {
        sortField.addEventListener('change', sortBy);
        if (!sort) {
            if (sortField.firstChild instanceof HTMLOptionElement) {
                sortField.firstChild.setAttribute('disabled', 'disabled');
            }
        } else {
            const sortActive = query[query.indexOf(sort)].sort;
            sortField.childNodes.forEach((el) => {
                if (el.textContent === sortActive && el instanceof HTMLOptionElement) {
                    el.selected = true;
                }
            });
        }
    }

    const smallView = document.querySelector('.main__item_options-small');
    const largeView = document.querySelector('.main__item_options-large');
    if (smallView && smallView instanceof HTMLDivElement && largeView && largeView instanceof HTMLDivElement) {
        const size = query.find((el) => el['size']);
        if (size) {
            const sizeIndex = query.indexOf(size);
            if (query[sizeIndex].size === 'large') {
                smallView.classList.remove('active-view');
                largeView.classList.add('active-view');
            } else {
                smallView.classList.add('active-view');
                largeView.classList.remove('active-view');
            }
        }
        smallView.addEventListener('click', changeCellsSize);
        largeView.addEventListener('click', changeCellsSize);
    }

    const searchField = document.querySelector('.search-input');
    if (searchField) searchField.addEventListener('input', () => searchProducts(dataList));

    const searchClose = document.querySelector('.search-close');
    if (searchClose) searchClose.addEventListener('click', () => clearSearch(currentArr));

    const checkForms = document.querySelectorAll('.form');
    checkForms.forEach((el) => el.addEventListener('change', (event) => showCheckedProducts(dataList, event)));
    const filters = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.input-checkbox');
    const checked: string[] = [];
    query.forEach((el) => {
        if (el['brand']) {
            checked.push(el['brand']);
        }
        if (el['category']) {
            checked.push(el['category']);
        }
    });
    checked.forEach((el) => {
        filters.forEach((item) => {
            if (item instanceof HTMLInputElement) {
                if (item.id === el) {
                    item.checked = true;
                }
            }
        });
    });

    setRangeDependencies(dataList);
}
