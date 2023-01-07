import { UI } from '../data/UI';
import { cart } from '../data/cart';
import { data } from '../data/data';

export async function setAddRemoveText(button: HTMLButtonElement) {
    let dataId: number;
    (await data).forEach((el) => {
        dataId = el.id;
        const idArray = [];
        for (let j = 0; j < cart.length; j++) {
            idArray.push(cart[j].id);
        }
        if (button instanceof HTMLButtonElement) {
            idArray.includes(dataId)
                ? (button.textContent = UI.removeButtonText)
                : (button.textContent = UI.addButtonText);
        }
    });
}
