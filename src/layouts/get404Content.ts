import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';

export function get404Content() {
    getHtmlElement({ parent: 'main', tag: 'div', style: ['page-not-found'] });
    getHtmlElement({
        parent: '.page-not-found',
        tag: 'h3',
        style: ['page-not-found__title'],
        content: UI.pageNotFoundTitle,
    });

    getHtmlElement({
        parent: '.page-not-found',
        tag: 'p',
        style: ['page-not-found__text'],
        content: UI.pageNotFoundText,
    });
}
