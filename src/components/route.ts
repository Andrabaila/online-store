//import { getCartPage } from '../pages/getCartPage';
//import { getMainPage } from '../pages/getMainPage';
//import { getProductPage } from '../pages/getProductPage';
//import { routes } from '../constants/constants';
//import { Utils } from './utils';

/* export async function router() {
    const content = null || document.querySelector('.main');
    const request = Utils.parseRequestURL();
    const parsedURL =
        (request.resource ? '/' + request.resource : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? '/' + request.verb : '');

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    const page = routes[parsedURL] ? routes[parsedURL] : Error404;
    if (content) {
        content.innerHTML = await page.render();
    }
    await page.after_render();
} */

//window.addEventListener('hashchange', router);

//window.addEventListener('load', router);
