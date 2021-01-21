/** Task 2
 * Реализовать функцию flatWhite, которая будет принимать
 * двумерный массив и делать из него одномерный.
 * Подразумевается использование rest
 */

const assert = require('assert');

function flatWhite(arr) {
    return [...arr.flat()];
}

assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);
assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);
console.log('Looks good');

/**
 * For N-dimentional subArrays
 */
function flatten(arr) {
    let result = [];

    for (const elem of arr) {
        if (Array.isArray(elem)) {
            result.push(...flatten(elem));
        } else {
            result.push(elem);
        }
    }

    return result;
}

assert.deepStrictEqual(
    flatten([
        [0, ['star', [1, true, 2], NaN]],
        [[[[[[[[3]]]]]], [false]]],
        'milk',
        [{ key: 'value' }, [[{ four: 4 }]], [5, [6], null]],
        ['to', Infinity, ['and', 'beyond', [[[[[[[['...']]]]]]]]]]
    ]),
    [
        0,
        'star',
        1,
        true,
        2,
        NaN,
        3,
        false,
        'milk',
        { key: 'value' },
        { four: 4 },
        5,
        6,
        null,
        'to',
        Infinity,
        'and',
        'beyond',
        '...'
    ]
);
console.log('Looks good');
