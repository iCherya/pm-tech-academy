/**
 * Task 1
 * Запросить у пользователя два числа, n и m - вывести все числа в диапазоне между ними.
 */
document.querySelector('#task-1-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const [, , form, output] = document.querySelector('#task-1').children;
    const [input1, input2] = form;

    if (input1.value && input2.value) {
        const result = [];
        let [min, max] = [+input1.value, +input2.value];

        if (min > max) {
            [min, max] = [max, min];
        }

        for (let i = min; i <= max; i++) {
            result.push(i);
        }

        output.innerText = result.join(', ');
    } else {
        output.innerText = 'Please, fill input fields';
    }
});

/**
 * Task 2
 * Запросить у пользователя два числа,
 * написать функцию при помощи стрелочного синтаксиса и аналог с function expression
 * которая бы возводила первое число в степень второго введенного числа,
 * или в степень 2 по умолчанию
 */
document.querySelector('#task-2-btn').addEventListener('click', (e) => {
    e.preventDefault();

    function functionDeclaration(n, m = 2) {
        return n ** m;
    }
    const functionExpression = function (n, m = 2) {
        return n ** m;
    };
    const functionArrow = (n, m = 2) => n ** m;

    const [, , form, output] = document.querySelector('#task-2').children;
    const [input1, input2] = form;

    if (input1.value) {
        const result = functionArrow(input1.value, input2.value || undefined);

        output.innerText = result;
    } else {
        output.innerText = 'Please, fill input fields';
    }
});

/**
 * Работа с Number
 * Task 1
 * Запросить у пользователя два числа с плавающей точкой -
 * умножить на 0.3 и округлить до ближайшего целого числа.
 */
document.querySelector('#numbers-1-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const [, , form, output] = document.querySelector('#numbers-1').children;
    const [input1, input2] = form;

    if (input1.value && input2.value) {
        let [n, m] = [+input1.value, +input2.value];

        output.innerText = [n, m].map((el) => Math.round(el * 0.3)).join(', ');
    } else {
        output.innerText = 'Please, fill input fields';
    }
});

/**
 * Работа с Number
 * Task 2
 * Запросить у пользователя два числа - вывести случайное целое число в этом диапазоне.
 */
document.querySelector('#numbers-2-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const [, , form, output] = document.querySelector('#numbers-2').children;
    const [input1, input2] = form;

    const randomIntegerFromRange = (min, max) => {
        if (min > max) {
            [min, max] = [max, min];
        }

        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    if (input1.value && input2.value) {
        let [n, m] = [+input1.value, +input2.value];

        output.innerText = randomIntegerFromRange(n, m);
    } else {
        output.innerText = 'Please, fill input fields';
    }
});

/**
 * Работа со строками:
 * Task 1
 * Запросить  у пользователя две строки, найти сколько раз повторяется вторая в первой. Вывести индексы всех вхождений.
 */
document.querySelector('#strings-1-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const [, , form, output] = document.querySelector('#strings-1').children;
    const [input1, input2] = form;

    const findStringEntries = (str1, str2) => [...str1.matchAll(str2)].map((el) => el.index);

    if (input1.value && input2.value) {
        const matches = findStringEntries(input1.value, input2.value);
        output.innerText =
            matches.length > 0
                ? `Total: ${matches.length} matches. Indexes: ${matches.join(', ')}`
                : 'No matches';
    } else {
        output.innerText = 'Please, fill input fields';
    }
});

/**
 * Работа со строками:
 * Task 2
 * Найти все численные значения в строке “ECMAScript 2015 (6th Edition, ECMA-262)”.
 */
const findAllMatches = (str, regex) => {
    const matches = str.matchAll(regex);
    const result = [...matches].map((el) => [el[0], el.index]);

    return result;
};

console.log(findAllMatches('ECMAScript 2015 (6th Edition, ECMA-262)', /\d/g));

/**
 * Работа со строками:
 * Task 3
 * Найти все символы в верхнем регистре "ECMAScript 2015 (6th Edition, ECMA-262)”
 */
console.log(findAllMatches('ECMAScript 2015 (6th Edition, ECMA-262)', /[A-Z]/g));

// Task 4 в отдельных файлах: index.html и index.js
