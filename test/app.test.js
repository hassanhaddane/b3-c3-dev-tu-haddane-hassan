/**
 * Testing operations and validation functions
 * with Mocha and Node.js Assert module.
 *
 */

const operations = require('../src/operations.js');
const assert = require('assert');


it('#1 - Correctly calculates the sum of 100 and 400', () => {
    assert.equal(operations.add(100, 400), 500);
});

it('#2 - Correctly calculates the sum of -20 and -20', () => {
    assert.equal(operations.add(-20, -20), -40);
});

it('#3 - Correctly calculates the difference of 999 and 666', () => {
    assert.equal(operations.subtract(999, 666), 333);
});

it('#4 - Correctly calculates the product of 128 and 128', () => {
    assert.equal(operations.multiply(128, 128), 16384);
});

it('#5 - Correctly calculates the quotient of 10 and 2', () => {
    assert.equal(operations.divide(10, 2), 5);
});

it('#6 - Correctly calculates the percent of 13 and 3', () => {
    assert.equal(operations.percent(13, 5), 3);
});

it('#7 - Correctly square the square of 52 and 5', () => {
    assert.equal(operations.square(52, 5), 2704);
});

it('#8 - Correctly sqrt the squareroot of 78 and 9', () => {
    assert.equal(operations.squareroot(78, 9), 8.831760866327848);
});

it('#9 - Correctly power the power of 13 and 3', () => {
    assert.equal(operations.power(88, 45), 3.174828328240501e+87);
});

it('#10 - Indicates failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('salam', 5), false);
});

it('#11 - Indicates failure when two strings is used instead of numbers', () => {
    assert.equal(operations.validateNumbers('salam', 'alaykoum'), false);
});

it('#12 - Successfully runs when two numbers are used', () => {
    assert.equal(operations.validateNumbers(2022, 2023), true);
});


