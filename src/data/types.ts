export enum OptionsText {
    found = 'Found: 30',
    search = 'Search product',
}

export type AppendPoint = string | Element;

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export interface ProductsData {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}

export enum SortOptions {
    sortBy = 'Sort by:',
    priceAsc = 'Price ASC',
    priceDesc = 'Price DESC',
    stockAsc = 'In stock ASC',
    stockDesc = 'In stock DESC',
}
