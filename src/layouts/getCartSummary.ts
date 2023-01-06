import { UI } from '../data/UI';
import { getHtmlElement } from '../components/getHtmlElement';
import { toggleCheckout } from './toggleCheckout';

export function getCartSummary() {
    const summary = getHtmlElement({ parent: 'main', tag: 'div', style: ['summary'] });

    const summaryTitle = getHtmlElement({
        parent: '.summary',
        tag: 'h3',
        style: ['summary__title'],
        content: UI.cartSummaryTitle,
    });

    const summaryItem1 = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryItem1Text = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText3,
    });
    const summaryValue1 = getHtmlElement({ parent: '.summary__item', tag: 'span', style: ['summary__item-value'] });

    const summaryItem2 = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryItem2Text = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText2,
    });
    const summaryValue2 = getHtmlElement({ parent: '.summary__item', tag: 'span', style: ['summary__item-value'] });

    const summaryItem3 = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryItem3Text = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText1,
    });
    const summaryValue3 = getHtmlElement({ parent: '.summary__item', tag: 'span', style: ['summary__item-value'] });

    const promo = getHtmlElement({ parent: '.summary', tag: 'div', style: ['promo'] });
    const promoTitle = getHtmlElement({ parent: '.promo', tag: 'h3', style: ['promo__title'], content: UI.promoTitle });
    const promoInput = getHtmlElement({ parent: '.promo', tag: 'input', style: ['promo__input'] });
    const promoButton = getHtmlElement({
        parent: '.promo',
        tag: 'button',
        style: ['button', 'button_promo'],
        content: UI.promoButton,
    });

    const summaryItem4 = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryItem4Text = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText1,
    });
    const summaryValue4 = getHtmlElement({ parent: '.summary__item', tag: 'span', style: ['summary__item-value'] });

    const summaryItem5 = getHtmlElement({ parent: '.summary', tag: 'p', style: ['summary__item'] });
    const summaryItem5Text = getHtmlElement({
        parent: '.summary__item',
        tag: 'span',
        style: ['summary__item-text'],
        content: UI.cartSummaryText3,
    });
    const summaryValue5 = getHtmlElement({ parent: '.summary__item', tag: 'span', style: ['summary__item-value'] });

    const buyButton = getHtmlElement({
        parent: '.summary',
        tag: 'button',
        style: ['button', 'button_cart'],
        content: UI.cartSummaryText4,
    });

    buyButton.addEventListener('click', toggleCheckout);
}
