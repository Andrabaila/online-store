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
export const SORT_OPTIONS = ['Sort by:', 'Price ASC', 'Price DESC', 'In stock ASC', 'In stock DESC'];
export const SMALL_VIEW_CELLS = 16;
export const LARGE_VIEW_CELLS = 4;
export const ERROR_MESSAGE = 'Error with fetch request!';
