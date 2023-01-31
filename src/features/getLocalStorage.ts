import { cart } from '../data/cart';
import { data } from '../data/data';
import { query } from '../data/query';

export async function getLocalStorage() {
    const idArray = localStorage.getItem('idArray')?.split(',');
    if (idArray) {
        for (let i = 0; i < (await data).length; i++) {
            for (let j = 0; j < idArray.length; j++) {
                if ((await data)[i].id === Number(idArray[j])) {
                    cart.push((await data)[i]);
                }
            }
        }
    }

    const summary = localStorage.getItem('summary-andrabaila');
    const summaryDiv = document.querySelector('.summary');
    if (summary && summaryDiv) {
        summaryDiv.innerHTML = summary;
    }

    const queryJson = localStorage.getItem('query-andrabaila');
    if (queryJson) {
        const queryArray = queryJson.split(',').map((el) => JSON.parse(el));
        queryArray.forEach((el) => query.push(el));
    }
}
