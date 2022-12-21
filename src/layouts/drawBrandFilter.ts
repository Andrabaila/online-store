export function drawBrandFilter(parent: HTMLDivElement) {
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
}
