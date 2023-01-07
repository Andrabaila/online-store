import { clearCheckout } from './clearCheckout';
import { showMessageWithTimer } from './showMessageWithTimer';
import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';
import { cart } from '../data/cart';

export function checkForm() {
    let result = true;
    const messages = document.querySelectorAll('.checkout__message');
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].textContent === '' || messages[i].textContent === '!') {
            messages[i].textContent = 'error';
        }
        if (messages[i].textContent === 'error') {
            result = false;
        }
    }

    if (result) {
        clearCheckout();
        const message = getHtmlElement({ parent: 'main', style: ['message'], content: UI.messageText });
        showMessageWithTimer(message, 3000);
        cart.splice(0, cart.length);
    }
}
