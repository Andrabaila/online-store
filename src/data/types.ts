export enum OptionsText {
    found = 'Found: ',
    search = 'Search product',
    promo = 'Enter promo code',
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

export interface RegularExpressions {
    [index: string]: RegExp;
}

export enum SortOptions {
    sortBy = 'Sort by:',
    priceAsc = 'Price ASC',
    priceDesc = 'Price DESC',
    stockAsc = 'In stock ASC',
    stockDesc = 'In stock DESC',
}

export enum NotInformative {
    id = 1,
    photos = 2,
}
