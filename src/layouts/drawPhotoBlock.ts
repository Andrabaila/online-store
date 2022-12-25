import { Product } from '../data/types';

export function drawPhotoBlock(parent: HTMLElement, data: Product) {
    const activePhoto: HTMLImageElement = parent.appendChild(document.createElement('img'));
    activePhoto.classList.add('active-photo');
    activePhoto.src = data.images[0];

    const gallery: HTMLDivElement = parent.appendChild(document.createElement('div'));
    gallery.classList.add('gallery');
    for (let i = 0; i < data.images.length; i++) {
        const photo: HTMLImageElement = gallery.appendChild(document.createElement('img'));
        photo.classList.add('photo');
        photo.src = data.images[i];
        photo.addEventListener('click', function () {
            activePhoto.src = this.src;
        });
    }
}
