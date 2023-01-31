import { getHtmlElement } from './getHtmlElement';
import { setInputCount } from './setInputCount';

export function getInputCount(num: string) {
    const inputCount = document.createElement('div');
    inputCount.classList.add('input-count');
    const decreaseButton = getHtmlElement({
        parentNode: inputCount,
        tag: 'button',
        style: ['button', 'button_input-count'],
        content: '-',
    });
    decreaseButton.addEventListener('click', setInputCount);

    getHtmlElement({ parentNode: inputCount, tag: 'p', style: ['input-count__field'], content: num });

    const increaseButton = getHtmlElement({
        parentNode: inputCount,
        tag: 'button',
        style: ['button', 'button_input-count'],
        content: '+',
    });
    increaseButton.addEventListener('click', setInputCount);

    return inputCount;
}
