import { drawCheckFilter } from './drawCheckFilter';
import { drawRangeFilter } from './drawRangeFilter';
import { CHECKED_NAMES, RANGE_NAMES, CATEGORIES, BRANDS } from '../constants/constants';
import { getMinPrice } from '../components/getMinPrice';
import { getMaxPrice } from '../components/getMaxPrice';
import { getMinStock } from '../components/getMinStock';
import { getMaxStock } from '../components/getMaxStock';

export async function getFilters(parent: HTMLElement) {
    const minPrice = await getMinPrice();
    const maxPrice = await getMaxPrice();
    const minStock = await getMinStock();
    const maxStock = await getMaxStock();
    const PRICE_LIMITS = [minPrice, maxPrice];
    const STOCK_LIMITS = [minStock, maxStock];

    drawCheckFilter(parent, CHECKED_NAMES[0], CATEGORIES);

    drawCheckFilter(parent, CHECKED_NAMES[1], BRANDS);

    drawRangeFilter(parent, RANGE_NAMES[0], PRICE_LIMITS);

    drawRangeFilter(parent, RANGE_NAMES[1], STOCK_LIMITS);
}
