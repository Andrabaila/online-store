import { showRangedProducts } from './showRangedProducts';
import { Product } from '../data/types';

export async function controlMinRange(
    event: Event,
    maxRange: HTMLInputElement,
    limits: NodeListOf<HTMLParagraphElement>,
    name: string,
    dataList: Product[]
) {
    const [minPrice, , minStock] = limits;
    if (event.target instanceof HTMLInputElement) {
        name === 'Price'
            ? (minPrice.textContent = `$${event.target.value}`)
            : (minStock.textContent = `${event.target.value}`);

        const maxRangePosition = maxRange.value;
        const minRangePosition = event.target.value;

        if (Number(minRangePosition) > Number(maxRangePosition)) {
            event.target.value = maxRangePosition;
            name === 'Price'
                ? (minPrice.textContent = `$${maxRangePosition}`)
                : (minStock.textContent = `${maxRangePosition}`);
        } else {
            name === 'Price'
                ? (minPrice.textContent = `$${minRangePosition}`)
                : (minStock.textContent = `${minRangePosition}`);
            event.target.value = minRangePosition;
        }
        showRangedProducts(minRangePosition, maxRangePosition, dataList, name);
    }
}
