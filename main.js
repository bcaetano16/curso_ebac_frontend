
function maior() {
    var numeroA = parseFloat(document.getElementById('numA').value);
    var numeroB = parseFloat(document.getElementById('numB').value);

    if (numeroB > numeroA) {
        alert(numeroB + " é maior que" + numeroA, "teste válido");
    }
    else
    alert("Teste inválido");
    }