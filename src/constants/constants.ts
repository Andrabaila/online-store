import { getMinPrice } from '../components/getMinPrice';
import { getMaxPrice } from '../components/getMaxPrice';
import { getMinStock } from '../components/getMinStock';
import { getMaxStock } from '../components/getMaxStock';

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
