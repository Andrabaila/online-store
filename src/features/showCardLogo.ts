import { REGULAR_EXPRESSIONS } from '../constants/constants';

export function showCardLogo(this: HTMLInputElement, ev: Event): void {
    const target: EventTarget | null = ev.target;
    const cardLogo = document.querySelector('.checkout__card-logo');
    if (target instanceof HTMLInputElement) {
        if (cardLogo instanceof HTMLDivElement) {
            const cardNumber = target.value;
            cardLogo.classList.remove('checkout__card-logo_visa');
            cardLogo.classList.remove('checkout__card-logo_master');
            cardLogo.classList.remove('checkout__card-logo_union');
            if (REGULAR_EXPRESSIONS.visa.test(cardNumber)) {
                cardLogo.classList.add('checkout__card-logo_visa');
            }
            if (REGULAR_EXPRESSIONS.master.test(cardNumber)) {
                cardLogo.classList.add('checkout__card-logo_master');
            }
            if (REGULAR_EXPRESSIONS.union.test(cardNumber)) {
                cardLogo.classList.add('checkout__card-logo_union');
            }
        }
    }
}
