export function getCartItems() {
    const cartItem1 = document.createElement('li');
    cartItem1.classList.add('cartListItem');
    cartItem1.textContent = 'cart list item1';

    const cartItem2 = document.createElement('li');
    cartItem2.classList.add('cartListItem');
    cartItem2.textContent = 'cart list item2';

    const list = document.createElement('ul');
    list.append(cartItem1, cartItem2);

    return list;
}
