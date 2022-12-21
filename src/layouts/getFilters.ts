import { drawCategoryFilter } from './drawCategoryFilter';
import { drawBrandFilter } from './drawBrandFilter';
import { drawPriceFilter } from './drawPriceFilter';
import { drawStockFilter } from './drawStockFilter';

export function getFilters(parent: HTMLDivElement) {
    drawCategoryFilter(parent);

    drawBrandFilter(parent);

    drawPriceFilter(parent);

    drawStockFilter(parent);
}
