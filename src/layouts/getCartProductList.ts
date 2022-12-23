import { UI } from '../data/UI';
import { getPagination } from '../components/getPagination';
import { getCartItems } from '../components/getCartItems';
import { getHtmlElement } from '../components/getHtmlElement';
import { getInputCount } from '../components/getInputCount';

export function getCartProductList() {
    const cartList = getHtmlElement({ parent: 'main', tag: 'div', style: ['cart-list'] });

    const listHeader = getHtmlElement({ parent: '.cart-list', tag: 'div', style: ['cart-list__header'] });
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
    listHeader.append(getInputCount('1'));

    const listBody = getCartItems();
    cartList.append(listBody);

    const listFooter = getHtmlElement({ parent: '.cart-list', tag: 'div', style: ['cart-list__footer'] });
    listFooter.append(getPagination());
}
