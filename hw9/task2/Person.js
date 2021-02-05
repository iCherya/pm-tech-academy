const PersonGenderError = require('./PersonGenderError');

class Person {
    static GENDER = {
        NOT_DEFINED: 0,
        MAN: 1,
        WOMAN: 2
    };

    #name = 'NoName';
    #gender = Person.GENDER.NOT_DEFINED;

    #updateGender(genderValue) {
        const genderValidValues = Object.values(Person.GENDER);

        if (genderValidValues.includes(genderValue)) {
            this.#gender = genderValue;
        } else {
            const personGenderError = new PersonGenderError(
                `Sorry, we suppose that ${genderValue} is not a valid gender value`
            );

            throw personGenderError;
        }
    }

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    set gender(genderValue) {
        if (genderValue !== undefined) this.#updateGender(genderValue);
    }

    get gender() {
        return this.#gender;
    }

    set name(nameValue) {
        if (nameValue !== undefined) this.#name = nameValue;
    }

    get name() {
        return this.#name;
    }
}

Object.freeze(Person);

module.exports = Person;
