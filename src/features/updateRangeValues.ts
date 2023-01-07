import { getRangeLimit } from '../components/getRangeLimit';

export async function updateRangeValues() {
    const limits = <NodeListOf<HTMLParagraphElement>>document.querySelectorAll('.limit');
    const minRanges = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range-from');
    const maxRanges = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range-to');
    const [minPrice, maxPrice, minStock, maxStock] = [
        await getRangeLimit('min', 'price'),
        await getRangeLimit('max', 'price'),
        await getRangeLimit('min', 'stock'),
        await getRangeLimit('max', 'stock'),
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
