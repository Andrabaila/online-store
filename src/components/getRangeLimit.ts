import { Product } from '../data/types';

export async function getRangeLimit(linkedData: Product[], sort: string, key: string) {
    if (key === 'price') {
        if (sort === 'min') {
            linkedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        } else {
            linkedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
        }
        return linkedData[0].price.toString();
    }
    if (sort === 'min') {
        linkedData.sort((a, b) => (a.stock > b.stock ? 1 : -1));
    } else {
        linkedData.sort((a, b) => (a.stock < b.stock ? 1 : -1));
    }
    return linkedData[0].stock.toString();
}
