import { getProducts } from '../API/getProducts';
import { Product } from './types';

export const data = getProducts();

export const currentList: Product[] = [];

export const filteredList: Product[] = [];
