import { createElement } from '../../utils/helpers.js';
import User from '../User/User.js';
import Search from '../Search/Search.js';

export default class SearchItem {
    static render({ avatar_url, login }) {
        return createElement('li', {
            className: 'live-search__item',
            children: [
                createElement('img', {
                    className: 'live-search__item--avatar',
                    alt: `${login}'s avatar`,
                    src: avatar_url,
                    onerror: function () {
                        this.src = '../../img/github-logo.svg';
                    }
                }),
                createElement(
                    'p',
                    {
                        className: 'live-search__item--login'
                    },
                    `${login}`
                )
            ],
            onclick: () => {
                User.render(login);
                Search.searchResults.hidden = true;
            }
        });
    }
}
