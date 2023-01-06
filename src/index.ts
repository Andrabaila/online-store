import { getMainPage } from './pages/getMainPage';
import { setLocalStorage } from './features/setLocalStorage';
import { getLocalStorage } from './features/getLocalStorage';

getMainPage();

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);
//localStorage.clear();
