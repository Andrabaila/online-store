import { getProducts } from '../API/getProducts';
import { getLinkedData } from '../features/getLinkedData';

export async function getMinStock() {
    const data = await getProducts();
    const linkedData = getLinkedData(data);
    linkedData.sort((a, b) => (a.stock > b.stock ? 1 : -1));
    return linkedData[0].stock.toString();
}
