import { UI } from '../data/UI';
import { getHtmlElement } from '../components/getHtmlElement';
import { toggleCheckout } from './toggleCheckout';
import { OptionsText } from '../data/types';
import { getSummaryTotalAmount } from '../features/getSummaryTotalAmount';
import { getSummaryTotalPriceBeforePromo } from '../features/getSummaryTotalPriceBeforePromo';
import { showPromo } from '../features/showPromo';
import { addPromo } from '../features/addPromo';
import { PROMO_CODES } from '../constants/constants';
import { dropPromo } from '../features/dropPromo';

export function getCartSummary() {
    PROMO_CODES.splice(0, PROMO_CODES.length);
    const summary = getHtmlElement({ parent: 'main', tag: 'div', style: ['summary'] });

    const savedSummary = localStorage.getItem('summary-andrabaila');
    if (savedSummary) {
        summary.innerHTML = <string>localStorage.getItem('summary-andrabaila');
        document.querySelector('.summary__mg-promo_button')?.addEventListener('click', addPromo);
        document.querySelector('.summary__rs-promo_button')?.addEventListener('click', addPromo);
        const input = document.querySelector('.promo__input');
        if (input instanceof HTMLInputElement) {
            input.addEventListener('input', showPromo);
            if (input.value === '') {
                const rsPromo = document.querySelector('.summary__rs-promo');
                const mgPromo = document.querySelector('.summary__mg-promo');
                rsPromo?.classList.remove('promo-visible');
                mgPromo?.classList.remove('promo-visible');
            }
        }
        document.querySelector('.button_cart')?.addEventListener('click', toggleCheckout);
        document.querySelectorAll('.applied__item_button').forEach((el) => el.addEventListener('click', dropPromo));
    } else {
        getHtmlElement({
            parent: '.summary',
            tag: 'h3',
            style: ['summary__title'],
            content: UI.cartSummaryTitle,
        });

        getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
        getHtmlElement({
            parent: '.summary__item',
            tag: 'span',
            style: ['summary__item-text'],
            content: UI.cartSummaryText3,
        });
        const summaryAmountValue = getHtmlElement({
            parent: '.summary__item',
            tag: 'span',
            style: ['summary__item-value', 'summary__item-value_amount'],
        });
        summaryAmountValue.textContent = `${getSummaryTotalAmount()}`;

        getHtmlElement({
            parent: '.summary',
            tag: 'p',
            style: ['summary__item', 'summary__item_price-before'],
        });
        getHtmlElement({
            parent: '.summary__item',
            tag: 'span',
            style: ['summary__item-text'],
            content: UI.cartSummaryText1,
        });
        const priceBeforePromoValue = getHtmlElement({
            parent: '.summary__item',
            tag: 'span',
            style: ['summary__item-value', 'summary__price-before'],
        });
        priceBeforePromoValue.textContent = `$${getSummaryTotalPriceBeforePromo().toString()}`;

        getHtmlElement({ parent: '.summary', tag: 'div', style: ['promo'] });
        getHtmlElement({
            parent: '.promo',
            tag: 'h3',
            style: ['promo__title'],
            content: UI.promoTitle,
        });

        getHtmlElement({
            parent: '.promo',
            tag: 'ul',
            style: ['promo__applied'],
        });

        getHtmlElement({
            parent: '.promo__applied',
            tag: 'h3',
            style: ['promo__applied_header'],
            content: UI.promoApplied,
        });

        const promoInput = getHtmlElement({ parent: '.promo', tag: 'input', style: ['promo__input'] });
        if (promoInput instanceof HTMLInputElement) promoInput.placeholder = OptionsText.promo;

        getHtmlElement({ parent: '.promo', tag: 'div', style: ['summary__rs-promo', 'promo__item'] });
        getHtmlElement({
            parent: '.summary__rs-promo',
            tag: 'p',
            style: ['summary__rs-promo_text'],
            content: UI.cartSummaryRSPromo,
        });
        const rsPromoBtn = getHtmlElement({
            parent: '.summary__rs-promo',
            tag: 'button',
            style: ['button', 'summary__rs-promo_button'],
            content: UI.cartSummaryPromoAddButton,
        });

        getHtmlElement({ parent: '.promo', tag: 'div', style: ['summary__mg-promo', 'promo__item'] });
        getHtmlElement({
            parent: '.summary__mg-promo',
            tag: 'p',
            style: ['summary__mg-promo_text'],
            content: UI.cartSummaryMGPromo,
        });
        const mgPromoBtn = getHtmlElement({
            parent: '.summary__mg-promo',
            tag: 'button',
            style: ['button', 'summary__mg-promo_button'],
            content: UI.cartSummaryPromoAddButton,
        });
        mgPromoBtn.addEventListener('click', addPromo);
        rsPromoBtn.addEventListener('click', addPromo);

        getHtmlElement({
            parent: '.promo',
            tag: 'p',
            style: ['summary__item-text_comment'],
            content: UI.cartSummaryPromo,
        });

        promoInput.addEventListener('input', showPromo);

        getHtmlElement({
            parent: '.summary',
            tag: 'p',
            style: ['summary__item', 'summary__item_price-after'],
        });
        getHtmlElement({
            parent: '.summary__item',
            tag: 'span',
            style: ['summary__item-text'],
            content: UI.cartSummaryText1,
        });
        getHtmlElement({
            parent: '.summary__item',
            tag: 'span',
            style: ['summary__item-value'],
        });

        const buyButton = getHtmlElement({
            parent: '.summary',
            tag: 'button',
            style: ['button', 'button_cart'],
            content: UI.cartSummaryText4,
        });

        buyButton.addEventListener('click', toggleCheckout);
    }
}
