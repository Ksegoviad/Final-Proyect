function convert() {
    const number = parseFloat(document.getElementById('number_to_convert').value);
    const fromUnit = document.getElementById('unit_type_from').value;
    const toUnit = document.getElementById('unit_type_to').value;
    let result;


    // Conversión a gramos (unidad base)
    switch (fromUnit) {
        case 'Ton':
            result = number * 1e6; // 1 tonelada = 1,000,000 gramos
            break;
        case 'Kg':
            result = number * 1000; // 1 kilogramo = 1,000 gramos
            break;
        case 'Lb':
            result = number * 453.592; // 1 libra = 453.592 gramos
            break;
        case 'g':
            result = number; // ya está en gramos
            break;
        case 'Onz':
            result = number * 28.3495; // 1 onza = 28.3495 gramos
            break;
        default:
            result = number;
    }

    // Conversión de gramos a la unidad deseada
    switch (toUnit) {
        case 'Ton':
            result = result / 1e6; // 1 tonelada = 1,000,000 gramos
            break;
        case 'Kg':
            result = result / 1000; // 1 kilogramo = 1,000 gramos
            break;
        case 'Lb':
            result = result / 453.592; // 1 libra = 453.592 gramos
            break;
        case 'g':
            break; // ya está en gramos
        case 'Onz':
            result = result / 28.3495; // 1 onza = 28.3495 gramos
            break;
        default:
            break;
    }
    


    document.getElementById('result').innerText = `Resultado: ${result} ${toUnit}`;
}

