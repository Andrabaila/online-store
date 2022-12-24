import { ERROR_MESSAGE } from '../constants/constants';
import { Product } from '../data/types';

export async function getProducts(): Promise<Product[]> {
    const productsData = '../assets/products.json';
    let data;
    try {
        const response = await fetch(productsData);
        data = await response.json();
        return data['products'];
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
}
