import { UI } from '../data/UI';

export function getFooter() {
    if (document.querySelector('footer')) {
        return;
    }

    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerWrapper = document.createElement('div');
    footerWrapper.classList.add('footer__wrapper');
    footer.append(footerWrapper);
    body?.append(footer);

    const githubLinkFirstTeammate = document.createElement('a');
    githubLinkFirstTeammate.classList.add('footer__item', 'footer__item_github-link');
    githubLinkFirstTeammate.href = 'https://github.com/Andrabaila';
    githubLinkFirstTeammate.target = '_blank';
    githubLinkFirstTeammate.textContent = UI.footerText1;

    const githubLinkSecondTeammate = document.createElement('a');
    githubLinkSecondTeammate.classList.add('footer__item', 'footer__item_github-link');
    githubLinkSecondTeammate.href = 'https://github.com/Katsiaryna-Andrabaila';
    githubLinkSecondTeammate.target = '_blank';
    githubLinkSecondTeammate.textContent = UI.footerText2;

    const applicationCreationDate = document.createElement('span');
    applicationCreationDate.classList.add('footer__item');
    applicationCreationDate.textContent = UI.footerText3;

    const rsSchoolLink = document.createElement('a');
    rsSchoolLink.classList.add('footer__item', 'footer__item_rsschool-link');
    rsSchoolLink.href = 'https://rs.school/js/';
    rsSchoolLink.target = '_blank';

    footerWrapper.append(githubLinkFirstTeammate, githubLinkSecondTeammate, applicationCreationDate, rsSchoolLink);
}
