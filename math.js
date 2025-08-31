/**
 * Adds two numbers and returns their sum
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
    // Check if inputs are valid numbers
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Invalid input: Both arguments must be valid numbers');
    }
    
    return a + b;
}

/**
 * Performs arithmetic calculation based on the provided operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Operation to perform ('add', 'subtract', 'multiply', 'divide')
 * @returns {number} Result of the operation
 */
function calculate(a, b, operation) {
    // Check if inputs are valid numbers
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Invalid input: Both arguments must be valid numbers');
    }
    
    switch (operation) {
        case 'add':
            return sum(a, b);
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                throw new Error('Division by zero is not allowed');
            }
            return a / b;
        default:
            throw new Error('Invalid operation: Operation must be add, subtract, multiply, or divide');
    }
}

// Export the functions
module.exports = {
    sum,
    calculate
};
