import { CART, SORT_OPTIONS, QUERY, ITEMS, PROMO_CODES } from './dataForTests';

export function getSameItemsInCart(item) {
    let count = 0;
    CART.forEach((el) => {
        if (el.id === item.id) {
            count++;
        }
    });
    return count.toString();
}

export function getRangeLimit(sort, key, totalData) {
    sort === 'min'
        ? totalData.sort((a, b) => (a[key] > b[key] ? 1 : -1))
        : totalData.sort((a, b) => (a[key] < b[key] ? 1 : -1));

    return totalData[0][key].toString();
}

export function getSortedList(value, array) {
    switch (value) {
        case SORT_OPTIONS.priceAsc:
            array.sort((a, b) => (a.price > b.price ? 1 : -1));
            break;
        case SORT_OPTIONS.priceDesc:
            array.sort((a, b) => (a.price < b.price ? 1 : -1));
            break;
        case SORT_OPTIONS.stockAsc:
            array.sort((a, b) => (a.stock > b.stock ? 1 : -1));
            break;
        case SORT_OPTIONS.stockDesc:
            array.sort((a, b) => (a.stock < b.stock ? 1 : -1));
    }
    return array;
}

export function getParams() {
    const queryItem = QUERY.map((el) => {
        const entries = Object.entries(el);
        return entries.map(([key, value]) => `${key}=${value}`);
    }).join('&');
    return `?${queryItem}`;
}

export function updateCartSum() {
    let cartTotalSum = 'Cart total: $0';
    let sum = 0;
    for (let i = 0; i < CART.length; i++) {
        sum += CART[i].price;
    }

    cartTotalSum = `Cart total: $${sum.toFixed(2).toString()}`;
    return cartTotalSum;
}

export function getTotalStock(value) {
    const CATEGORIES = ['shampoos', 'shower gels'];
    const itemsChecked = [];
    for (let i = 0; i < ITEMS.length; i++) {
        if (CATEGORIES.includes(value)) {
            if (ITEMS[i].category === value) {
                itemsChecked.push(ITEMS[i]);
            }
        }
        if (!CATEGORIES.includes(value)) {
            if (ITEMS[i].brand === value) {
                itemsChecked.push(ITEMS[i]);
            }
        }
    }

    return itemsChecked.length;
}

export function showRangedProducts(min, max, name) {
    const filteredList = [];
    for (let i = 0; i < ITEMS.length; i++) {
        if (name === 'Price') {
            if (ITEMS[i].price <= Number(max) && ITEMS[i].price >= Number(min)) {
                filteredList.push(ITEMS[i]);
            }
        } else {
            if (ITEMS[i].stock <= Number(max) && ITEMS[i].stock >= Number(min)) {
                filteredList.push(ITEMS[i]);
            }
        }
    }
    return filteredList;
}

export function getSummaryTotalAmount() {
    return CART.length.toString();
}

export function getSummaryTotalPriceBeforePromo() {
    const prices = [];
    CART.forEach((el) => prices.push(el.price));
    return prices.reduce((acc, el) => acc + el, 0).toFixed(2);
}

export function getSummaryTotalPriceAfterPromo() {
    const price = Number(getSummaryTotalPriceBeforePromo());
    const discount = PROMO_CODES.reduce((acc, el) => acc + el, 0);
    const multiplier = (100 - discount) / 100;
    return PROMO_CODES.length ? (price * multiplier).toFixed(2) : price.toFixed(2);
}
