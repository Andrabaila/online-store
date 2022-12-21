import { getMinPrice } from './getMinPrice';
import { getMaxPrice } from './getMaxPrice';
import { getMinStock } from './getMinStock';
import { getMaxStock } from './getMaxStock';

export function getFilters(parent: HTMLDivElement) {
    //categoryFilter
    const categoryFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    categoryFilter.classList.add('filter');

    const categoryHeader: HTMLParagraphElement = categoryFilter.appendChild(document.createElement('p'));
    categoryHeader.classList.add('filter-header');
    categoryHeader.textContent = 'Category';

    const categoryForm: HTMLFormElement = categoryFilter.appendChild(document.createElement('form'));
    categoryForm.classList.add('category-form');
    categoryForm.classList.add('form');
    const shampooLabel: HTMLLabelElement = categoryForm.appendChild(document.createElement('label'));
    shampooLabel.classList.add('category-checkbox');
    shampooLabel.classList.add('checkbox');
    const shampooInput: HTMLInputElement = shampooLabel.appendChild(document.createElement('input'));
    shampooInput.type = 'checkbox';
    shampooInput.classList.add('input-checkbox');
    const shampooHeader: HTMLSpanElement = shampooLabel.appendChild(document.createElement('span'));
    shampooHeader.textContent = 'shampoo';

    const showerGelLabel: HTMLLabelElement = categoryForm.appendChild(document.createElement('label'));
    showerGelLabel.classList.add('category-checkbox');
    showerGelLabel.classList.add('checkbox');
    const showerGelInput: HTMLInputElement = showerGelLabel.appendChild(document.createElement('input'));
    showerGelInput.type = 'checkbox';
    showerGelInput.classList.add('input-checkbox');
    const showerGelHeader: HTMLSpanElement = showerGelLabel.appendChild(document.createElement('span'));
    showerGelHeader.textContent = 'shower gel';

    //brandFilter
    const brandFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    brandFilter.classList.add('filter');

    const brandHeader: HTMLParagraphElement = brandFilter.appendChild(document.createElement('p'));
    brandHeader.classList.add('filter-header');
    brandHeader.textContent = 'Brand';

    const brandForm: HTMLFormElement = brandFilter.appendChild(document.createElement('form'));
    brandForm.classList.add('brand-form');
    brandForm.classList.add('form');
    const vitexLabel: HTMLLabelElement = brandForm.appendChild(document.createElement('label'));
    vitexLabel.classList.add('brand-checkbox');
    vitexLabel.classList.add('checkbox');
    const vitexInput: HTMLInputElement = vitexLabel.appendChild(document.createElement('input'));
    vitexInput.classList.add('input-checkbox');
    vitexInput.type = 'checkbox';
    const vitexHeader: HTMLSpanElement = vitexLabel.appendChild(document.createElement('span'));
    vitexHeader.textContent = 'Vitex';

    const belitaLabel: HTMLLabelElement = brandForm.appendChild(document.createElement('label'));
    belitaLabel.classList.add('brand-checkbox');
    belitaLabel.classList.add('checkbox');
    const belitaInput: HTMLInputElement = belitaLabel.appendChild(document.createElement('input'));
    belitaInput.type = 'checkbox';
    belitaInput.classList.add('input-checkbox');
    const belitaHeader: HTMLSpanElement = belitaLabel.appendChild(document.createElement('span'));
    belitaHeader.textContent = 'Belita';

    //priceFilter
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

    //stockFilter
    const stockFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    stockFilter.classList.add('filter');

    const stockHeader: HTMLParagraphElement = stockFilter.appendChild(document.createElement('p'));
    stockHeader.classList.add('filter-header');
    stockHeader.textContent = 'In stock';

    const stockLimits: HTMLDivElement = stockFilter.appendChild(document.createElement('div'));
    stockLimits.classList.add('stock-limits');

    const minStock: HTMLParagraphElement = stockLimits.appendChild(document.createElement('p'));
    minStock.classList.add('stock-limit');
    minStock.textContent = `${getMinStock()}`;

    const maxStock: HTMLParagraphElement = stockLimits.appendChild(document.createElement('p'));
    maxStock.classList.add('stock-limit');
    maxStock.textContent = `${getMaxStock()}`;

    const stockControls: HTMLDivElement = stockFilter.appendChild(document.createElement('div'));
    stockControls.classList.add('stock-controls');

    const minStockRange: HTMLInputElement = stockControls.appendChild(document.createElement('input'));
    minStockRange.classList.add('stock-range');
    minStockRange.classList.add('stock-range-from');
    minStockRange.type = 'range';
    minStockRange.value = `${getMinStock()}`;
    minStockRange.min = `${getMinStock()}`;
    minStockRange.max = `${getMaxStock()}`;

    const maxStockRange: HTMLInputElement = stockControls.appendChild(document.createElement('input'));
    maxStockRange.classList.add('stock-range');
    maxStockRange.classList.add('stock-range-to');
    maxStockRange.type = 'range';
    maxStockRange.value = `${getMaxStock()}`;
    maxStockRange.min = `${getMinStock()}`;
    maxStockRange.max = `${getMaxStock()}`;
}
