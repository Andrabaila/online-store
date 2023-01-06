export async function drawRangeFilter(parent: HTMLElement, name: string) {
    const rangeFilter: HTMLDivElement = parent.appendChild(document.createElement('div'));
    rangeFilter.classList.add('filter');

    const rangeHeader: HTMLHeadingElement = rangeFilter.appendChild(document.createElement('h3'));
    rangeHeader.classList.add('filter-header');
    rangeHeader.textContent = name;

    const rangeLimits: HTMLDivElement = rangeFilter.appendChild(document.createElement('div'));
    rangeLimits.classList.add('limits');

    for (let i = 0; i < 2; i += 1) {
        const limit: HTMLParagraphElement = rangeLimits.appendChild(document.createElement('p'));
        limit.classList.add('limit');
    }

    const controls: HTMLDivElement = rangeFilter.appendChild(document.createElement('div'));
    controls.classList.add('controls');

    const minRange: HTMLInputElement = controls.appendChild(document.createElement('input'));
    minRange.classList.add('range');
    minRange.classList.add('range-from');
    minRange.type = 'range';

    const maxRange: HTMLInputElement = controls.appendChild(document.createElement('input'));
    maxRange.classList.add('range');
    maxRange.classList.add('range-to');
    maxRange.type = 'range';
    if (name === 'Price') {
        maxRange.step = '0.1';
        minRange.step = '0.1';
    } else {
        minRange.step = '1';
        maxRange.step = '1';
    }
}
