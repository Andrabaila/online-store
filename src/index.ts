import { routePages } from './features/routePages';
import { setHash } from './features/setHash';
import { setLocalStorage } from './features/setLocalStorage';
import { getLocalStorage } from './features/getLocalStorage';

window.addEventListener('hashchange', routePages);
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

setHash('/');
