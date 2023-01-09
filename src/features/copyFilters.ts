export function copyFilters(event: Event, delay: number) {
    const href = window.location.href;
    navigator.clipboard.writeText(href);
    if (event.target && event.target instanceof HTMLButtonElement) {
        event.target.textContent = 'Copied!';
        setTimeout(() => {
            if (event.target && event.target instanceof HTMLButtonElement) {
                event.target.textContent = 'Copy filters';
            }
        }, delay);
    }
}
