import { UI } from '../data/UI';
import { getHtmlElement } from '../components/getHtmlElement';
import { toggleCheckout } from './toggleCheckout';
import { OptionsText } from '../data/types';
import { getSummaryTotalAmount } from '../features/getSummaryTotalAmount';
import { getSummaryTotalPriceBeforePromo } from '../features/getSummaryTotalPriceBeforePromo';
import { getSummaryTotalPriceAfterPromo } from '../features/getSummaryTotalPriceAfterPromo';

export function getCartSummary() {
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

    /* const summaryItem2 = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryItem2Text = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText2,
    });
    const summaryValue2 = getHtmlElement({ parent: '.summary__item', tag: 'span', style: ['summary__item-value'] }); */

    const priceBeforePromo = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
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
    const promoInput = getHtmlElement({ parent: '.promo', tag: 'input', style: ['promo__input'] });
    if (promoInput instanceof HTMLInputElement) promoInput.placeholder = OptionsText.promo;
    const promoComment = getHtmlElement({
        parent: '.promo',
        tag: 'p',
        style: ['summary__item-text_comment'],
        content: UI.cartSummaryPromo,
    });
    const promoButton = getHtmlElement({
        parent: '.promo',
        tag: 'button',
        style: ['button', 'button_promo'],
        content: UI.promoButton,
    });

    const priceAfterPromo = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
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
    priceAfterPromoValue.textContent = `$${getSummaryTotalPriceAfterPromo()}`;

    /* const summaryItem5 = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryItem5Text = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText3,
    });
    const summaryValue5 = getHtmlElement({ parent: '.summary__item', tag: 'span', style: ['summary__item-value'] }); */

    const buyButton = getHtmlElement({
        parent: '.summary',
        tag: 'button',
        style: ['button', 'button_cart'],
        content: UI.cartSummaryText4,
    });

    buyButton.addEventListener('click', toggleCheckout);
}
