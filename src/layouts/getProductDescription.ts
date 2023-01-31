import { Product } from '../data/types';
import { drawPhotoBlock } from './drawPhotoBlock';
import { drawProductDetails } from './drawProductDetails';
import { drawPurchaseSection } from './drawPurchaseSection';

export function getProductDescription(parent: HTMLElement, data: Product) {
    const product: HTMLDivElement = parent.appendChild(document.createElement('div'));
    product.classList.add('product-block');

    const name = product.appendChild(document.createElement('p'));
    name.classList.add('product-block__title');
    name.textContent = `${data.title.toUpperCase()}`;

    const productInfo: HTMLDivElement = product.appendChild(document.createElement('div'));
    productInfo.classList.add('product-block__info');

    const photos: HTMLElement = productInfo.appendChild(document.createElement('section'));
    photos.classList.add('product-block__photos');

    drawPhotoBlock(photos, data);

    const productDetails: HTMLElement = productInfo.appendChild(document.createElement('section'));
    productDetails.classList.add('product-block__details');

    drawProductDetails(productDetails, data);

    const productPurchase: HTMLElement = productInfo.appendChild(document.createElement('section'));
    productPurchase.classList.add('product-block__purchase');

    drawPurchaseSection(productPurchase, data);
}
