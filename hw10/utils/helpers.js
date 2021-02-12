export function createElement(tagName, props = {}, innerHTML) {
    const $el = document.createElement(tagName);

    for (const propName in props) {
        if (propName === 'children' && props.children) {
            $el.append(...props.children);
        } else if (typeof props[propName] !== 'undefined') {
            $el[propName] = props[propName];
        }
    }

    if (innerHTML) {
        $el.innerHTML = innerHTML;
    }

    return $el;
}

export function debaunce(fn, ms) {
    let timeout;
    return function debounced(...arg) {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => fn.apply(this, arg), ms);
    };
}

export function fetchAPI(href) {
    return fetch(href)
        .then((response) => {
            if (response.status === 403) {
                throw Error(`Too many requests`);
            }
            if (response.status !== 200) {
                throw Error(`Something bad happend`);
            }

            return response.json();
        })
        .catch((error) => {
            const errorMessage = createElement(
                'div',
                {
                    className: 'errorMessage'
                },
                `${error.message}`
            );

            document.body.prepend(errorMessage);
            setTimeout(() => errorMessage.remove(), 2000);
        });
}
