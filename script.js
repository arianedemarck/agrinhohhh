function calcularSafra() {
    const espigas = parseFloat(document.getElementById('espigas').value);
    const graos = parseFloat(document.getElementById('graos').value);
    const espacamento = parseFloat(document.getElementById('espacamento').value);

    // Validação para impedir que execute com campos em branco
    if (isNaN(espigas) || isNaN(graos) || isNaN(espacamento) || espacamento <= 0) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    // Execução dos cálculos da estimativa
    const metrosLinearesPorHectare = 10000 / espacamento;
    const totalEspigasHectare = (espigas / 10) * metrosLinearesPorHectare;
    const totalGraos = totalEspigasHectare * graos;
    const pesoTotalKg = (totalGraos / 1000) * 0.35; 
    const sacasPorHectare = pesoTotalKg / 60;

    const box = document.getElementById('resultado');
    const texto = document.getElementById('texto-resultado');

    // Imprime o valor formatado na tela
    texto.innerHTML = `Sua lavoura está estimada em aproximadamente <strong>${sacasPorHectare.toFixed(1)}</strong> sacas (60kg) por hectare.`;
    
    // Altera o estilo removendo o 'display: none'
    box.classList.remove('hidden');
}