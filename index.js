function calculate(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Enter valid numbers";
    }
    
    if (operator === '+') {
        return num1 + num2;
    } 
    if (operator === '-') {
        return num1 - num2;
    } 
    if (operator === '*') {
        return num1 * num2;
    } 
    if (operator === '/') {
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    }

    return 'Invalid operator';
}

function add(a, b) {
    return a + b;
}

function deleted(arr, index) {
    if (!Array.isArray(arr)) {
        return "First argument must be an array";
    }
    if (index < 0 || index >= arr.length) {
        return "Invalid index";
    }
    arr.splice(index, 1);
    return arr;
}
