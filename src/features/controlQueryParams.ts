import { query } from '../data/query';
import { Query } from '../data/types';
import { getParams } from './getParams';

export function controlQueryParams(key: keyof Query, value: string) {
    const queryParam = query.find((el) => el[key]);
    if (queryParam) {
        query.splice(query.indexOf(queryParam), 1);
    }
    const path = document.location.pathname;
    const obj: Query = {};
    if (value !== '') {
        obj[key] = value;
    }
    query.push(obj);
    const params = getParams();
    window.history.replaceState({}, '', `${path}${params}`);
}
