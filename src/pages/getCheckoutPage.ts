import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';
import { toggleCheckout } from '../layouts/toggleCheckout';
import { validateInput } from '../features/validateInput';
import { showCardLogo } from '../features/showCardLogo';
import { autoFill } from '../features/autoFill';
import { checkForm } from '../features/checkForm';

export function getCheckoutPage() {
    const shadow = getHtmlElement({ parent: 'body', style: ['shadow'] });
    shadow.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: 'main', style: ['checkout'] });
    const xButton = getHtmlElement({ parent: '.checkout', style: ['button', 'button_x'], content: 'x' });
    xButton.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: '.checkout', tag: 'h3', style: ['checkout__title'], content: UI.checkoutTitle1 });

    const inputsToDo = ['name', 'phone', 'address', 'email'];

    for (let i = 0; i < inputsToDo.length; i++) {
        getHtmlElement({ parent: '.checkout', style: ['checkout__input-container'] });
        const input = <HTMLInputElement>getHtmlElement({
            parent: '.checkout__input-container',
            tag: 'input',
            style: ['input', 'input_checkout'],
            name: inputsToDo[i],
        });
        input.placeholder = UI[`checkoutPlaceholder${i + 1}`];
        input.addEventListener('keyup', validateInput);
        getHtmlElement({ parent: '.checkout__input-container', style: ['checkout__message'] });
    }

    getHtmlElement({ parent: '.checkout', tag: 'h3', style: ['checkout__title'], content: UI.checkoutTitle2 });

    getHtmlElement({ parent: '.checkout', style: ['card-data'] });
    getHtmlElement({ parent: '.card-data', style: ['checkout__input-container_wide'] });
    getHtmlElement({ parent: '.checkout__input-container_wide', style: ['checkout__card-logo'] });

    const inputCardNumber = <HTMLInputElement>getHtmlElement({
        parent: '.checkout__input-container_wide',
        tag: 'input',
        style: ['input', 'input_checkout'],
        name: 'cardNumber',
    });
    inputCardNumber.placeholder = UI.checkoutPlaceholder5;
    inputCardNumber.addEventListener('keyup', validateInput);
    inputCardNumber.addEventListener('keyup', showCardLogo);
    getHtmlElement({ parent: '.checkout__input-container_wide', style: ['checkout__message'] });

    getHtmlElement({ parent: '.card-data', style: ['card-data__container'] });
    getHtmlElement({ parent: '.card-data__container', style: ['checkout__input-container'] });
    getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'label',
        style: ['card-data__label'],
        content: UI.checkoutLabel1,
    });
    const inputCardDate = <HTMLInputElement>getHtmlElement({
        parent: '.card-data__label',
        tag: 'input',
        style: ['input', 'card-data__input'],
        name: 'cardDate',
    });
    inputCardDate.placeholder = UI.checkoutPlaceholder6;
    inputCardDate.addEventListener('keyup', validateInput);
    inputCardDate.addEventListener('keyup', autoFill);
    getHtmlElement({ parent: '.card-data__label', style: ['checkout__message'] });

    getHtmlElement({ parent: '.card-data__container', style: ['checkout__input-container'] });
    getHtmlElement({
        parent: '.checkout__input-container',
        tag: 'label',
        style: ['card-data__label'],
        content: UI.checkoutLabel2,
    });
    const inputCardCode = <HTMLInputElement>getHtmlElement({
        parent: '.card-data__label',
        tag: 'input',
        style: ['input', 'card-data__input'],
        name: 'cardCode',
    });
    inputCardCode.placeholder = UI.checkoutPlaceholder7;
    inputCardCode.addEventListener('keyup', validateInput);
    getHtmlElement({ parent: '.card-data__label', style: ['checkout__message'] });

    const submitButton = getHtmlElement({
        parent: '.checkout',
        tag: 'button',
        style: ['button', 'button_checkout'],
        content: UI.checkoutButton,
    });
    submitButton.addEventListener('click', checkForm);
}
