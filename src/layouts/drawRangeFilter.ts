import { controlMinRange } from '../features/controlMinRange';
import { controlMaxRange } from '../features/controlMaxRange';
import { data } from '../data/data';
import { getLinkedData } from '../features/getLinkedData';

export async function drawRangeFilter(parent: HTMLElement, name: string, array: string[]) {
    const rangeFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    rangeFilter.classList.add('filter');

    const rangeHeader: HTMLHeadingElement = rangeFilter.appendChild(document.createElement('h3'));
    rangeHeader.classList.add('filter-header');
    rangeHeader.textContent = name;

    const rangeLimits: HTMLDivElement = rangeFilter.appendChild(document.createElement('div'));
    rangeLimits.classList.add('limits');

    for (let i = 0; i < array.length; i += 1) {
        const limit: HTMLParagraphElement = rangeLimits.appendChild(document.createElement('p'));
        limit.classList.add('limit');
        name === 'Price' ? (limit.textContent = `$${array[i]}`) : (limit.textContent = `${array[i]}`);
    }

    const controls: HTMLDivElement = rangeFilter.appendChild(document.createElement('div'));
    controls.classList.add('controls');

    const minRange: HTMLInputElement = controls.appendChild(document.createElement('input'));
    minRange.classList.add('range');
    minRange.classList.add('range-from');
    minRange.type = 'range';
    minRange.value = `${array[0]}`;
    minRange.min = `${array[0]}`;

    const maxRange: HTMLInputElement = controls.appendChild(document.createElement('input'));
    maxRange.classList.add('range');
    maxRange.classList.add('range-to');
    maxRange.type = 'range';
    maxRange.min = `${array[0]}`;
    if (name === 'Price') {
        maxRange.step = '0.01';
        minRange.step = '0.01';
    } else {
        minRange.step = '1';
        maxRange.step = '1';
    }
    maxRange.max = `${array[1]}`;
    minRange.max = `${array[1]}`;
    maxRange.value = `${array[1]}`;

    const limits = <NodeListOf<HTMLParagraphElement>>document.querySelectorAll('.limit');
    const dataList = getLinkedData(await data);

    minRange.addEventListener('input', (event) => controlMinRange(event, maxRange, limits, name, dataList));
    maxRange.addEventListener('input', (event) => controlMaxRange(event, minRange, limits, name, dataList));
}
