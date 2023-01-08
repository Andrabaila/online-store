import { getSummaryTotalPriceAfterPromo } from '../features/getSummaryTotalPriceAfterPromo';
import { PROMO_CODES } from '../data/promo';

export function dropPromo(event: Event) {
    const applied = document.querySelector('.promo__applied');
    const primaryPrice = document.querySelector('.summary__item_price-before');
    const resultPrice = document.querySelector('.summary__item_price-after');
    if (event.target && event.target instanceof HTMLButtonElement) {
        const appliedItem = event.target.closest('li');
        appliedItem?.remove();
        PROMO_CODES.shift();
        if (!applied?.firstChild?.nextSibling) {
            applied?.classList.remove('applied-visible');
            primaryPrice?.classList.remove('crossed');
            if (resultPrice) resultPrice.classList.remove('price-after_visible');
        }
        document.querySelector('.summary__mg-promo_button')?.classList.remove('hidden');
        document.querySelector('.summary__rs-promo_button')?.classList.remove('hidden');
        if (resultPrice && resultPrice.lastChild) {
            resultPrice.lastChild.textContent = `$${getSummaryTotalPriceAfterPromo()}`;
        }
    }
}
