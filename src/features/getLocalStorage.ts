import { cart } from '../data/cart';
import { data } from '../data/data';
import { PROMO_CODES } from '../constants/constants';

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
    //TODO
    const promo = localStorage.getItem('promo-code-andrabaila')?.split(',');
    promo?.forEach((el) => PROMO_CODES.push(Number(el)));
    //console.log(PROMO_CODES);
    const applied = localStorage.getItem('promo-code-applied-andrabaila');
    const appliedDiv = document.querySelector('.promo__applied');
    if (applied) {
        //console.log(applied);
        //appliedDiv.classList.add('applied-visible');
        //appliedDiv.innerHTML = applied;
    }
    appliedDiv?.classList.add('applied-visible');
}
