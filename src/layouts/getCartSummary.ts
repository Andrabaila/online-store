import { UI } from '../data/UI';
import { getHtmlElement } from '../components/getHtmlElement';

export function getCartSummary() {
    const summary = getHtmlElement('main', 'div', ['summary']);

    const summaryTitle = getHtmlElement('.summary', 'h3', ['summary__title'], UI.cartSummaryTitle);

    const summaryItem1 = getHtmlElement('.summary', 'p', ['summary__item']);
    const summaryItem1Text = getHtmlElement('.summary__item', 'span', ['summary__item-text'], UI.cartSummaryText1);
    const summaryValue1 = getHtmlElement('.summary__item', 'span', ['summary__item-value']);

    const summaryItem2 = getHtmlElement('.summary', 'p', ['summary__item']);
    const summaryItem2Text = getHtmlElement('.summary__item', 'span', ['summary__item-text'], UI.cartSummaryText2);
    const summaryValue2 = getHtmlElement('.summary__item', 'span', ['summary__item-value']);

    const summaryItem3 = getHtmlElement('.summary', 'p', ['summary__item']);
    const summaryItem3Text = getHtmlElement('.summary__item', 'span', ['summary__item-text'], UI.cartSummaryText1);
    const summaryValue3 = getHtmlElement('.summary__item', 'span', ['summary__item-value']);

    const promo = getHtmlElement('.summary', 'div', ['promo']);
    const promoTitle = getHtmlElement('.promo', 'h3', ['promo__title'], UI.promoTitle);
    const promoInput = getHtmlElement('.promo', 'input', ['promo__input']);
    const promoButton = getHtmlElement('.promo', 'button', ['button', 'button_promo'], UI.promoButton);

    const summaryItem4 = getHtmlElement('.summary', 'p', ['summary__item']);
    const summaryItem4Text = getHtmlElement('.summary__item', 'span', ['summary__item-text'], UI.cartSummaryText1);
    const summaryValue4 = getHtmlElement('.summary__item', 'span', ['summary__item-value']);

    const summaryItem5 = getHtmlElement('.summary', 'p', ['summary__item']);
    const summaryItem5Text = getHtmlElement('.summary__item', 'span', ['summary__item-text'], UI.cartSummaryText3);
    const summaryValue5 = getHtmlElement('.summary__item', 'span', ['summary__item-value']);

    const buyButton = getHtmlElement('.summary', 'button', ['button', 'button_cart'], UI.cartSummaryText4);
}
