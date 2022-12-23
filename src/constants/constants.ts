import { getMinPrice } from '../layouts/getMinPrice';
import { getMaxPrice } from '../layouts/getMaxPrice';
import { getMinStock } from '../layouts/getMinStock';
import { getMaxStock } from '../layouts/getMaxStock';

export const CHECKED_NAMES = ['Categories', 'Brands'];
export const RANGE_NAMES = ['Price', 'In stock'];
export const CATEGORIES = ['shampoos', 'shower gels'];
export const BRANDS = ['Belita', 'Vitex'];
export const PRICE_LIMITS = [getMinPrice(), getMaxPrice()];
export const STOCK_LIMITS = [getMinStock(), getMaxStock()];
