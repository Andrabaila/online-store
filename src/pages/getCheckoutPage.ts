import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';
import { toggleCheckout } from '../layouts/toggleCheckout';
import { validateName } from '../features/validateName';
import { validatePhone } from '../features/validatePhone';
import { validateAddress } from '../features/validateAddress';
import { validateEmail } from '../features/validateEmail';

export function getCheckoutPage() {
    const shadow = getHtmlElement({ parent: 'body', style: ['shadow'] });
    shadow.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: 'main', style: ['checkout'] });
    const xButton = getHtmlElement({ parent: '.checkout', style: ['button', 'button_x'], content: 'x' });
    xButton.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: '.checkout', tag: 'h3', style: ['checkout__title'], content: UI.checkoutTitle1 });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input1 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout__input-container', tag: 'input', style: ['input', 'input_checkout'] })
    );
    input1.placeholder = UI.checkoutPlaceholder1;
    input1.addEventListener('change', validateName);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input2 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout__input-container', tag: 'input', style: ['input', 'input_checkout'] })
    );
    input2.placeholder = UI.checkoutPlaceholder2;
    input2.addEventListener('change', validatePhone);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input3 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout__input-container', tag: 'input', style: ['input', 'input_checkout'] })
    );
    input3.placeholder = UI.checkoutPlaceholder3;
    input3.addEventListener('change', validateAddress);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input4 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout__input-container', tag: 'input', style: ['input', 'input_checkout'] })
    );
    input4.placeholder = UI.checkoutPlaceholder4;
    input4.addEventListener('change', validateEmail);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', tag: 'h3', style: ['checkout__title'], content: UI.checkoutTitle2 });
    getHtmlElement({ parent: '.checkout', style: ['card-data'] });
    const input5 = <HTMLInputElement>getHtmlElement({
        parent: '.card-data',
        tag: 'input',
        style: ['input', 'checkout__input', 'checkout__input_wide'],
    });
    input5.placeholder = UI.checkoutPlaceholder5;
    getHtmlElement({ parent: '.card-data', style: ['card-data__container'] });
    getHtmlElement({
        parent: '.card-data__container',
        tag: 'label',
        style: ['card-data__label'],
        content: UI.checkoutLabel1,
    });
    const input6 = <HTMLInputElement>getHtmlElement({
        parent: '.card-data__label',
        tag: 'input',
        style: ['input', 'checkout__input', 'card-data__input'],
    });
    input6.placeholder = UI.checkoutPlaceholder6;
    getHtmlElement({
        parent: '.card-data__container',
        tag: 'label',
        style: ['card-data__label'],
        content: UI.checkoutLabel2,
    });
    const input7 = <HTMLInputElement>getHtmlElement({
        parent: '.card-data__label',
        tag: 'input',
        style: ['input', 'checkout__input', 'card-data__input'],
    });
    input7.placeholder = UI.checkoutPlaceholder7;
    getHtmlElement({
        parent: '.checkout',
        tag: 'button',
        style: ['button', 'button_checkout'],
        content: UI.checkoutButton,
    });
}
