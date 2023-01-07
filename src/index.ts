import { routePages } from './features/routePages';
import { setLocalStorage } from './features/setLocalStorage';
import { getLocalStorage } from './features/getLocalStorage';

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('hashchange', routePages);

window.addEventListener('load', getLocalStorage);

routePages();
