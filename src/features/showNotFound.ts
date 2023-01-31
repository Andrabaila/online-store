export function showNotFound(parent: HTMLDivElement) {
    const notFound = document.createElement('p');
    parent.prepend(notFound);

    notFound.textContent = 'No products found';
    notFound.classList.add('main__not-found');
}
