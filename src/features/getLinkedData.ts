import { Product } from '../data/types';

export function getLinkedData(data: Product[]): Product[] {
    const productList = document.querySelectorAll('.main__item_product');
    const dataList: Product[] = [];
    for (let i = 0; i < productList.length; i++) {
        const id = productList[i].childNodes[0].textContent;
        dataList.push(data[Number(id) - 1]);
    }
    return dataList;
}
