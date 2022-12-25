import { PHONE_CHARS } from '../constants/constants';

export function validatePhone(this: HTMLInputElement, ev: Event): boolean | undefined {
    const target: EventTarget | null = ev.target;

    if (target instanceof HTMLInputElement) {
        target.classList.add('input_invalid');
        const message: ChildNode | null = target.nextSibling;
        if (message instanceof HTMLDivElement) {
            message.classList.remove('checkout__message_valid');
            message.textContent = '!';
        }
        const phoneNumber = target.value;

        if (phoneNumber.length < 9 || phoneNumber[0] !== PHONE_CHARS[0]) {
            return false;
        }

        for (let j = 0; j < phoneNumber.length; j++) {
            let isCharValid = false;
            for (let k = 0; k < PHONE_CHARS.length; k++) {
                if (phoneNumber[j] === PHONE_CHARS[k]) {
                    isCharValid = true;
                }
            }
            if (isCharValid === false) {
                return false;
            }
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
