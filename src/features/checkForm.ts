import { clearCheckout } from './clearCheckout';
import { showMessage } from './showMesage';

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
        showMessage();
    }
}
