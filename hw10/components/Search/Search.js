import { createElement, debaunce, fetchAPI } from '../../utils/helpers.js';
import { GITHUB_API, LIVE_SEARCH } from '../../utils/config.js';
import SearchItem from '../SearchItem/SearchItem.js';
import User from '../User/User.js';

export default class Search {
    static fetchUrl = new URL(GITHUB_API.searchUsers, GITHUB_API.base);
    static searchResults = document.querySelector('.live-search');
    static searchInput = document.querySelector('.search__input');
    static searchButton = document.querySelector('.search__button');

    static init() {
        Search.searchInput.addEventListener('focus', () => {
            Search.searchResults.hidden = false;
        });

        Search.searchInput.addEventListener(
            'input',
            debaunce(Search.renderSearchResults, LIVE_SEARCH.debounceTime)
        );

        Search.searchButton.addEventListener('click', () => {
            const login = Search.searchResults.querySelector('.live-search__item--login')
                .textContent;

            User.render(login);
            Search.searchResults.hidden = true;
        });
    }

    static renderSearchResults() {
        Search.clearSearchResults();
        Search.searchButton.disabled = true;

        const query = Search.searchInput.value.trim().toLowerCase();
        Search.fetchUrl.searchParams.set('q', query);

        if (query === '') {
            Search.renderSearchStatus('Please, input search request');
            return;
        }

        Search.renderSearchStatus('Loading....');

        fetchAPI(Search.fetchUrl.href)
            .then((data) => {
                const users = data.items;
                Search.clearSearchResults();

                if (users.length === 0) {
                    Search.renderSearchStatus(`No users with login "${query}" found`);
                    return;
                }

                const resultsToShow =
                    users.length < LIVE_SEARCH.maxResults ? users.length : LIVE_SEARCH.maxResults;

                for (let i = 0; i < resultsToShow; i++) {
                    Search.searchResults.append(SearchItem.render(users[i]));
                }

                if (users[0].login.toLowerCase() === query) {
                    Search.searchButton.disabled = false;
                }
            })
            .catch(console.log);
    }

    static clearSearchResults() {
        Search.searchResults.innerHTML = '';
    }

    static renderSearchStatus(message) {
        Search.searchResults.append(createElement('li', {}, message));
    }
}
