import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';
import { getSummaryTotalPriceAfterPromo } from '../features/getSummaryTotalPriceAfterPromo';
import { PROMO_CODES, PROMO_DISCOUNT } from '../constants/constants';
import { dropPromo } from './dropPromo';

export function addPromo(event: Event) {
    const input = document.querySelector('.promo__input');
    if (input instanceof HTMLInputElement) {
        input.value = '';
    }
    const applied = document.querySelector('.promo__applied');
    const primaryPrice = document.querySelector('.summary__item_price-before');
    const resultPrice = document.querySelector('.summary__item_price-after');
    if (event.target && event.target instanceof HTMLButtonElement) {
        event.target.classList.add('hidden');
        applied?.classList.add('applied-visible');
        const appliedItem = getHtmlElement({
            parent: '.promo__applied',
            tag: 'li',
            style: ['applied__item_text'],
        });
        if (event.target.previousSibling) {
            appliedItem.textContent = event.target.previousSibling.textContent;
        }

        PROMO_CODES.push(PROMO_DISCOUNT);

        const dropBtn = getHtmlElement({
            parent: '.applied__item_text',
            tag: 'button',
            style: ['button', 'applied__item_button'],
            content: UI.cartSummaryPromoSkipButton,
        });
        dropBtn.addEventListener('click', dropPromo);

        if (resultPrice && resultPrice.lastChild) {
            resultPrice.classList.add('price-after_visible');
            resultPrice.lastChild.textContent = `$${getSummaryTotalPriceAfterPromo()}`;
        }

        primaryPrice?.classList.add('crossed');
    }
}
