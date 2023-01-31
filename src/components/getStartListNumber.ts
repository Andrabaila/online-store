export function getStartListNumber() {
    const pageNumber = Number(
        document.querySelectorAll('.input-count')[document.querySelectorAll('.input-count').length - 1].childNodes[1]
            .textContent
    );
    const maxItemsCount = Number(document.querySelector('.input-count_cart-list')?.childNodes[1].textContent);
    const startNumber = maxItemsCount * (pageNumber - 1) + 1;
    return startNumber;
}
