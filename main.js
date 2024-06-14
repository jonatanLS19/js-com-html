document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const message = document.getElementById('message');

    if (campoB > campoA) {
        message.textContent = "Formulário válido: número B é maior que número A.";
        message.style.color = "green";
    } else {
        message.textContent = "Formulário inválido: número B deve ser maior que número A.";
        message.style.color = "red";
    }

    message.style.display = "block";
});
