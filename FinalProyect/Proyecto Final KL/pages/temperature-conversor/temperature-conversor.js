const numberInput = document.getElementById("number_to_convert") ;
function convertTemperature() {
    const number = parseFloat(document.getElementById('number_to_convert').value);
    const fromUnit = document.getElementById('unit_type_from').value;
    const toUnit = document.getElementById('unit_type_to').value;
    let result;

    // Convertir la temperatura de la unidad de origen a Celsius
    switch (fromUnit) {
        case '°C':
            result = number;
            break;
        case '°F':
            result = (number - 32) * 5 / 9;
            break;
        case 'K':
            result = number - 273.15;
            break;
        case '°R':
            result = (number - 491.67) * 5 / 9;
            break;
        default:
            result = number;
    }

    // Convertir la temperatura de Celsius a la unidad deseada
    switch (toUnit) {
        case '°C':
            break; // ya está en Celsius
        case '°F':
            result = (result * 9 / 5) + 32;
            break;
        case 'K':
            result = result + 273.15;
            break;
        case '°R':
            result = (result + 273.15) * 9 / 5;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = `Resultado: ${result} ${toUnit}`;
}
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convertTemperature();
    }
  });
