import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';
import { toggleCheckout } from '../layouts/toggleCheckout';
import { validateInput } from '../features/validateInput';
import { showCardLogo } from '../features/showCardLogo';
import { autoFill } from '../features/autoFill';

export function getCheckoutPage() {
    const shadow = getHtmlElement({ parent: 'body', style: ['shadow'] });
    shadow.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: 'main', style: ['checkout'] });
    const xButton = getHtmlElement({ parent: '.checkout', style: ['button', 'button_x'], content: 'x' });
    xButton.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: '.checkout', tag: 'h3', style: ['checkout__title'], content: UI.checkoutTitle1 });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input1 = <HTMLInputElement>getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'input',
        style: ['input', 'input_checkout'],
        name: 'name',
    });
    input1.placeholder = UI.checkoutPlaceholder1;
    input1.addEventListener('keyup', validateInput);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input2 = <HTMLInputElement>getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'input',
        style: ['input', 'input_checkout'],
        name: 'phone',
    });
    input2.placeholder = UI.checkoutPlaceholder2;
    input2.addEventListener('keyup', validateInput);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input3 = <HTMLInputElement>getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'input',
        style: ['input', 'input_checkout'],
        name: 'address',
    });
    input3.placeholder = UI.checkoutPlaceholder3;
    input3.addEventListener('keyup', validateInput);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
    const input4 = <HTMLInputElement>getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'input',
        style: ['input', 'input_checkout'],
        name: 'email',
    });
    input4.placeholder = UI.checkoutPlaceholder4;
    input4.addEventListener('keyup', validateInput);
    getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });

    getHtmlElement({ parent: '.checkout', tag: 'h3', style: ['checkout__title'], content: UI.checkoutTitle2 });

    getHtmlElement({ parent: '.checkout', style: ['card-data'] });
    getHtmlElement({ parent: '.card-data', style: ['checkout__input-container_wide'] });
    getHtmlElement({ parent: '.checkout__input-container_wide', style: ['checkout__card-logo'] });

    const input5 = <HTMLInputElement>getHtmlElement({
        parent: '.checkout__input-container_wide',
        tag: 'input',
        style: ['input', 'input_checkout'],
        name: 'cardNumber',
    });
    input5.placeholder = UI.checkoutPlaceholder5;
    input5.addEventListener('keyup', validateInput);
    input5.addEventListener('keyup', showCardLogo);
    getHtmlElement({ parent: '.checkout__input-container_wide', style: ['checkout__message'] });

    getHtmlElement({ parent: '.card-data', style: ['card-data__container'] });
    getHtmlElement({ parent: '.card-data__container', style: ['checkout__input-container'] });
    getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'label',
        style: ['card-data__label'],
        content: UI.checkoutLabel1,
    });
    const input6 = <HTMLInputElement>getHtmlElement({
        parent: '.card-data__label',
        tag: 'input',
        style: ['input', 'card-data__input'],
        name: 'cardDate',
    });
    input6.placeholder = UI.checkoutPlaceholder6;
    input6.addEventListener('keyup', validateInput);
    input6.addEventListener('keyup', autoFill);
    getHtmlElement({ parent: '.card-data__label', style: ['checkout__message'] });

    getHtmlElement({ parent: '.card-data__container', style: ['checkout__input-container'] });
    getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'label',
        style: ['card-data__label'],
        content: UI.checkoutLabel2,
    });
    const input7 = <HTMLInputElement>getHtmlElement({
        parent: '.card-data__label',
        tag: 'input',
        style: ['input', 'card-data__input'],
        name: 'cardCode',
    });
    input7.placeholder = UI.checkoutPlaceholder7;
    input7.addEventListener('keyup', validateInput);
    getHtmlElement({ parent: '.card-data__label', style: ['checkout__message'] });

    getHtmlElement({
        parent: '.checkout',
        tag: 'button',
        style: ['button', 'button_checkout'],
        content: UI.checkoutButton,
    });
}
