import { data } from '../data/data';
import { CATEGORIES } from '../constants/constants';

export async function getTotalStock(value: string) {
    const dataChecked = [];
    for (let i = 0; i < (await data).length; i++) {
        if (CATEGORIES.includes(value)) {
            if ((await data)[i].category === value) {
                dataChecked.push((await data)[i]);
            }
        }
        if (!CATEGORIES.includes(value)) {
            if ((await data)[i].brand === value) {
                dataChecked.push((await data)[i]);
            }
        }
    }

    return dataChecked.length;
}
