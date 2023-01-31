import { Product } from '../data/types';

export function drawProductDetails(parent: HTMLElement, data: Product) {
    const description = parent.appendChild(document.createElement('p'));
    description.classList.add('details__item');
    description.textContent = `${data.description}`;

    const discount = parent.appendChild(document.createElement('p'));
    discount.classList.add('details__item');
    discount.innerHTML = `Discount: &nbsp;<b>${data.discountPercentage}%</b>`;

    const rating = parent.appendChild(document.createElement('p'));
    rating.classList.add('details__item');
    rating.innerHTML = `Rating: &nbsp;<b>${data.rating}</b>`;

    const stock = parent.appendChild(document.createElement('p'));
    stock.classList.add('details__item');
    stock.innerHTML = `In stock: &nbsp;<b>${data.stock}</b>`;

    const brand = parent.appendChild(document.createElement('p'));
    brand.classList.add('details__item');
    brand.innerHTML = `Brand: &nbsp;<b>${data.brand}</b>`;

    const category = parent.appendChild(document.createElement('p'));
    category.classList.add('details__item');
    category.innerHTML = `Category: &nbsp;<b>${data.category}</b>`;
}
