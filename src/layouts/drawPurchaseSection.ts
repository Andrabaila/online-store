import { Product } from '../data/types';
import { addToCart } from '../features/addToCart';
import { buyNow } from '../features/buyNow';
import { UI } from '../data/UI';

export function drawPurchaseSection(parent: HTMLElement, data: Product) {
    const price = parent.appendChild(document.createElement('p'));
    price.classList.add('product-block__purchase_price');
    price.textContent = `$${data.price}`;

    const addBtn = parent.appendChild(document.createElement('button'));
    addBtn.classList.add('product-block__purchase_add-button');
    addBtn.classList.add('button');
    addBtn.textContent = UI.addButtonText;
    addBtn.addEventListener('click', addToCart);

    const buyBtn = parent.appendChild(document.createElement('button'));
    buyBtn.classList.add('product-block__purchase_buy-button');
    buyBtn.classList.add('button');
    buyBtn.textContent = UI.buyNowButtonText;
    buyBtn.addEventListener('click', buyNow);
}
