import { getHeader } from '../layouts/getHeader';
import { getFooter } from '../layouts/getFooter';
import { get404Content } from '../layouts/get404Content';

export function get404Page() {
    getHeader();
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (main) {
        main.remove();
    }

    const newMain = document.createElement('main');
    newMain.classList.add('main', 'main_page-not-found');
    if (header) {
        header.after(newMain);
    }
    get404Content();
    getFooter();
}
