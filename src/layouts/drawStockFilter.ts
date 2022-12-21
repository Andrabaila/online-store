import { getMinStock } from './getMinStock';
import { getMaxStock } from './getMaxStock';

export function drawStockFilter(parent: HTMLDivElement) {
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
