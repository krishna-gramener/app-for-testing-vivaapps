# Simple Calculator App

A simple calculator web application that accepts two numbers and returns their sum, with unit tests to verify functionality.

## Features

- Clean, responsive UI
- Separation of UI and business logic
- Error handling for invalid inputs
- Comprehensive unit tests

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Jest (for testing)

## Project Structure

- `index.html` - Main HTML file with minimal inline CSS
- `script.js` - UI logic for the calculator
- `math.js` - Pure functions for arithmetic operations
- `__tests__/math.test.js` - Jest unit tests for the math module
- `package.json` - Project configuration and dependencies

## How to Use

1. Open `index.html` in any modern web browser
2. Enter the first number in the "First Number" field
3. Enter the second number in the "Second Number" field
4. Click the "Calculate Sum" button
5. The sum will be displayed below the form

## Running Tests

To run the unit tests:

1. Install dependencies:
   ```
   npm install
   ```

2. Run tests:
   ```
   npm test
   ```

## Architecture

The application follows a modular architecture with separation of concerns:

- **UI Layer** (`index.html`, `script.js`): Handles user interaction and display
- **Business Logic** (`math.js`): Contains pure functions for arithmetic operations
- **Tests** (`__tests__/math.test.js`): Verifies the correctness of the business logic

This separation makes the code more maintainable, testable, and easier to understand.
