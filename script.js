document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tempConverterForm');
    const resultContainer = document.getElementById('resultContainer');
    const explanationContainer = document.getElementById('explanation');
    const conversionResult = document.getElementById('conversionResult');
    const explanationText = document.getElementById('explanationText');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const temperature = parseFloat(document.getElementById('temperature').value);
        const unit = document.getElementById('unit').value;

        // Perform temperature conversion
        let result;
        let explanation;

        if (unit === 'celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            result = `${temperature} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
            explanation = `${temperature} Celsius * 9/5 + 32 = ${fahrenheit.toFixed(2)} Fahrenheit`;
        } else if (unit === 'fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            result = `${temperature} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
            explanation = `(${temperature} Fahrenheit - 32) * 5/9 = ${celsius.toFixed(2)} Celsius`;
        }

        // Display result and explanation
        conversionResult.textContent = result;
        explanationText.textContent = explanation;
        resultContainer.style.display = 'block'; // Show result container
        explanationContainer.style.display = 'block'; // Show explanation container
    });
});
