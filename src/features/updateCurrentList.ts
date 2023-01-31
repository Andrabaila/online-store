import { currentList } from '../data/data';
import { Product } from '../data/types';

export function updateCurrentList(resultList: Product[]) {
    currentList.splice(0, currentList.length);
    resultList.forEach((el) => currentList.push(el));
}
