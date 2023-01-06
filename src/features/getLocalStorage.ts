import { cart } from '../data/cart';
import { data } from '../data/data';

export async function getLocalStorage() {
    const idArray = localStorage.getItem('idArray')?.split(',');
    if (idArray) {
        const len = (await data).length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < idArray.length; j++) {
                if ((await data)[i].id === Number(idArray[j])) {
                    cart.push((await data)[i]);
                }
            }
        }
    }
}
