export function showPromo(event: Event) {
    const rsPromo = document.querySelector('.summary__rs-promo');
    const mgPromo = document.querySelector('.summary__mg-promo');
    if (event.target instanceof HTMLInputElement) {
        const value = event.target.value.trim().toLowerCase();
        if (value === 'rs') {
            rsPromo?.classList.add('promo-visible');
        } else if (value === 'mg') {
            mgPromo?.classList.add('promo-visible');
        } else {
            rsPromo?.classList.remove('promo-visible');
            mgPromo?.classList.remove('promo-visible');
        }
    }
}
