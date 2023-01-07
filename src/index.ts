import { routePages } from './features/routePages';
import { setLocalStorage } from './features/setLocalStorage';
import { getLocalStorage } from './features/getLocalStorage';

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('hashchange', routePages);
//localStorage.clear();
//setLocalStorage();
getLocalStorage().then(() => {
    routePages();
});
