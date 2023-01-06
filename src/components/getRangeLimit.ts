import { getLinkedData } from '../features/getLinkedData';

export async function getRangeLimit(sort: string, key: string) {
    const linkedData = await getLinkedData();
    if (key === 'price') {
        if (sort === 'min') {
            linkedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        } else {
            linkedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
        }
        return linkedData[0][key].toString();
    }
    if (sort === 'min') {
        linkedData.sort((a, b) => (a.stock > b.stock ? 1 : -1));
    } else {
        linkedData.sort((a, b) => (a.stock < b.stock ? 1 : -1));
    }
    return linkedData[0].stock.toString();
}
