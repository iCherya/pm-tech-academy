import { createElement } from '../../utils/helpers.js';

export default class UserInformation {
    static render(userData) {
        return createElement('div', {
            className: 'user-info',
            children: [
                createElement('h2', {}, 'Information'),
                createElement('div', {
                    className: 'wrapper',
                    children: [
                        createElement('div', {
                            className: 'user-avatar',
                            children: [
                                createElement('img', {
                                    src: userData.avatar_url,
                                    onerror: function () {
                                        this.src = '../../img/github-logo.svg';
                                    }
                                })
                            ]
                        }),
                        createElement('ul', {
                            children: UserInformation.getListItems(userData)
                        })
                    ]
                })
            ]
        });
    }

    static getListItems(userData) {
        const result = [];

        userData.name &&
            result.push(
                createElement(
                    'li',
                    {
                        className: 'name'
                    },
                    `${userData.name}`
                )
            );

        result.push(
            createElement('li', {
                className: 'login',
                children: [
                    createElement(
                        'a',
                        {
                            href: userData.html_url,
                            target: 'blank'
                        },
                        `@${userData.login}`
                    )
                ]
            })
        );

        userData.bio &&
            result.push(
                createElement(
                    'li',
                    {
                        className: 'bio'
                    },
                    userData.bio
                )
            );

        result.push(
            createElement(
                'li',
                {
                    className: 'social'
                },
                `<span>${userData.followers}</span> followers · <span>${userData.following}</span> following`
            ),
            createElement(
                'li',
                {
                    className: 'activity'
                },
                `<span>${userData.public_repos}</span> repositories · <span>${userData.public_gists}</span> gists`
            ),
            createElement(
                'li',
                {
                    className: 'created_at'
                },
                `Joined Github on ${new Date(userData.created_at).toDateString()}`
            )
        );

        userData.company &&
            result.push(
                createElement('li', {
                    className: 'company',
                    children: [
                        createElement(
                            'a',
                            {
                                href: `https://github.com/${userData.company.slice(1)}`
                            },
                            `${userData.company}`
                        )
                    ]
                })
            );

        userData.location &&
            result.push(
                createElement(
                    'li',
                    {
                        className: 'location'
                    },
                    `${userData.location}`
                )
            );

        userData.email &&
            result.push(
                createElement('li', {
                    className: 'email',
                    children: [
                        createElement(
                            'a',
                            {
                                href: `mailto:${userData.email}`
                            },
                            `${userData.email}`
                        )
                    ]
                })
            );

        userData.blog &&
            result.push(
                createElement('li', {
                    className: 'blog',
                    children: [
                        createElement(
                            'a',
                            {
                                href: userData.blog
                            },
                            `${userData.blog}`
                        )
                    ]
                })
            );

        userData.twitter_username &&
            result.push(
                createElement('li', {
                    className: 'twitter',
                    children: [
                        createElement(
                            'a',
                            {
                                href: `https://twitter.com/${userData.twitter_username}`
                            },
                            `${userData.twitter_username}`
                        )
                    ]
                })
            );

        return result;
    }
}
