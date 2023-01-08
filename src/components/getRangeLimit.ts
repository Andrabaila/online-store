import { Product } from '../data/types';
import { getLinkedData } from '../features/getLinkedData';

export async function getRangeLimit(sort: string, key: keyof Product) {
    const linkedData = await getLinkedData();
    if (sort === 'min') {
        linkedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
        linkedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    }
    return linkedData[0][key].toString();
}
