import { CATEGORIES } from '../constants/constants';
import { getLinkedData } from './getLinkedData';

export async function getAvailableStock(value: string) {
    const dataList = await getLinkedData();

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
