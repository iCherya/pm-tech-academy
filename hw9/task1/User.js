class User {
    static #callCounter = 0;

    callMe() {
        User.#callCounter++;
    }
    static callCount() {
        return User.#callCounter;
    }
}

module.exports = User;
