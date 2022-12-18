/**
 * All mathematical and validation functions
 * for Node.js calculator app.
 *
 */
// Fonctions de base (BDD)
const add = (x, y) => (+x) + (+y);
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);
const percent = (x, y) => (+x) % (+y);


// Fonctions scientifiques (TDD)
const square = (x) => (x) * (x);
const squareroot = (x) => Math.sqrt(x);
const power = (x, y) => Math.pow(x, y);


const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return false;
    }
    return true;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    percent,
    square,
    squareroot,
    power,
    validateNumbers,
}




