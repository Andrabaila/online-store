export function hideCheckout() {
    const checkout = <HTMLDivElement>document.querySelector('.checkout');
    const shadow = <HTMLDivElement>document.querySelector('.shadow');

    checkout.classList.remove('checkout_active');
    shadow.classList.remove('shadow_active');
}
