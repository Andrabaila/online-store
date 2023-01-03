import { Product } from '../data/types';

export async function getMaxPrice(linkedData: Product[]) {
    linkedData.sort((a, b) => (a.price < b.price ? 1 : -1));
    return linkedData[0].price.toString();
}
