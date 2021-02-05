const Person = require('../task2/Person');

class PersonLog extends Person {
    #logs = [];

    #createLogEntry(propertyName, oldValue, newValue) {
        this.#logs.push(`${propertyName}: ${oldValue} ${newValue}`);
    }

    constructor(name, gender) {
        super(name, gender);

        const store = new Proxy(this, {
            get: (target, propertyName) => {
                return Reflect.get(target, propertyName);
            },
            set: (target, propertyName, newValue) => {
                if (propertyName === 'logs') return;

                if (Reflect.has(target, propertyName)) {
                    const oldValue = target[propertyName];

                    if (oldValue !== newValue) {
                        Reflect.set(target, propertyName, newValue);
                        target.#createLogEntry(propertyName, oldValue, newValue);
                    }
                }
            }
        });

        return Object.freeze(store);
    }

    get logs() {
        const logsArr = [...this.#logs];
        return logsArr;
    }
}

module.exports = PersonLog;
