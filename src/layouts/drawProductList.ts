import { Product } from '../data/types';
import { toggleAddRemove } from '../features/toggleAddRemove';
import { UI } from '../data/UI';
import { cart } from '../data/cart';
import { OptionsText } from '../data/types';
import { showNotFound } from '../features/showNotFound';

export function drawProductList(parent: HTMLDivElement, data: Product[]) {
    const childElements = <HTMLDivElement[]>Object.values(parent.childNodes);
    for (let i = 0; i < data.length; i += 1) {
        childElements[i].innerHTML = '';
        childElements[i].style.background = `url(${data[i].thumbnail}) right -3rem center no-repeat #ffffff`;
        childElements[i].style.backgroundSize = '70% auto';

        const id = childElements[i].appendChild(document.createElement('div'));
        id.classList.add('main__item_product-id');
        id.textContent = `${data[i].id}`;

        const name = childElements[i].appendChild(document.createElement('p'));
        name.classList.add('main__item_product-name');
        name.textContent = `${data[i].title.toUpperCase()}`;

        const description = childElements[i].appendChild(document.createElement('p'));
        description.classList.add('main__item_product-description');
        description.textContent = `${data[i].description}`;

        const discount = childElements[i].appendChild(document.createElement('p'));
        discount.innerHTML = `Discount: <b>${data[i].discountPercentage}%</b>`;

        const rating = childElements[i].appendChild(document.createElement('p'));
        rating.innerHTML = `Rating: <b>${data[i].rating}</b>`;

        const stock = childElements[i].appendChild(document.createElement('p'));
        stock.classList.add('main__item_product-stock');
        stock.innerHTML = `In stock: <b>${data[i].stock}</b>`;

        const brand = childElements[i].appendChild(document.createElement('p'));
        brand.innerHTML = `Brand: <b>${data[i].brand}</b>`;

        const category = childElements[i].appendChild(document.createElement('p'));
        category.innerHTML = `Category: <br><b>${data[i].category}</b>`;

        const price = childElements[i].appendChild(document.createElement('p'));
        price.classList.add('main__item_product-price');
        price.textContent = `$${data[i].price}`;

        const btn = childElements[i].appendChild(document.createElement('button'));
        btn.classList.add('main__item_product-add-button');
        btn.classList.add('button');

        btn.addEventListener('click', (event) => toggleAddRemove(event, data[i]));

        const dataId = data[i].id;
        const idArray = [];
        for (let j = 0; j < cart.length; j++) {
            idArray.push(cart[j].id);
        }
        idArray.includes(dataId) ? (btn.textContent = UI.removeButtonText) : (btn.textContent = UI.addButtonText);
    }

    const found = document.querySelector('.main__item_options-found');
    if (found instanceof HTMLParagraphElement) {
        if (data.length === 0) {
            found.textContent = `${OptionsText.found}0`;
            showNotFound(parent);
        }
        found.textContent = `${OptionsText.found}${data.length}`;
    }
}
