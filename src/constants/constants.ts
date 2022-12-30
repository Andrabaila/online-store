import { getMinPrice } from '../components/getMinPrice';
import { getMaxPrice } from '../components/getMaxPrice';
import { getMinStock } from '../components/getMinStock';
import { getMaxStock } from '../components/getMaxStock';
import { RegularExpressions } from '../data/types';
import { getMainPage } from '../pages/getMainPage';
import { getCartPage } from '../pages/getCartPage';
import { getProductPage } from '../pages/getProductPage';

export const routes = {
    '/': getMainPage,
    '/cart': getCartPage,
    '/product/id:': getProductPage,
};

export const CHECKED_NAMES = ['Categories', 'Brands'];
export const RANGE_NAMES = ['Price', 'In stock'];
export const CATEGORIES = ['shampoos', 'shower gels'];
export const BRANDS = ['Belita', 'Vitex'];
export const PRICE_LIMITS = [getMinPrice(), getMaxPrice()];
export const STOCK_LIMITS = [getMinStock(), getMaxStock()];
export const SMALL_VIEW_CELLS = 16;
export const LARGE_VIEW_CELLS = 4;
export const ERROR_MESSAGE = 'Error with fetch request!';
export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
export const PHONE_CHARS = '+0123456789';
export const EMAIL_REG_EXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const REGULAR_EXPRESSIONS: RegularExpressions = {
    name: /[a-zA-Z]{3}\s[a-zA-Z]{3}/,
    phone: /^\+[0-9]{8}/,
    address: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{5}\s[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{5}\s[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{5}/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    cardNumber: /^[0-9]{16}$/,
    cardDate: /^(0?[1-9]|1[012])\/(\d\d)$/,
    cardCode: /^[0-9]{3}$/,
    visa: /^[4]+/,
    master: /^[5]+/,
    union: /^[6]+/,
    month: /^[01][0-9]$/,
};

export const ID_INDEX = 0;
