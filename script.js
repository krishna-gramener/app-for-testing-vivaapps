/**
 * Simple function to calculate the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Sum of the two numbers
 */
function sum(a, b) {
    return a + b;
}

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
            
            // Calculate the sum directly
            const result = sum(firstNumber, secondNumber);
            
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
