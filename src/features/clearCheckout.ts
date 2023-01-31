import { getCheckoutPage } from '../pages/getCheckoutPage';

export function clearCheckout() {
    document.querySelector('.shadow')?.remove();
    document.querySelector('.checkout')?.remove();
    getCheckoutPage();
}
