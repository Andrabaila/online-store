export function validateAddress(this: HTMLInputElement, ev: Event): boolean | undefined {
    const target: EventTarget | null = ev.target;

    if (target instanceof HTMLInputElement) {
        target.classList.add('input_invalid');
        const message: ChildNode | null = target.nextSibling;
        if (message instanceof HTMLDivElement) {
            message.classList.remove('checkout__message_valid');
            message.textContent = '!';
        }
        const name = target.value;
        const nameArr = name.split(' ');
        if (nameArr.length < 3) {
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
