// Import the math module (for browser compatibility, we'll use a different approach)
// In a real application with bundling, we would use: import { sum } from './math.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for form submission
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        try {
            // Get the input values
            const firstNumber = parseFloat(document.getElementById('firstNumber').value);
            const secondNumber = parseFloat(document.getElementById('secondNumber').value);
            
            // Check if inputs are valid numbers
            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                throw new Error('Please enter valid numbers');
            }
            
            // Use the math module to calculate the sum
            // For browser compatibility without bundling, we'll use the global math object
            // that will be attached to the window in index.html
            const result = mathModule.sum(firstNumber, secondNumber);
            
            // Display the result
            document.getElementById('result').textContent = result;
            document.getElementById('resultContainer').style.display = 'block';
            document.getElementById('resultContainer').className = 'success';
        } catch (error) {
            // Display error message
            document.getElementById('result').textContent = error.message;
            document.getElementById('resultContainer').style.display = 'block';
            document.getElementById('resultContainer').className = 'error';
        }
    });
});
