import { getHeader } from '../layouts/getHeader';
import { getStartMain } from '../layouts/getStartMain';
import { getFooter } from '../layouts/getFooter';

export function getMainPage() {
    getHeader();
    getStartMain();
    getFooter();
}
