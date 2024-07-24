
function convertNumber() {
    const number = parseFloat(document.getElementById('number_to_convert').value);
    const unitFrom = document.getElementById('unit_type_from').value;
    const unitTo = document.getElementById('unit_type_to').value;
    let result;

    if (unitFrom === unitTo) {
        result = number;
    } else if (unitFrom === 'D' && unitTo === 'S') {
        result = decimalToSexagesimal(number);
    }
    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function decimalToSexagesimal(decimal) {
    const degrees = Math.floor(decimal);
    const minutes = Math.floor((decimal - degrees) * 60);
    const seconds = (((decimal - degrees) * 60) - minutes) * 60;
    return `${degrees}° ${minutes}' ${seconds.toFixed(2)}"`;
}

