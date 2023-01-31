import {
    getSameItemsInCart,
    getRangeLimit,
    getSortedList,
    getParams,
    updateCartSum,
    getTotalStock,
    showRangedProducts,
    getSummaryTotalAmount,
    getSummaryTotalPriceBeforePromo,
    getSummaryTotalPriceAfterPromo,
} from './basicFunctions';
import { SEARCHED_ITEM_IN_CART, ITEMS, SORTED_ITEMS, RANGED_ITEMS } from './dataForTests';

describe('Given the item', () => {
    test('Then I expect the total amount of the item in cart', () => {
        const result = getSameItemsInCart(SEARCHED_ITEM_IN_CART);
        const expectedResult = '3';

        expect(result).toEqual(expectedResult);
    });
});

describe('Given array of items', () => {
    test('Then I expect the price limit', () => {
        const result = getRangeLimit('min', 'price', ITEMS);
        const expectedResult = '3.47';

        expect(result).toEqual(expectedResult);
    });
});

describe('Given array of items', () => {
    test('Then I expect sorted array', () => {
        const result = getSortedList('Price-ASC', ITEMS);

        expect(result).toEqual(SORTED_ITEMS);
    });
});

describe('Given array of query params', () => {
    test('Then I expect query string', () => {
        const result = getParams();
        const expectedResult = '?search=123&sort=Price-ASC&size=small';

        expect(result).toEqual(expectedResult);
    });
});

describe('Given string value cartTotalSum', () => {
    test('Then I expect cartTotalSum with total sum in cart', () => {
        const result = updateCartSum();
        const expectedResult = `Cart total: $30.94`;

        expect(result).toEqual(expectedResult);
    });
});

describe('Given array of items', () => {
    test('Then I expect total amount of items with appropriate category', () => {
        const result = getTotalStock('Vitex');
        const expectedResult = 3;

        expect(result).toEqual(expectedResult);
    });
});

describe('Given array of items', () => {
    test('Then I expect ranged array', () => {
        const result = showRangedProducts('36', '90', 'Stock');

        expect(result).toEqual(RANGED_ITEMS);
    });
});

describe('Given array of items', () => {
    test('Then I expect length of the array', () => {
        const result = getSummaryTotalAmount();
        const expectedResult = '6';

        expect(result).toEqual(expectedResult);
    });
});

describe('Given array of items', () => {
    test('Then I expect total sum before applying promo codes', () => {
        const result = getSummaryTotalPriceBeforePromo();
        const expectedResult = '30.94';

        expect(result).toEqual(expectedResult);
    });
});

describe('Given array of items', () => {
    test('Then I expect total sum after applying promo codes', () => {
        const result = getSummaryTotalPriceAfterPromo();
        const expectedResult = '24.75';

        expect(result).toEqual(expectedResult);
    });
});
