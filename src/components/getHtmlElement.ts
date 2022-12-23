import { AppendPoint } from '../data/types';

export function getHtmlElement(parent: AppendPoint, tag: string, style: string[], content?: string) {
    let parentContainer: AppendPoint;

    if (typeof parent === 'string') {
        const parentArray = document.querySelectorAll(parent);
        parentContainer = parentArray[parentArray.length - 1];
    } else {
        parentContainer = parent;
    }

    const newElement = document.createElement(tag);

    for (let i = 0; i < style.length; i++) {
        newElement.classList.add(style[i]);
    }

    if (content) newElement.textContent = content;
    parentContainer.append(newElement);
    return newElement;
}
