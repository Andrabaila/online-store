import { setHash } from './setHash';

export function showMessageWithTimer(element: HTMLElement, timeForShowMessage: number) {
    setTimeout(() => {
        element.remove();
        setHash('');
    }, timeForShowMessage);
}
