import { createElement, fetchAPI } from '../../utils/helpers.js';
import User from '../User/User.js';

export default class UserSocial {
    static render(userData) {
        this.login = userData.login;
        this.html_url = userData.html_url;

        let { followers_url, following_url, followers, following } = userData;
        following_url = following_url.split('{')[0];

        return createElement('div', {
            className: 'social',
            children: [
                createElement('h2', {}, 'Social'),
                createElement('div', {
                    className: 'wrapper',
                    children: [
                        UserSocial.createList('followers', followers_url, followers) || '',
                        UserSocial.createList('following', following_url, following) || ''
                    ]
                })
            ]
        });
    }

    static createList(type, apiUrl, count) {
        const heading = createElement('h3', {}, `${type[0].toUpperCase() + type.slice(1)}`);

        let disclaimer = '';
        if (count > 30 || !count) {
            disclaimer = createElement('p', { className: 'disclaimer' });
            if (count) {
                disclaimer.innerHTML = `*Showing only 30 results from ${count} total. Click <a href="${UserSocial.html_url}?tab=${type}" target="_blank">here</a> to view all ${UserSocial.login}'s ${type}`;
            } else {
                disclaimer.innerHTML = `*Can not show ${type} list, because ${UserSocial.login} hasn't once`;
            }
        }

        const ul = createElement('ul', {});
        fetchAPI(apiUrl)
            .then((users) => {
                users.forEach((item) => {
                    ul.append(UserSocial.createItem(item));
                });
            })
            .catch(console.log);

        return createElement('div', {
            className: type,
            children: [heading, disclaimer, ul]
        });
    }

    static createItem(userData) {
        return createElement('li', {
            className: 'social-item',
            children: [
                createElement('div', {
                    className: 'avatar',
                    children: [
                        createElement('img', {
                            src: userData.avatar_url,
                            alt: `${userData.login}'s avatar`,
                            onerror: function () {
                                this.src = '../../img/github-logo.svg';
                            },
                            onclick: () => User.render(userData.login)
                        })
                    ]
                }),
                createElement('p', {
                    className: 'login',
                    children: [
                        createElement(
                            'a',
                            {
                                target: '_blank',
                                href: userData.html_url
                            },
                            `${userData.login}`
                        )
                    ]
                })
            ]
        });
    }
}
