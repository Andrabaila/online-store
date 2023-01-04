/* type StateType = {
    list: number[];
    cart: number[];
    getList: () => number[];
    setList: (idList: number[]) => void;
}; */

import { Product } from './types';

export const list: Product[] = [];

class State {
    public list: number[];
    public cart: number[];

    constructor() {
        this.list = [];
        this.cart = [];
    }

    getList() {
        return this.list;
    }

    setList(idList: number[]) {
        this.list = idList;
        console.log(this.list);
    }
}

export default State;
