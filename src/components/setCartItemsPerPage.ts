export function setCartItemsPerPage() {
    const itemsCount = document.querySelectorAll('.cart-list_item').length;
    const maxItemsCount = Number(document.querySelector('.input-count_cart-list')?.childNodes[1].textContent);
    if (itemsCount > maxItemsCount) {
        2 + 0;
    }
}
