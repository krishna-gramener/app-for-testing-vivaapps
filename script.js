// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for form submission
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the input values
        const firstNumber = parseFloat(document.getElementById('firstNumber').value);
        const secondNumber = parseFloat(document.getElementById('secondNumber').value);
        
        // Calculate the sum
        const sum = firstNumber + secondNumber;
        
        // Display the result
        document.getElementById('result').textContent = sum;
        document.getElementById('resultContainer').style.display = 'block';
    });
});
