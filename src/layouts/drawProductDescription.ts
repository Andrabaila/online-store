import { Product } from '../data/types';
import { addToCart } from '../features/addToCart';
import { buyNow } from '../features/buyNow';
import { UI } from '../data/UI';

export function drawProductDescription(parent: HTMLElement, data: Product) {
    const product: HTMLDivElement = parent.appendChild(document.createElement('div'));
    product.classList.add('product-block');

    const name = product.appendChild(document.createElement('p'));
    name.classList.add('product-block__title');
    name.textContent = `${data.title.toUpperCase()}`;

    const productInfo: HTMLDivElement = product.appendChild(document.createElement('div'));
    productInfo.classList.add('product-block__info');

    const photos: HTMLElement = productInfo.appendChild(document.createElement('section'));
    photos.classList.add('product-block__photos');
    for (let i = 0; i < data.images.length; i++) {
        const photo: HTMLImageElement = photos.appendChild(document.createElement('img'));
        photo.classList.add('photo');
        photo.src = data.images[i];
    }

    const productDetails: HTMLElement = productInfo.appendChild(document.createElement('section'));
    productDetails.classList.add('product-block__details');

    const description = productDetails.appendChild(document.createElement('p'));
    description.classList.add('main__item_product-description');
    description.textContent = `${data.description}`;

    const discount = productDetails.appendChild(document.createElement('p'));
    discount.innerHTML = `Discount: <b>${data.discountPercentage}</b>`;

    const rating = productDetails.appendChild(document.createElement('p'));
    rating.innerHTML = `Rating: <b>${data.rating}</b>`;

    const stock = productDetails.appendChild(document.createElement('p'));
    stock.innerHTML = `In stock: <b>${data.stock}</b>`;

    const brand = productDetails.appendChild(document.createElement('p'));
    brand.innerHTML = `Brand: <b>${data.brand}</b>`;

    const category = productDetails.appendChild(document.createElement('p'));
    category.innerHTML = `Category: <b>${data.category}</b>`;

    const productPurchase: HTMLElement = productInfo.appendChild(document.createElement('section'));
    productPurchase.classList.add('product-block__purchase');

    const price = productPurchase.appendChild(document.createElement('p'));
    price.classList.add('main__item_product-price');
    price.textContent = `$${data.price}`;

    const addBtn = productPurchase.appendChild(document.createElement('button'));
    addBtn.classList.add('main__item_product-add-button');
    addBtn.classList.add('button');
    addBtn.textContent = UI.addButtonText;
    addBtn.addEventListener('click', addToCart);

    const buyBtn = productPurchase.appendChild(document.createElement('button'));
    buyBtn.classList.add('main__item_product-add-button');
    buyBtn.classList.add('button');
    buyBtn.textContent = UI.buyNowButtonText;
    buyBtn.addEventListener('click', buyNow);
}
