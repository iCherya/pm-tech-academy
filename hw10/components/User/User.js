import { createElement, fetchAPI } from '../../utils/helpers.js';
import { GITHUB_API } from '../../utils/config.js';

import UserInformation from '../UserInformation/UserInformation.js';
import UserRepositories from '../UserRepositories/UserRepositories.js';
import UserSocial from '../UserSocial/UserSocial.js';

export default class User {
    static nodeEl = document.querySelector('.user');
    static loader = createElement('div', { className: 'loader' });

    static render(login) {
        if (document.getElementById(login) && document.getElementById(login).id === login) {
            return;
        }

        User.nodeEl.id = login;
        document.body.append(User.loader);

        const url = new URL(`${GITHUB_API.searchUser}/${login}`, GITHUB_API.base);

        fetchAPI(url.href)
            .then((data) => User.renderSections(data))
            .catch(console.log);
    }

    static renderSections(userData) {
        const userSections = [UserInformation, UserRepositories, UserSocial];

        User.nodeEl.innerHTML = '';
        User.nodeEl.append(
            ...userSections.map((section) => {
                return section.render(userData) || '';
            })
        );

        User.loader.remove();
    }
}
