import { cart } from '../data/cart';
import { getSameItemsInCart } from '../features/getSameItemsInCart';
import { getHtmlElement } from './getHtmlElement';
import { decreaseAmount } from '../features/decreaseAmount';
import { increaseAmount } from '../features/increaseAmount';
import { updateCartSum } from '../features/updateCartSum';
import { Product } from '../data/types';

export function getCartItems(page?: Product[]) {
    const list = document.createElement('ol');
    list.classList.add('cart-list');
    let cartSet: Product[];
    if (page) {
        cartSet = page;
    } else {
        cartSet = Array.from(new Set(cart));
    }
    cartSet.forEach((el) => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-list_item');
        list.append(cartItem);

        const cartItemImg = cartItem.appendChild(document.createElement('img'));
        cartItemImg.classList.add('cart-list_item_img');
        cartItemImg.src = el.thumbnail;

        const cartItemInfo = cartItem.appendChild(document.createElement('section'));
        cartItemInfo.classList.add('cart-list_item_info');

        const title = cartItemInfo.appendChild(document.createElement('p'));
        title.textContent = el.title;

        const description = cartItemInfo.appendChild(document.createElement('p'));
        description.textContent = el.description;

        const otherProps = cartItemInfo.appendChild(document.createElement('div'));
        otherProps.classList.add('cart-list_item_properties');

        const rating = otherProps.appendChild(document.createElement('p'));
        rating.innerHTML = `Rating: <b>${el.rating.toString()}<b>`;

        const discount = otherProps.appendChild(document.createElement('p'));
        discount.innerHTML = `Discount: <b>${el.discountPercentage.toString()}%<b>`;

        const cartItemControl = cartItem.appendChild(document.createElement('section'));
        cartItemControl.classList.add('cart-list_item_control');

        const stock = cartItemControl.appendChild(document.createElement('p'));
        stock.innerHTML = `In stock: <b>${el.stock.toString()}<b>`;

        const itemAmountControl = cartItemControl.appendChild(document.createElement('div'));
        itemAmountControl.classList.add('amount-control', 'input-count');

        const itemAmount = getSameItemsInCart(el);
        const minusBtn = getHtmlElement({
            parentNode: itemAmountControl,
            tag: 'button',
            style: ['button', 'button_input-count', 'button_amount-'],
            content: '-',
        });
        const amount = getHtmlElement({
            parentNode: itemAmountControl,
            tag: 'p',
            style: ['input-count__field', 'input-count_amount'],
            content: itemAmount,
        });
        const plusBtn = getHtmlElement({
            parentNode: itemAmountControl,
            tag: 'button',
            style: ['button', 'button_input-count', 'button_amount+'],
            content: '+',
        });
        if (amount instanceof HTMLParagraphElement && plusBtn instanceof HTMLButtonElement) {
            minusBtn.addEventListener('click', () => decreaseAmount(amount, el));
            plusBtn.disabled = false;
            plusBtn.addEventListener('click', () => increaseAmount(amount, el));
        }

        const price = cartItemControl.appendChild(document.createElement('p'));
        price.innerHTML = `<b>$${el.price.toString()}<b>`;
    });

    updateCartSum();
    const cartAmount = document.querySelector('.products-in-cart');
    if (cartAmount) {
        cartAmount.textContent = `${cart.length.toString()}`;
    }

    return list;
}
