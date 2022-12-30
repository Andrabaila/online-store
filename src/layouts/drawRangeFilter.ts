export function drawRangeFilter(parent: HTMLElement, name: string, array: string[]) {
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
    minRange.max = `${array[1]}`;

    const maxRange: HTMLInputElement = controls.appendChild(document.createElement('input'));
    maxRange.classList.add('range');
    maxRange.classList.add('range-to');
    maxRange.type = 'range';
    maxRange.value = `${array[1]}`;
    maxRange.min = `${array[0]}`;
    maxRange.max = `${array[1]}`;
}
