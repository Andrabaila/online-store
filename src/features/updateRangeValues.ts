import { getProducts } from '../API/getProducts';
import { getLinkedData } from '../features/getLinkedData';
import { getRangeLimit } from '../components/getRangeLimit';

export async function updateRangeValues() {
    const data = await getProducts();
    const linkedData = getLinkedData(data);
    const limits = <NodeListOf<HTMLParagraphElement>>document.querySelectorAll('.limit');
    const minRanges = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range-from');
    const maxRanges = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range-to');
    const [minPrice, maxPrice, minStock, maxStock] = [
        await getRangeLimit(linkedData, 'min', 'price'),
        await getRangeLimit(linkedData, 'max', 'price'),
        await getRangeLimit(linkedData, 'min', 'stock'),
        await getRangeLimit(linkedData, 'max', 'stock'),
    ];
    const [minPriceText, maxPriceText, minStockText, maxStockText] = limits;
    const [minPriceRange, minStockRange] = minRanges;
    const [maxPriceRange, maxStockRange] = maxRanges;
    minPriceText.textContent = `$${minPrice}`;
    maxPriceText.textContent = `$${maxPrice}`;
    minStockText.textContent = `${minStock}`;
    maxStockText.textContent = `${maxStock}`;
    minPriceRange.value = minPrice.toString();
    minStockRange.value = minStock.toString();
    maxPriceRange.value = maxPrice.toString();
    maxStockRange.value = maxStock.toString();
}
