import { CARD_CODE_REG_EXP } from '../constants/constants';

export function validateCardCode(this: HTMLInputElement, ev: Event): boolean | undefined {
    const target: EventTarget | null = ev.target;

    if (target instanceof HTMLInputElement) {
        target.classList.add('input_invalid');
        const message: ChildNode | null = target.nextSibling;
        if (message instanceof HTMLDivElement) {
            message.classList.remove('checkout__message_valid');
            message.textContent = '!';
        }
        const cardCode = target.value;
        if (cardCode.length === 0 || !CARD_CODE_REG_EXP.test(cardCode)) {
            return false;
        }
        if (message instanceof HTMLDivElement) {
            message.textContent = String.fromCharCode(10003);
            message.classList.add('checkout__message_valid');
        }
        target.classList.remove('input_invalid');
        target.classList.add('input_valid');

        return true;
    }
}
