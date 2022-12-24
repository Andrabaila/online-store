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
