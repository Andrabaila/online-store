import { REGULAR_EXPRESSIONS } from '../constants/constants';

export function autoFill(this: HTMLInputElement, ev: Event): void {
    const target: EventTarget | null = ev.target;
    const cardMonth = document.querySelector('.checkout__card-logo');
    if (target instanceof HTMLInputElement) {
        if (cardMonth instanceof HTMLDivElement) {
            const cardDate = target.value;
            if (REGULAR_EXPRESSIONS.month.test(cardDate)) {
                target.value += '/';
            }
        }
    }
}
