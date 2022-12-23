import { showProduct } from './showProduct';

export async function getProductsList(parent: HTMLDivElement) {
    const products = '../assets/products.json';
    const response = await fetch(products);
    const data = await response.json();

    const productList = parent.appendChild(document.createElement('div'));
    productList.classList.add('main__item_product-list');

    for (let i = 0; i < data['products'].length; i += 1) {
        const productItem = productList.appendChild(document.createElement('div'));
        productItem.classList.add('main__item_product');
        productItem.addEventListener('click', showProduct);
    }

    const childElements = <HTMLDivElement[]>Object.values(productList.childNodes);
    for (let i = 0; i < childElements.length; i += 1) {
        childElements[i].style.background = `url(${data['products'][i].thumbnail}) right center no-repeat #ffffff`;
        childElements[i].style.backgroundSize = 'contain';

        const name = childElements[i].appendChild(document.createElement('p'));
        name.classList.add('main__item_product-name');
        name.textContent = `${data['products'][i].title.toUpperCase()}`;

        const description = childElements[i].appendChild(document.createElement('p'));
        description.classList.add('main__item_product-description');
        description.textContent = `${data['products'][i].description}`;

        const discount = childElements[i].appendChild(document.createElement('p'));
        discount.innerHTML = `Discount: <br><b>${data['products'][i].discountPercentage}</b>`;

        const rating = childElements[i].appendChild(document.createElement('p'));
        rating.innerHTML = `Rating: <br><b>${data['products'][i].rating}</b>`;

        const stock = childElements[i].appendChild(document.createElement('p'));
        stock.innerHTML = `In stock: <br><b>${data['products'][i].stock}</b>`;

        const brand = childElements[i].appendChild(document.createElement('p'));
        brand.innerHTML = `Brand: <br><b>${data['products'][i].brand}</b>`;

        const category = childElements[i].appendChild(document.createElement('p'));
        category.innerHTML = `Category: <br><b>${data['products'][i].category}</b>`;

        const price = childElements[i].appendChild(document.createElement('p'));
        price.classList.add('main__item_product-price');
        price.textContent = `$${data['products'][i].price}`;

        const btn = childElements[i].appendChild(document.createElement('button'));
        btn.classList.add('main__item_product-add-button');
        btn.classList.add('button');
        btn.textContent = 'Add to cart';
    }
}
