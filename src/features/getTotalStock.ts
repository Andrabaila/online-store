import { getProducts } from '../API/getProducts';
import { CATEGORIES } from '../constants/constants';

export async function getTotalStock(value: string) {
    const data = await getProducts();

    const dataChecked = [];
    for (let i = 0; i < data.length; i++) {
        if (CATEGORIES.includes(value)) {
            if (data[i].category === value) {
                dataChecked.push(data[i]);
            }
        }
        if (!CATEGORIES.includes(value)) {
            if (data[i].brand === value) {
                dataChecked.push(data[i]);
            }
        }
    }

    return dataChecked.length;
}
