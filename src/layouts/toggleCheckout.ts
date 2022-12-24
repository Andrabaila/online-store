export function toggleCheckout() {
    const shadow = document.querySelector('.shadow');
    if (shadow) {
        shadow.classList.toggle('shadow_active');
    }

    const checkout = document.querySelector('.checkout');
    if (checkout) {
        checkout.classList.toggle('checkout_active');
    }
}
