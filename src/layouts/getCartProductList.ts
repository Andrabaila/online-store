export function getCartProductList() {
    const main = document.querySelector('main');
    const productList = document.createElement('div');
    productList.classList.add('cart-list');
    main?.prepend(productList);

    const listHeader = document.createElement('div');
    const listBody = document.createElement('div');
    const listFooter = document.createElement('div');
}
