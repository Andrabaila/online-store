export async function getProductsList(parent: HTMLDivElement) {
    const products = '../assets/products.json';
    const response = await fetch(products);
    const data = await response.json();

    const productList = parent.appendChild(document.createElement('div'));
    productList.classList.add('main__item_product-list');

    for (let i = 0; i < data['products'].length; i += 1) {
        productList.appendChild(document.createElement('div')).classList.add('main__item_product');
    }

    const childElements = Object.values(productList.childNodes) as HTMLDivElement[];
    for (let i = 0; i < childElements.length; i += 1) {
        childElements[i].style.background = `url(${data['products'][i].thumbnail}) center center no-repeat`;
        childElements[i].style.backgroundSize = 'contain';
        childElements[i].style.backgroundColor = '#ffffff';

        const name = childElements[i].appendChild(document.createElement('p'));
        name.classList.add('main__item_product-name');
        name.textContent = `${data['products'][i].title.toUpperCase()}`;

        const description = childElements[i].appendChild(document.createElement('p'));
        description.classList.add('main__item_product-description');
        description.textContent = `${data['products'][i].description}`;

        const price = childElements[i].appendChild(document.createElement('p'));
        price.classList.add('main__item_product-price');
        price.textContent = `$${data['products'][i].price}`;

        const discount = childElements[i].appendChild(document.createElement('p'));
        discount.textContent = `Discount: ${data['products'][i].discountPercentage}`;

        const rating = childElements[i].appendChild(document.createElement('p'));
        rating.textContent = `Rating: ${data['products'][i].rating}`;

        const stock = childElements[i].appendChild(document.createElement('p'));
        stock.textContent = `In stock: ${data['products'][i].stock}`;

        const brand = childElements[i].appendChild(document.createElement('p'));
        brand.textContent = `Brand: ${data['products'][i].brand}`;

        const category = childElements[i].appendChild(document.createElement('p'));
        category.textContent = `Category: ${data['products'][i].category}`;

        const btn = childElements[i].appendChild(document.createElement('button'));
        btn.classList.add('main__item_product-add-button');
        btn.classList.add('button');
        btn.textContent = 'Add to cart';
    }
}
