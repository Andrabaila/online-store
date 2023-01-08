import { Product } from '../data/types';
import { getLinkedData } from '../features/getLinkedData';

export async function getRangeLimit(sort: string, key: keyof Product) {
    const linkedData = await getLinkedData();
    sort === 'min'
        ? linkedData.sort((a, b) => (a[key] > b[key] ? 1 : -1))
        : linkedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));

    return linkedData[0][key].toString();
}
