import { getHtmlElement } from './getHtmlElement';

export function getInputCount(num: string) {
    const inputCount = document.createElement('div');
    inputCount.classList.add('input-count');
    getHtmlElement({ parentNode: inputCount, tag: 'button', style: ['button', 'button_input-count'], content: '-' });
    getHtmlElement({ parentNode: inputCount, tag: 'p', style: ['input-count__field'], content: num });
    getHtmlElement({ parentNode: inputCount, tag: 'button', style: ['button', 'button_input-count'], content: '+' });

    return inputCount;
}
