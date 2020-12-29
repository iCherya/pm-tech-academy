/**
 * Работа со строками:
 * Task 4
 * Написать несколько регулярных выражений применить в поиске по предложенному тексту, можно скопировать отдельно в любой инструмент на подобии https://regexr.com:
 * - 1) Найти все значения цветов #HEX в HTML
 * - 2) Найти все вхождения номера телефона в стандартном виде +(380) 066 666 66 66
 * с операторами: 067, 068, 096, 097, 098, 050, 066, 095, 099, 063, 073, 093.
 * Опционально:
 * - 3) Написать логику которая находила бы все теги <h1> и заменила их на <h2/>
 * - 4) Найти все теги <script></script>
 */

// 1
const task1 = () => {
    const regexHexColors = /#([0-9A-F]{3}|[0-9A-F]{6})/gi;
    const string = document.documentElement.innerHTML;
    const matches = [...string.matchAll(regexHexColors)];

    return matches.map((el) => el[0]);
};

// 2
const task2 = () => {
    const regexPhoneNumber = /^(\+ \(380\) 0(67|68|96|97|98|50|66|95|99|63|73|93) \d{3} \d{2} \d{2})/g;

    const paragraphs = document.querySelectorAll('p');

    for (let p of paragraphs) {
        const text = p.innerText;

        if (regexPhoneNumber.test(text)) {
            p.style.background = 'lightgreen';
        }
    }
};

// 3
const task3 = () => {
    let allOldTags = document.querySelectorAll('h1');

    while (allOldTags.length > 0) {
        for (let tag of allOldTags) {
            tag.outerHTML = `<h2>${tag.innerHTML}</h2>`;
        }

        allOldTags = document.querySelectorAll('h1');
    }
};

// 4
const task4 = () => {
    const scripts = document.querySelectorAll('script');

    return scripts;
};

document.getElementById('solve').onclick = () => {
    const results = document.createElement('div');

    const colors = task1();
    results.innerHTML += `Total colors matches: ${colors.length}, colors: ${colors.join(', ')}<br>`;

    task2(); // highlighted matched phone numbers
    task3(); // changed all tags

    const scripts = task4();
    results.innerHTML += `Total scripts on page: ${scripts.length}`;

    document.body.append(results);
};
