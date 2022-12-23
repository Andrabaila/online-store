import { UI } from '../data/UI';
import { getPagination } from '../components/getPagination';
import { getCartItems } from '../components/getCartItems';
import { getHtmlElement } from '../components/getHtmlElement';
import { getInputCount } from '../components/getInputCount';

export function getCartProductList() {
    const cartList = getHtmlElement('main', 'div', ['cart-list']);

    const listHeader = getHtmlElement('.cart-list', 'div', ['cart-list__header']);
    getHtmlElement('.cart-list__header', 'h3', ['cart-list__header-item'], UI.cartListTitle);
    getHtmlElement('.cart-list__header', 'div', ['cart-list__header-item', 'cart-list__text'], UI.cartListHeaderText);
    listHeader.append(getInputCount('1'));

    const listBody = getCartItems();
    cartList.append(listBody);

    const listFooter = getHtmlElement('.cart-list', 'div', ['cart-list__footer']);
    listFooter.append(getPagination());
}
