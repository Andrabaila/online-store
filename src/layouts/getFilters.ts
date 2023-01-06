import { drawCheckFilter } from './drawCheckFilter';
import { drawRangeFilter } from './drawRangeFilter';
import { CHECKED_NAMES, RANGE_NAMES, CATEGORIES, BRANDS } from '../constants/constants';

export function getFilters(parent: HTMLElement) {
    drawCheckFilter(parent, CHECKED_NAMES[0], CATEGORIES);

    drawCheckFilter(parent, CHECKED_NAMES[1], BRANDS);

    drawRangeFilter(parent, RANGE_NAMES[0]);

    drawRangeFilter(parent, RANGE_NAMES[1]);
}
