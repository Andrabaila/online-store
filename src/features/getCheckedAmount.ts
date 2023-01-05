import { getAvailableStock } from '../features/getAvailableStock';
import { getTotalStock } from '../features/getTotalStock';

export async function getCheckedAmount(field: Element, item: string) {
    const totalStock = await getTotalStock(item);
    const availableStock = await getAvailableStock(item);
    field.textContent = `${availableStock} / ${totalStock}`;
    const label = field.previousSibling;
    const checkbox = field.previousSibling?.previousSibling;
    if (label && checkbox && checkbox instanceof HTMLInputElement) {
        if (availableStock === 0) {
            {
                checkbox.disabled = true;
                checkbox.checked = false;
            }
        } else {
            checkbox.disabled = false;
        }
    }
}
