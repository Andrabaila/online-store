import { maxItemsInCartList, minItemsInInputCount } from '../constants/constants';
import { setCartItemsPerPage } from '../components/setCartItemsPerPage';
import { setCartPageNumber } from '../components/setCartPageNumber';

export function setInputCount(event: MouseEvent) {
    if (event.target instanceof HTMLButtonElement) {
        const action = event.target.textContent;
        const inputField = event.target.parentNode?.childNodes[1];
        if (event.target.parentNode instanceof HTMLDivElement) {
            let maxItemsInInputCount: number;
            let nextFunction: () => void;
            if (event.target.parentNode?.classList.contains('input-count_cart-list')) {
                maxItemsInInputCount = maxItemsInCartList;
                nextFunction = setCartItemsPerPage;
            } else {
                maxItemsInInputCount = 1;
                nextFunction = setCartPageNumber;
            }
            if (inputField instanceof HTMLParagraphElement) {
                let count = Number(event.target.parentNode?.childNodes[1].textContent);
                if (action === '+') {
                    if (count < maxItemsInInputCount) {
                        count++;
                    }
                } else {
                    if (count > minItemsInInputCount) {
                        count--;
                    }
                }
                inputField.textContent = count.toString();
            }
            nextFunction();
        }
    }
}
