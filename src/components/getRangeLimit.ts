import { Product } from '../data/types';
import { getLinkedData } from '../features/getLinkedData';

export async function getRangeLimit(sort: string, key: keyof Product, totalData?: Product[]) {
    if (totalData) {
        sort === 'min'
            ? totalData.sort((a, b) => (a[key] > b[key] ? 1 : -1))
            : totalData.sort((a, b) => (a[key] < b[key] ? 1 : -1));

        return totalData[0][key].toString();
    } else {
        const linkedData = await getLinkedData();
        sort === 'min'
            ? linkedData.sort((a, b) => (a[key] > b[key] ? 1 : -1))
            : linkedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));

        return linkedData[0][key].toString();
    }
}
