import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';
import { getMainPage } from '../pages/getMainPage';

export function showMessage() {
    const message = getHtmlElement({ parent: 'main', style: ['message'], content: UI.messageText });
    setTimeout(() => {
        message.remove();
        getMainPage();
    }, 3000);
}
