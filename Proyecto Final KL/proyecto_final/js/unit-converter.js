function convert() {
    const number = parseFloat(document.getElementById('number_to_convert').value);
    const fromUnit = document.getElementById('unit_type_from').value;
    const toUnit = document.getElementById('unit_type_to').value;
    let result;

    switch (fromUnit) {
        case 'km':
            result = number * 1000;
            break;
        case 'm':
            result = number;
            break;
        case 'cm':
            result = number / 100;
            break;
        case 'mm':
            result = number / 1000;
            break;
        default:
            result = number;
    }

    switch (toUnit) {
        case 'km':
            result = result / 1000;
            break;
        case 'm':
            break;
        case 'cm':
            result = result * 100;
            break;
        case 'mm':
            result = result * 1000;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = `Resultado: ${result} ${toUnit}`;
}
