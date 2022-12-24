import { getProducts } from '../API/getProducts';
import { showProduct } from './showProduct';

export async function getProductsList(parent: HTMLDivElement) {
    const data = await getProducts();

    const productList: HTMLDivElement = parent.appendChild(document.createElement('div'));
    productList.classList.add('main__item_product-list');

    for (let i = 0; i < data.length; i += 1) {
        const productItem: HTMLDivElement = productList.appendChild(document.createElement('div'));
        productItem.classList.add('main__item_product');
        productItem.addEventListener('click', showProduct);
    }

    const childElements = <HTMLDivElement[]>Object.values(productList.childNodes);
    for (let i = 0; i < childElements.length; i += 1) {
        childElements[i].style.background = `url(${data[i].thumbnail}) right -3rem center no-repeat #ffffff`;
        childElements[i].style.backgroundSize = '80% auto';

        const name = childElements[i].appendChild(document.createElement('p'));
        name.classList.add('main__item_product-name');
        name.textContent = `${data[i].title.toUpperCase()}`;

        const description = childElements[i].appendChild(document.createElement('p'));
        description.classList.add('main__item_product-description');
        description.textContent = `${data[i].description}`;

        const discount = childElements[i].appendChild(document.createElement('p'));
        discount.innerHTML = `Discount: <b>${data[i].discountPercentage}</b>`;

        const rating = childElements[i].appendChild(document.createElement('p'));
        rating.innerHTML = `Rating: <b>${data[i].rating}</b>`;

        const stock = childElements[i].appendChild(document.createElement('p'));
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
        btn.textContent = 'Add to cart';
    }
}
