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
            if (response.status !== 200) {
                throw Error('Something bad happend');
            }
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
}
