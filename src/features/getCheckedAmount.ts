import { getAvailableStock } from '../features/getAvailableStock';
import { getTotalStock } from '../features/getTotalStock';

export async function getCheckedAmount(field: Element, item: string) {
    const totalStock = await getTotalStock(item);
    const availableStock = await getAvailableStock(item);
    field.textContent = `${availableStock} / ${totalStock}`;
}
