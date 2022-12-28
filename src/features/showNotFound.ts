export function showNotFound(parent: HTMLDivElement) {
    parent.textContent = 'No products found';
    parent.classList.add('main__not-found');
}
