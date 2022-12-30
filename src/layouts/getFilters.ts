import { drawCheckedFilter } from './drawCheckedFilter';
import { drawRangeFilter } from './drawRangeFilter';
import { CHECKED_NAMES, RANGE_NAMES, CATEGORIES, BRANDS, PRICE_LIMITS, STOCK_LIMITS } from '../constants/constants';

export function getFilters(parent: HTMLElement) {
    drawCheckedFilter(parent, CHECKED_NAMES[0], CATEGORIES);

    drawCheckedFilter(parent, CHECKED_NAMES[1], BRANDS);

    drawRangeFilter(parent, RANGE_NAMES[0], PRICE_LIMITS);

    drawRangeFilter(parent, RANGE_NAMES[1], STOCK_LIMITS);
}
