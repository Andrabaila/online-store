import { getInputCount } from './getInputCount';
import { getHtmlElement } from './getHtmlElement';
import { UI } from '../data/UI';

export function getPagination() {
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');
    getHtmlElement(pagination, 'div', ['pagination__text'], UI.cartListFooterText);
    pagination.append(getInputCount('1'));
    return pagination;
}
