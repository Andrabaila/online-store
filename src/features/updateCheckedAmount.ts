import { CATEGORIES, BRANDS } from '../constants/constants';
import { getCheckedAmount } from './getCheckedAmount';

export async function updateCheckedAmount() {
    const checkedItemCollection = document.querySelectorAll('.filter-stock');
    const checkedItemArr = [];
    const valuesArray = CATEGORIES.concat(BRANDS);
    for (let i = 0; i < checkedItemCollection.length; i++) {
        checkedItemArr.push(checkedItemCollection[i]);
    }
    for (let i = 0; i < checkedItemArr.length; i++) {
        await getCheckedAmount(checkedItemArr[i], valuesArray[i]);
    }
}
