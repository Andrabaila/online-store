import { getProducts } from '../API/getProducts';
import { getLinkedData } from '../features/getLinkedData';

export async function getMinPrice() {
    const data = await getProducts();
    const linkedData = getLinkedData(data);
    linkedData.sort((a, b) => (a.price > b.price ? 1 : -1));
    return linkedData[0].price.toString();
}
