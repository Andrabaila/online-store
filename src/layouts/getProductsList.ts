import { showProduct } from './showProduct';
import { ERROR_MESSAGE } from '../constants/constants';

export async function getProductsList(parent: HTMLDivElement) {
    const productsData = '../assets/products.json';
    let data;
    try {
        const response = await fetch(productsData);
        data = await response.json();
    } catch {
        throw new Error(ERROR_MESSAGE);
    }

    const productList = parent.appendChild(document.createElement('div'));
    productList.classList.add('main__item_product-list');

    console.log(data);
    const { products, ...rest } = data;
    console.log(products);
    for (let i = 0; i < products.length; i += 1) {
        const productItem = productList.appendChild(document.createElement('div'));
        productItem.classList.add('main__item_product');
        productItem.addEventListener('click', showProduct);
    }

    const childElements = <HTMLDivElement[]>Object.values(productList.childNodes);
    for (let i = 0; i < childElements.length; i += 1) {
        childElements[i].style.background = `url(${products[i].thumbnail}) right -3rem center no-repeat #ffffff`;
        childElements[i].style.backgroundSize = '80% auto';

        const name = childElements[i].appendChild(document.createElement('p'));
        name.classList.add('main__item_product-name');
        name.textContent = `${products[i].title.toUpperCase()}`;

        const description = childElements[i].appendChild(document.createElement('p'));
        description.classList.add('main__item_product-description');
        description.textContent = `${products[i].description}`;

        const discount = childElements[i].appendChild(document.createElement('p'));
        discount.innerHTML = `Discount: <b>${products[i].discountPercentage}</b>`;

        const rating = childElements[i].appendChild(document.createElement('p'));
        rating.innerHTML = `Rating: <b>${products[i].rating}</b>`;

        const stock = childElements[i].appendChild(document.createElement('p'));
        stock.innerHTML = `In stock: <b>${products[i].stock}</b>`;

        const brand = childElements[i].appendChild(document.createElement('p'));
        brand.innerHTML = `Brand: <b>${products[i].brand}</b>`;

        const category = childElements[i].appendChild(document.createElement('p'));
        category.innerHTML = `Category: <br><b>${products[i].category}</b>`;

        const price = childElements[i].appendChild(document.createElement('p'));
        price.classList.add('main__item_product-price');
        price.textContent = `$${products[i].price}`;

        const btn = childElements[i].appendChild(document.createElement('button'));
        btn.classList.add('main__item_product-add-button');
        btn.classList.add('button');
        btn.textContent = 'Add to cart';
    }
}
