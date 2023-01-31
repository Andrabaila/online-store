import { showRangedProducts } from './showRangedProducts';
import { Product } from '../data/types';
import { controlQueryParams } from './controlQueryParams';

export async function controlMaxRange(
    event: Event,
    minRange: HTMLInputElement,
    limits: NodeListOf<HTMLParagraphElement>,
    name: string,
    dataList: Product[]
) {
    const [, maxPrice, , maxStock] = limits;
    if (event.target instanceof HTMLInputElement) {
        const minRangePosition = minRange.value;
        const maxRangePosition = event.target.value;

        if (Number(minRangePosition) <= Number(maxRangePosition)) {
            event.target.value = maxRangePosition;
            name === 'Price'
                ? (maxPrice.textContent = `$${maxRangePosition}`)
                : (maxStock.textContent = `${maxRangePosition}`);
        } else {
            name === 'Price'
                ? (maxPrice.textContent = `$${minRangePosition}`)
                : (maxStock.textContent = `${minRangePosition}`);
            event.target.value = minRangePosition;
        }
        showRangedProducts(minRange.value, event.target.value, dataList, name);

        name === 'Price'
            ? controlQueryParams('price', `${minRange.value}↕${event.target.value}`)
            : controlQueryParams('stock', `${minRange.value}↕${event.target.value}`);
    }
}
