import { routePages } from './features/routePages';
import { setHash } from './features/setHash';
window.addEventListener('hashchange', routePages);
setHash('/');
