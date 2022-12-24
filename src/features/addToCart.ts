import { UI } from '../data/UI';

export function addToCart(this: HTMLButtonElement, event: MouseEvent) {
    if (this.textContent === UI.addButtonText) {
        this.textContent = UI.removeButtonText;
    } else {
        this.textContent = UI.addButtonText;
    }

    event.stopPropagation();
}
