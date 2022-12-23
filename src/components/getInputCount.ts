import { getHtmlElement } from './getHtmlElement';

export function getInputCount(num: string) {
    const inputCount = document.createElement('div');
    inputCount.classList.add('input-count');
    getHtmlElement(inputCount, 'button', ['button', 'button_input-count'], '-');
    getHtmlElement(inputCount, 'p', ['input-count__field'], num);
    getHtmlElement(inputCount, 'button', ['button', 'button_input-count'], '+');

    return inputCount;
}
