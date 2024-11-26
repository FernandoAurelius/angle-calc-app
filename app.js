function calcularAngulo(event) {
    event.preventDefault();

    // Obter o valor do ângulo
    const anguloInput = document.getElementById("basic-url").value;
    const tipoAngulo = document.querySelector('input[name="angulo"]:checked').id;

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
    const cosseno = Math.cos(anguloEmRadianos);

    // Verificar se o cosseno é zero para determinar se a tangente é indefinida
    let tangente;
    if (Math.abs(cosseno) < 1e-10) { // Tolerância para evitar erros de arredondamento
        tangente = 'Indefinido'; // Exibe "Indefinido" caso o cosseno seja zero
    } else {
        tangente = Math.tan(anguloEmRadianos).toFixed(4);
    }

    const sec = secante(anguloEmRadianos);
    const csc = cossecante(anguloEmRadianos);
    const cot = cotangente(anguloEmRadianos);

    // Exibir os resultados
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h5>Resultados:</h5>
        <p>Seno: ${seno}</p>
        <p>Cosseno: ${cosseno.toFixed(4)}</p>
        <p>Tangente: ${tangente}</p>
        <p>Secante: ${sec}</p>
        <p>Cossecante: ${csc}</p>
        <p>Cotangente: ${cot}</p>
    `;
}

function secante(x) {
    const cosX = Math.cos(x);
    if (Math.abs(cosX) < 1e-10) return "Indefinido";
    return (1 / cosX).toFixed(4);
}

function cossecante(x) {
    const sinX = Math.sin(x);
    if (Math.abs(sinX) < 1e-10) return "Indefinido";
    return (1 / sinX).toFixed(4);
}

function cotangente(x) {
    const tanX = Math.tan(x);
    if (Math.abs(tanX) < 1e-10) return "Indefinido";
    return (1 / tanX).toFixed(4);
    // Ou:
    // const sinX = Math.sin(x);
    // const cosX = Math.cos(x);
    // if (Math.abs(sinX) < 1e-10) return "Indefinido";
    // return (cosX / sinX).toFixed(4);
}
