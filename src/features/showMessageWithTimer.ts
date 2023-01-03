import { getMainPage } from '../pages/getMainPage';

export function showMessageWithTimer(element: HTMLElement, timeForShowMessage: number) {
    setTimeout(() => {
        element.remove();
        getMainPage();
    }, timeForShowMessage);
}
