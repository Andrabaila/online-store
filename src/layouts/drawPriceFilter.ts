import { getMinPrice } from './getMinPrice';
import { getMaxPrice } from './getMaxPrice';

export function drawPriceFilter(parent: HTMLDivElement) {
    const priceFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    priceFilter.classList.add('filter');

    const priceHeader: HTMLParagraphElement = priceFilter.appendChild(document.createElement('p'));
    priceHeader.classList.add('filter-header');
    priceHeader.textContent = 'Price';

    const priceLimits: HTMLDivElement = priceFilter.appendChild(document.createElement('div'));
    priceLimits.classList.add('price-limits');

    const minPrice: HTMLParagraphElement = priceLimits.appendChild(document.createElement('p'));
    minPrice.classList.add('price-limit');
    minPrice.textContent = `$${getMinPrice()}`;

    const maxPrice: HTMLParagraphElement = priceLimits.appendChild(document.createElement('p'));
    maxPrice.classList.add('price-limit');
    maxPrice.textContent = `$${getMaxPrice()}`;

    const priceControls: HTMLDivElement = priceFilter.appendChild(document.createElement('div'));
    priceControls.classList.add('price-controls');

    const minPriceRange: HTMLInputElement = priceControls.appendChild(document.createElement('input'));
    minPriceRange.classList.add('price-range');
    minPriceRange.classList.add('price-range-from');
    minPriceRange.type = 'range';
    minPriceRange.value = `${getMinPrice()}`;
    minPriceRange.min = `${getMinPrice()}`;
    minPriceRange.max = `${getMaxPrice()}`;

    const maxPriceRange: HTMLInputElement = priceControls.appendChild(document.createElement('input'));
    maxPriceRange.classList.add('price-range');
    maxPriceRange.classList.add('price-range-to');
    maxPriceRange.type = 'range';
    maxPriceRange.value = `${getMaxPrice()}`;
    maxPriceRange.min = `${getMinPrice()}`;
    maxPriceRange.max = `${getMaxPrice()}`;
}
