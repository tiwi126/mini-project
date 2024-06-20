document.getElementById('tempConverterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result = document.getElementById('conversionResult');
    let explanation = document.getElementById('explanationText');

    if (unit === 'celsius') {
        let fahrenheit = (temperature * 9 / 5) + 32;
        result.textContent = `${temperature} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
        explanation.textContent = `To convert Celsius to Fahrenheit, multiply by 9/5 and add 32.`;
    } else if (unit === 'fahrenheit') {
        let celsius = (temperature - 32) * 5 / 9;
        result.textContent = `${temperature} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
        explanation.textContent = `To convert Fahrenheit to Celsius, subtract 32 and then multiply by 5/9.`;
    }
});
