import { getHtmlElement } from '../components/getHtmlElement';
import { UI } from '../data/UI';
import { toggleCheckout } from '../layouts/toggleCheckout';

export function getCheckoutPage() {
    const shadow = getHtmlElement({ parent: 'body', style: ['shadow'] });
    shadow.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: 'main', style: ['checkout'] });
    const xButton = getHtmlElement({ parent: '.checkout', style: ['button', 'button_x'], content: 'x' });
    xButton.addEventListener('click', toggleCheckout);
    getHtmlElement({ parent: '.checkout', tag: 'h3', style: ['checkout__title'], content: UI.checkoutTitle1 });
    const input1 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout', tag: 'input', style: ['input', 'checkout__input'] })
    );
    input1.placeholder = UI.checkoutPlaceholder1;
    const input2 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout', tag: 'input', style: ['input', 'checkout__input'] })
    );
    input2.placeholder = UI.checkoutPlaceholder2;
    const input3 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout', tag: 'input', style: ['input', 'checkout__input'] })
    );
    input3.placeholder = UI.checkoutPlaceholder3;
    const input4 = <HTMLInputElement>(
        getHtmlElement({ parent: '.checkout', tag: 'input', style: ['input', 'checkout__input'] })
    );
    input4.placeholder = UI.checkoutPlaceholder4;
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
