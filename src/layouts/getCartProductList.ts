import { UI } from '../data/UI';
import { getPagination } from '../components/getPagination';
import { getCartItems } from '../components/getCartItems';
import { getHtmlElement } from '../components/getHtmlElement';
import { getInputCount } from '../components/getInputCount';

export function getCartProductList() {
    getHtmlElement({ parent: 'main', tag: 'div', style: ['cart-list__wrapper'] });

    const listHeader = getHtmlElement({ parent: '.cart-list__wrapper', tag: 'div', style: ['cart-list__header'] });
    getHtmlElement({
        parent: '.cart-list__header',
        tag: 'h3',
        style: ['cart-list__header-item'],
        content: UI.cartListTitle,
    });
    getHtmlElement({
        parent: '.cart-list__header',
        tag: 'div',
        style: ['cart-list__header-item', 'cart-list__text'],
        content: UI.cartListHeaderText,
    });
    const itemsInputCount = getInputCount(UI.cartListStartCount);
    itemsInputCount.classList.add('input-count_cart-list');
    listHeader.append(itemsInputCount);

    const listFooter = getHtmlElement({ parent: '.cart-list__wrapper', tag: 'div', style: ['cart-list__footer'] });
    listFooter.append(getPagination());

    const listBody = getCartItems();
    listHeader.after(listBody);
}
