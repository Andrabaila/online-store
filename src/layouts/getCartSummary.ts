import { UI } from '../data/UI';
import { getHtmlElement } from '../components/getHtmlElement';
import { toggleCheckout } from './toggleCheckout';
import { OptionsText } from '../data/types';
import { getSummaryTotalAmount } from '../features/getSummaryTotalAmount';
import { getSummaryTotalPriceBeforePromo } from '../features/getSummaryTotalPriceBeforePromo';
import { showPromo } from '../features/showPromo';
import { addPromo } from '../features/addPromo';
import { PROMO_CODES } from '../constants/constants';

export function getCartSummary() {
    PROMO_CODES.splice(0, PROMO_CODES.length);
    const summary = getHtmlElement({ parent: 'main', tag: 'div', style: ['summary'] });

    const summaryTitle = getHtmlElement({
        parent: '.summary',
        tag: 'h3',
        style: ['summary__title'],
        content: UI.cartSummaryTitle,
    });

    const summaryAmount = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryAmountText = getHtmlElement({
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

    const priceBeforePromo = getHtmlElement({
        parent: '.summary',
        tag: 'p',
        style: ['summary__item', 'summary__item_price-before'],
    });
    const priceBeforePromoText = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText1,
    });
    const priceBeforePromoValue = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-value'],
    });
    priceBeforePromoValue.textContent = `$${getSummaryTotalPriceBeforePromo().toString()}`;

    const promo = getHtmlElement({ parent: '.summary', tag: 'div', style: ['promo'] });
    const promoTitle = getHtmlElement({ parent: '.promo', tag: 'h3', style: ['promo__title'], content: UI.promoTitle });

    const promoApplied = getHtmlElement({
        parent: '.promo',
        tag: 'ul',
        style: ['promo__applied'],
    });

    const promoAppliedHeader = getHtmlElement({
        parent: '.promo__applied',
        tag: 'h3',
        style: ['promo__applied_header'],
        content: UI.promoApplied,
    });

    const promoInput = getHtmlElement({ parent: '.promo', tag: 'input', style: ['promo__input'] });
    if (promoInput instanceof HTMLInputElement) promoInput.placeholder = OptionsText.promo;

    const rsPromo = getHtmlElement({ parent: '.promo', tag: 'div', style: ['summary__rs-promo', 'promo__item'] });
    const rsPromoText = getHtmlElement({
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

    const mgPromo = getHtmlElement({ parent: '.promo', tag: 'div', style: ['summary__mg-promo', 'promo__item'] });
    const mgPromoText = getHtmlElement({
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

    const promoComment = getHtmlElement({
        parent: '.promo',
        tag: 'p',
        style: ['summary__item-text_comment'],
        content: UI.cartSummaryPromo,
    });

    promoInput.addEventListener('input', showPromo);

    const priceAfterPromo = getHtmlElement({
        parent: '.summary',
        tag: 'p',
        style: ['summary__item', 'summary__item_price-after'],
    });
    const priceAfterPromoText = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText1,
    });
    const priceAfterPromoValue = getHtmlElement({
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
