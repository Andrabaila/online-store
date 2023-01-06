import { getRangeLimit } from '../components/getRangeLimit';
import { controlMinRange } from '../features/controlMinRange';
import { controlMaxRange } from '../features/controlMaxRange';
import { Product } from '../data/types';

export async function setRangeDependencies(dataList: Product[]) {
    const limits = document.querySelectorAll('.limit');
    const [minPriceText, maxPriceText, minStockText, maxStockText] = limits;

    const minPrice = await getRangeLimit('min', 'price');
    const maxPrice = await getRangeLimit('max', 'price');
    const minStock = await getRangeLimit('min', 'stock');
    const maxStock = await getRangeLimit('max', 'stock');

    minPriceText.textContent = `$${minPrice}`;
    maxPriceText.textContent = `$${maxPrice}`;
    minStockText.textContent = `${minStock}`;
    maxStockText.textContent = `${maxStock}`;

    const limitArr = <NodeListOf<HTMLParagraphElement>>document.querySelectorAll('.limit');

    const fromRanges = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range-from');
    const [priceFromRange, stockFromRange] = fromRanges;
    const toRanges = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range-to');
    const [priceToRange, stockToRange] = toRanges;

    priceFromRange.value = minPrice;
    stockFromRange.value = minStock;
    priceFromRange.min = minPrice;
    stockFromRange.min = minStock;
    priceToRange.min = minPrice;
    stockToRange.min = minStock;
    priceFromRange.max = maxPrice;
    stockFromRange.max = maxStock;
    priceToRange.max = maxPrice;
    stockToRange.max = maxStock;
    priceToRange.value = maxPrice;
    stockToRange.value = maxStock;
    priceFromRange.addEventListener('input', (event) =>
        controlMinRange(event, priceToRange, limitArr, 'Price', dataList)
    );
    stockFromRange.addEventListener('input', (event) =>
        controlMinRange(event, stockToRange, limitArr, 'Stock', dataList)
    );
    priceToRange.addEventListener('input', (event) =>
        controlMaxRange(event, priceFromRange, limitArr, 'Price', dataList)
    );
    stockToRange.addEventListener('input', (event) =>
        controlMaxRange(event, stockFromRange, limitArr, 'Stock', dataList)
    );
}
