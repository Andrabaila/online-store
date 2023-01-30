import { Product, SortOptions } from '../data/types';

export function getSortedList(value: string, array: Product[]) {
    switch (value) {
        case SortOptions.priceAsc:
            array.sort((a, b) => (a.price > b.price ? 1 : -1));
            break;
        case SortOptions.priceDesc:
            array.sort((a, b) => (a.price < b.price ? 1 : -1));
            break;
        case SortOptions.stockAsc:
            array.sort((a, b) => (a.stock > b.stock ? 1 : -1));
            break;
        case SortOptions.stockDesc:
            array.sort((a, b) => (a.stock < b.stock ? 1 : -1));
    }
    return array;
}
