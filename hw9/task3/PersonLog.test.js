const PersonLog = require('./PersonLog');

describe('check Task 3 (class Person) for gender field validation', () => {
    it('logs array must be empty after creating an instance', () => {
        const personLogInstace1 = new PersonLog();

        expect(personLogInstace1.logs.length).toBe(0);
    });

    it('logs array must not change if property value not changes or try to set new property', () => {
        const personLogInstace2 = new PersonLog();
        const temp = personLogInstace2.name;

        personLogInstace2.name = temp;
        personLogInstace2.someAnotherProp = 'someAnotherValue';

        expect(personLogInstace2.logs.length).toBe(0);
    });

    it('logs array must contain logs property values changes with valid data', () => {
        const personLogInstace3 = new PersonLog();
        const counter = 5;
        let i = 0;

        while (i < counter) {
            personLogInstace3.name = `Name${i}`;
            i++;
        }

        const validLogs = [
            'name: NoName Name0',
            'name: Name0 Name1',
            'name: Name1 Name2',
            'name: Name2 Name3',
            'name: Name3 Name4'
        ];

        expect(personLogInstace3.logs.length).toBe(counter);
        expect(personLogInstace3.logs).toEqual(validLogs);
    });

    it('logs array must be read only', () => {
        const personLogInstace4 = new PersonLog();
        personLogInstace4.gender = 1;
        personLogInstace4.name = 'Test';

        // these manipulations will not change the array
        personLogInstace4.logs.push('value');
        personLogInstace4.logs.pop();
        personLogInstace4.logs = 'string';

        expect(personLogInstace4.logs.length).toBe(2);
    });
});
