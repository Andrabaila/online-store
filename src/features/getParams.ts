import { query } from '../data/query';

export function getParams() {
    const queryItem = query
        .map((el) => {
            const entries = Object.entries(el);
            return entries.map(([key, value]) => `${key}=${value}`);
        })
        .join('&');
    return `?${queryItem}`;
}
