export function updateCartAmount(amount: string) {
    const cartTotalAmount = document.querySelector('.products-in-cart');
    if (cartTotalAmount instanceof HTMLDivElement) {
        cartTotalAmount.textContent = amount;
    }
}
