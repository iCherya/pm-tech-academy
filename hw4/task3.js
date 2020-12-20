const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Please, enter month number (from 1 to 12 inclusive)');

rl.on('line', (line) => {
    if (line !== '\n') {
        const message = getMonthMessage(line);
        console.log(message);
        // rl.close();
    }
});

function getMonthMessage(input) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const isNumber = (x) => !Number.isNaN(+x);
    const isValdMonthRange = (number) => 0 < number && number < 13;

    if (isNumber(input) && isValdMonthRange(+input)) {
        return months[+input - 1];
    } else if (months.includes(input)) {
        return months.findIndex((el) => el === input) + 1;
    }

    return `Please, check your input: "${input}"`;
}
