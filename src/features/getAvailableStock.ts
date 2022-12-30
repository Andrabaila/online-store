import { getProducts } from '../API/getProducts';
import { CATEGORIES } from '../constants/constants';
import { getLinkedData } from './getLinkedData';

export async function getAvailableStock(value: string) {
    const data = await getProducts();
    const dataList = getLinkedData(data);

    const dataChecked = [];
    for (let i = 0; i < dataList.length; i++) {
        if (CATEGORIES.includes(value)) {
            if (dataList[i].category === value) {
                dataChecked.push(dataList[i]);
            }
        }
        if (!CATEGORIES.includes(value)) {
            if (dataList[i].brand === value) {
                dataChecked.push(dataList[i]);
            }
        }
    }

    return dataChecked.length;
}
