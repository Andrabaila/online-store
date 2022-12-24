export function showCheckout() {
    const shadow = document.querySelector('.shadow');
    if (shadow) {
        shadow.classList.add('shadow_active');
    }

    const checkout = document.querySelector('.checkout');
    if (checkout) {
        checkout.classList.add('checkout_active');
    }
}
