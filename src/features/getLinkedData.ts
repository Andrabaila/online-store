import { Product } from '../data/types';
import { ID_INDEX } from '../constants/constants';

export function getLinkedData(data: Product[]): Product[] {
    const productList = document.querySelectorAll('.main__item_product');
    const dataList: Product[] = [];
    for (let i = 0; i < productList.length; i++) {
        const id = productList[i].childNodes[ID_INDEX].textContent;
        dataList.push(data[Number(id) - 1]);
    }
    return dataList;
}
