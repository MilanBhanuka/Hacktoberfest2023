let currentInput = '';
let operator = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    currentInput += ` ${op} `;
    updateDisplay();
}

function appendOperator(op) {
    if (op === 'sqrt') {
        currentInput = Math.sqrt(currentInput);
    } else if (op === '^') {
        currentInput += '^';
    } else if (op === '!') {
        currentInput = factorial(parseInt(currentInput));
    }

    updateDisplay();
}

function calculateResult() {
    currentInput = eval(currentInput);
    updateDisplay();
}

function clearInput() {
    currentInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// ... (previous JavaScript code) ...

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) && key !== ' ') {
        appendNumber(Number(key));
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperator(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearInput();
    }
});

