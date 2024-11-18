function calcularAngulo(event) {
    event.preventDefault();

    // Obter o valor do ângulo
    const anguloInput = document.getElementById("basic-url").value;
    const tipoAngulo = document.querySelector('input[name="angulo"]:checked').value;

    // Validação do input
    const angulo = parseFloat(anguloInput);
    if (isNaN(angulo)) {
        alert("Por favor, insira um valor numérico válido para o ângulo.");
        return;
    }

    // Converter graus para radianos, se necessário
    const anguloEmRadianos = tipoAngulo === "graus" ? (angulo * Math.PI) / 180 : angulo;

    // Calcular as razões trigonométricas
    const seno = Math.sin(anguloEmRadianos).toFixed(4);
    const cosseno = Math.cos(anguloEmRadianos).toFixed(4);
    const tangente = Math.tan(anguloEmRadianos).toFixed(4);

    // Exibir os resultados
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h5>Resultados:</h5>
        <p>Seno: ${seno}</p>
        <p>Cosseno: ${cosseno}</p>
        <p>Tangente: ${tangente}</p>
    `;
}