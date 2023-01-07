import { cart } from '../data/cart';
import { data } from '../data/data';

export async function getLocalStorage() {
    const idArray = localStorage.getItem('idArray')?.split(',');
    if (idArray) {
        console.log(idArray, cart);
        for (let i = 0; i < (await data).length; i++) {
            for (let j = 0; j < idArray.length; j++) {
                if ((await data)[i].id === Number(idArray[j])) {
                    cart.push((await data)[i]);
                }
            }
        }
        console.log(cart);
    }

    const summary = localStorage.getItem('summary-andrabaila');
    const summaryDiv = document.querySelector('.summary');
    if (summary && summaryDiv) {
        summaryDiv.innerHTML = summary;
    }
}
