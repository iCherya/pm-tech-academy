import { createElement, fetchAPI } from '../../utils/helpers.js';

export default class UserRepositories {
    static render(userData) {
        const heading = createElement('h2', {}, 'Repositories');
        const ul = createElement('ul');

        fetchAPI(userData.repos_url)
            .then((repositoriesArr) => {
                repositoriesArr.forEach((item) => {
                    ul.append(UserRepositories.createItem(item));
                });
            })
            .catch(console.log);

        let disclaimer = '';
        if (userData.public_repos > 30 || !userData.public_repos) {
            disclaimer = createElement('p', { className: 'disclaimer' });

            if (userData.public_repos) {
                disclaimer.innerHTML = `*Showing only 30 results from ${userData.public_repos} total repositories. Click <a href="${userData.html_url}?tab=repositories" target="_blank">here</a> to view all ${userData.login}'s repositories`;
            } else {
                disclaimer.innerHTML = `*Can not show repositories list, because ${userData.login} hasn't once`;
            }
        }

        return createElement('div', {
            className: 'repos',
            children: [heading, disclaimer, ul]
        });
    }

    static createItem(reposotory) {
        return createElement('li', {
            className: 'repo-item',
            children: [
                createElement('h3', {
                    className: 'repo-name',
                    children: [
                        createElement(
                            'a',
                            {
                                className: 'repo-name__link',
                                href: reposotory.html_url,
                                target: '_blank'
                            },
                            reposotory.name
                        )
                    ]
                }),
                createElement(
                    'p',
                    {
                        className: 'repo-description'
                    },
                    reposotory.description
                ),
                createElement('div', {
                    className: 'repo-stats',
                    children: [
                        createElement(
                            'p',
                            {
                                className: 'repo-stats__language'
                            },
                            reposotory.language
                        ),
                        createElement('div', {
                            className: 'repo-stats__stars',
                            children: [
                                createElement('img', {
                                    src: 'img/star.svg',
                                    alt: 'Star icon'
                                }),
                                createElement('span', {}, `${reposotory.stargazers_count}`)
                            ]
                        }),
                        createElement('div', {
                            className: 'repo-stats__forks',
                            children: [
                                createElement('img', {
                                    src: 'img/fork.svg',
                                    alt: 'Forks icon'
                                }),
                                createElement('span', {}, `${reposotory.forks_count}`)
                            ]
                        }),
                        createElement('div', {
                            className: 'repo-stats__watch',
                            children: [
                                createElement('img', {
                                    src: 'img/watch.svg',
                                    alt: 'Watch icon'
                                }),
                                createElement('span', {}, `${reposotory.watchers_count}`)
                            ]
                        })
                    ]
                })
            ]
        });
    }
}
