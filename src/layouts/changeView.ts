export function changeView(this: HTMLDivElement, event: MouseEvent) {
    const small = document.querySelector('.main__item_options-small');
    const smallCells = document.querySelectorAll('.main__item_options-small-cell');
    const large = document.querySelector('.main__item_options-large');
    const largeCells = document.querySelectorAll('.main__item_options-large-cell');

    for (let i = 0; i < smallCells.length; i += 1) {
        if (event.target === small || event.target === smallCells[i]) {
            small?.classList.add('active-view');
            large?.classList.remove('active-view');
            document.querySelector('.main__item_product-list')?.classList.remove('double-column-list');
        }
    }
    for (let i = 0; i < largeCells.length; i += 1) {
        if (event.target === large || event.target === largeCells[i]) {
            large?.classList.add('active-view');
            small?.classList.remove('active-view');
            document.querySelector('.main__item_product-list')?.classList.add('double-column-list');
        }
    }
}
