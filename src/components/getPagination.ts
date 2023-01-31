import { getInputCount } from './getInputCount';
import { getHtmlElement } from './getHtmlElement';
import { UI } from '../data/UI';

export function getPagination() {
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');
    getHtmlElement({ parentNode: pagination, tag: 'div', style: ['pagination__text'], content: UI.cartListFooterText });
    pagination.append(getInputCount('1'));
    getHtmlElement({
        parentNode: pagination,
        tag: 'div',
        style: ['pagination__text'],
        content: UI.cartListFooterText2,
    });
    getHtmlElement({
        parentNode: pagination,
        tag: 'div',
        style: ['pagination__text', 'pagination__text_pages-count'],
        content: '1',
    });
    return pagination;
}
