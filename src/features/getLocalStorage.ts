import { getProducts } from '../API/getProducts';
import { cart } from '../data/cart';

export async function getLocalStorage() {
    const idArray = localStorage.getItem('idArray')?.split(',');
    const data = await getProducts();
    if (idArray) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < idArray.length; j++) {
                if (data[i].id === Number(idArray[j])) {
                    cart.push(data[i]);
                }
            }
        }
    }
}
