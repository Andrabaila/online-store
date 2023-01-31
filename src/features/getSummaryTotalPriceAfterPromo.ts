import { PROMO_CODES } from '../data/promo';
import { getSummaryTotalPriceBeforePromo } from './getSummaryTotalPriceBeforePromo';

export function getSummaryTotalPriceAfterPromo() {
    const price = Number(getSummaryTotalPriceBeforePromo());
    const discount = PROMO_CODES.reduce((acc, el) => acc + el, 0);
    const multiplier = (100 - discount) / 100;
    return PROMO_CODES.length ? (price * multiplier).toFixed(2) : price.toFixed(2);
}
