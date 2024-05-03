// Get the display element
const display = document.querySelector('.display');

// Function to append numbers and operators to the display
function appendToDisplay(value) {
    // Check if the last character is an operator and prevent consecutive operators
    const lastChar = display.value.slice(-1);
    if (!isNaN(value) || value !== '.' || (isNaN(lastChar) && value !== '.')) {
        display.value += value;
    }
};

// Function to clear the display
function clearDisplay() {
    display.value = '';
};

// Function to perform calculation
function calculate() {
    try {
        // Evaluate the expression in the display
        const result = eval(display.value);
        
        // Check if the result is a finite number
        if (isFinite(result)) {
            // Update the display with the entered expression, current operation, and result
            display.value = `${display.value} = ${result}`;
        } else {
            // If the result is not a finite number, display an error
            display.value = 'Error';
        }
    } catch (error) {
        // If there's any error during evaluation, display an error message
        if (error instanceof SyntaxError) {
            // SyntaxError occurs for invalid expressions
            display.value = 'Invalid Expression';
        } else if (error instanceof TypeError) {
            // TypeError occurs for division by zero
            display.value = 'Division by Zero';
        } else {
            // Other types of errors
            display.value = 'Error';
        }
    }
};

