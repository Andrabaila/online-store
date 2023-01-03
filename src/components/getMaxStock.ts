import { Product } from '../data/types';

export async function getMaxStock(linkedData: Product[]) {
    linkedData.sort((a, b) => (a.stock < b.stock ? 1 : -1));
    return linkedData[0].stock.toString();
}
