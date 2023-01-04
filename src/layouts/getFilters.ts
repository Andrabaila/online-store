import { getProducts } from '../API/getProducts';
import { getLinkedData } from '../features/getLinkedData';
import { drawCheckFilter } from './drawCheckFilter';
import { drawRangeFilter } from './drawRangeFilter';
import { CHECKED_NAMES, RANGE_NAMES, CATEGORIES, BRANDS } from '../constants/constants';
import { getRangeLimit } from '../components/getRangeLimit';

export async function getFilters(parent: HTMLElement) {
    const data = await getProducts();
    const linkedData = getLinkedData(data);

    const minPrice = await getRangeLimit(linkedData, 'min', 'price');
    const maxPrice = await getRangeLimit(linkedData, 'max', 'price');
    const minStock = await getRangeLimit(linkedData, 'min', 'stock');
    const maxStock = await getRangeLimit(linkedData, 'max', 'stock');
    const PRICE_LIMITS = [minPrice, maxPrice];
    const STOCK_LIMITS = [minStock, maxStock];

    drawCheckFilter(parent, CHECKED_NAMES[0], CATEGORIES);

    drawCheckFilter(parent, CHECKED_NAMES[1], BRANDS);

    drawRangeFilter(parent, RANGE_NAMES[0], PRICE_LIMITS);

    drawRangeFilter(parent, RANGE_NAMES[1], STOCK_LIMITS);
}
