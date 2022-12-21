export function getFooter() {
    if (document.querySelector('.footer')) return;
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerWrapper = document.createElement('div');
    footerWrapper.classList.add('footer__wrapper');
    footer.append(footerWrapper);
    body?.append(footer);

    const githubLink1 = document.createElement('a');
    githubLink1.classList.add('footer__item', 'footer__item_github-link');
    githubLink1.href = 'https://github.com/Andrabaila';
    githubLink1.textContent = 'Yury Andrabaila';

    const githubLink2 = document.createElement('a');
    githubLink2.classList.add('footer__item', 'footer__item_github-link');
    githubLink2.href = 'https://github.com/Katsiaryna-Andrabaila';
    githubLink2.textContent = 'Katsiaryna Andrabaila';

    const creationDate = document.createElement('span');
    creationDate.classList.add('footer__item');
    creationDate.textContent = '2023';

    const rsSchoolLink = document.createElement('a');
    rsSchoolLink.classList.add('footer__item', 'footer__item_rsschool-link');
    rsSchoolLink.href = 'https://rs.school/images/rs_school_js.svg';

    footerWrapper.append(githubLink1, githubLink2, creationDate, rsSchoolLink);
}
