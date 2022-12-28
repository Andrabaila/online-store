import { Product } from '../data/types';

export function getLinkedData(data: Product[]): Product[] {
    const productList = document.querySelectorAll('.main__item_product');
    const dataList: Product[] = [];
    for (let i = 0; i < productList.length; i++) {
        const idField = productList[i].childNodes[0];
        const id = idField.textContent;
        dataList.push(data[Number(id) - 1]);
    }
    return dataList;
}
