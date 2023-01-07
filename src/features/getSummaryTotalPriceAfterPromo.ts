import { PROMO_CODES } from '../constants/constants';
import { getSummaryTotalPriceBeforePromo } from './getSummaryTotalPriceBeforePromo';

export function getSummaryTotalPriceAfterPromo() {
    const price = Number(getSummaryTotalPriceBeforePromo());
    const discount = PROMO_CODES.reduce((acc, el) => acc + el, 0);
    const multiplier = (100 - discount) / 100;
    let resultPrice: number;
    if (PROMO_CODES.length) {
        resultPrice = price * multiplier;
    } else {
        resultPrice = price;
    }
    return resultPrice.toFixed(2);
}
