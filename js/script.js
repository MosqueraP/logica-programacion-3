document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    // Validar que la entrada sea un número entero
    if (!isNumeric(numberInput) || !Number.isInteger(Number(numberInput))) {
        errorElement.textContent = 'Por favor, ingrese un número entero válido.';
        resultElement.textContent = '';
    } else {
        const number = parseInt(numberInput, 10);
        resultElement.textContent = `El factorial de ${number} es ${factorial(number)}.`;
        errorElement.textContent = '';
    }
});

// Función para calcular el factorial de un número usando iteración
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Función para verificar si un valor es numérico
function isNumeric(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
}
