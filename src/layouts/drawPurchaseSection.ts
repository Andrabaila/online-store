import { Product } from '../data/types';
import { toggleAddRemove } from '../features/toggleAddRemove';
import { UI } from '../data/UI';
import { cart } from '../data/cart';
import { toggleCheckout } from './toggleCheckout';

export function drawPurchaseSection(parent: HTMLElement, data: Product) {
    const price = parent.appendChild(document.createElement('p'));
    price.classList.add('product-block__purchase_price');
    price.textContent = `$${data.price}`;

    const addBtn = parent.appendChild(document.createElement('button'));
    addBtn.classList.add('product-block__purchase_add-button');
    addBtn.classList.add('button');
    addBtn.textContent = UI.addButtonText;
    const id = data.id;
    const idArray = [];
    for (let j = 0; j < cart.length; j++) {
        idArray.push(cart[j].id);
    }
    idArray.includes(id) ? (addBtn.textContent = UI.removeButtonText) : (addBtn.textContent = UI.addButtonText);
    addBtn.addEventListener('click', (event) => toggleAddRemove(event, data));

    const buyBtn = parent.appendChild(document.createElement('button'));
    buyBtn.classList.add('product-block__purchase_buy-button');
    buyBtn.classList.add('button');
    buyBtn.textContent = UI.buyNowButtonText;
    buyBtn.addEventListener('click', toggleCheckout);
}
