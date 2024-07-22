function convertNumber() {
    const number = parseFloat(document.getElementById('number_to_convert').value);
    const unitFrom = document.getElementById('unit_type_from').value;
    const unitTo = document.getElementById('unit_type_to').value;
    let result;

    if (unitFrom === unitTo) {
        result = number;
    } else if (unitFrom === 'D' && unitTo === 'S') {
        result = decimalToSexagesimal(number);
    } else if (unitFrom === 'S' && unitTo === 'D') {
        result = sexagesimalToDecimal(number);
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function decimalToSexagesimal(decimal) {
    const degrees = Math.floor(decimal);
    const minutes = Math.floor((decimal - degrees) * 60);
    const seconds = (((decimal - degrees) * 60) - minutes) * 60;
    return `${degrees}° ${minutes}' ${seconds.toFixed(2)}"`;
}

function sexagesimalToDecimal(sexagesimal) {
    const parts = sexagesimal.split(/[°'"]/);
    const degrees = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]) / 60;
    const seconds = parseFloat(parts[2]) / 3600;
    return degrees + minutes + seconds;
}

