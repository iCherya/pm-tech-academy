const Person = require('./Person');
const PersonGenderError = require('./PersonGenderError');

describe('check Task 2 (class Person) for gender field validation', () => {
    const person = new Person();

    it('an instance should have defauld name value', () => {
        expect(person.name).toBe('NoName');
    });

    it('an instance should have defauld gender value', () => {
        expect(person.gender).toBe(0);
    });

    it('gender field could be changed only for valid gender values', () => {
        expect((person.gender = 2)).toBe(2);
        expect((person.gender = 1)).toBe(1);
        expect((person.gender = 0)).toBe(0);
        expect((person.gender = 1)).toBe(1);
    });

    it('throw a custom error if gender filed is changed for NOT valid gender values', () => {
        try {
            person.gender = 6;
        } catch (e) {
            expect(e).toBeInstanceOf(PersonGenderError);
        }
    });

    it('static GENDER object should not able to change', () => {
        Person.GENDER = { a: 1, b: 2, c: 3 };

        expect(Person.GENDER).toEqual({
            NOT_DEFINED: 0,
            MAN: 1,
            WOMAN: 2
        });
    });
});
