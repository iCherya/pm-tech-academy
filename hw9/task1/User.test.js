const User = require('./User');

describe('check Task 1 (class User) and valid calculation for callCount() method', () => {
    const user1 = new User();
    const user2 = new User();
    const user3 = new User();

    it('callCount() must be equal to 0 on start', () => {
        expect(User.callCount()).toBe(0);
    });

    it('should provide valid calculation after callMe() on one instance', () => {
        user1.callMe(); // 1

        expect(User.callCount()).toBe(1);
    });

    it('should provide valid calculation after callMe() on few instances', () => {
        user1.callMe(); // 2
        user2.callMe(); // 3
        user2.callMe(); // 4
        user3.callMe(); // 5

        expect(User.callCount()).toBe(5);
    });

    it('calls counter shoult not be available for changes', () => {
        // I know, that eval is bad practice
        expect(() => eval('User.#callCounter = 5')).toThrow(SyntaxError);
    });
});
