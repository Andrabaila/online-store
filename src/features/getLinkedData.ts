import { data } from '../data/data';
import { currentList } from '../data/data';

export async function getLinkedData() {
    const productList = document.querySelectorAll('.main__item_product');
    const dataList = [];
    for (let i = 0; i < productList.length; i++) {
        const idField = productList[i].childNodes[0];
        const id = idField.textContent;
        dataList.push((await data)[Number(id) - 1]);
    }
    dataList.forEach((el) => currentList.push(el));
    return dataList;
}
