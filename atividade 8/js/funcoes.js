function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("soma",primeiroNumero, segundoNumero, resultado)
}
function subtrair() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("subtrair",primeiroNumero, segundoNumero, resultado)
}
function dividir() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("dividir",primeiroNumero, segundoNumero, resultado)
}
function multiplicar() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("multiplicar",primeiroNumero, segundoNumero, resultado)
}
function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    let novoCalculo = {
        funcao: nomeDaFuncao,
        primeiroNumero: num1,
        segundoNumero: num2,
        resultado: resultado,
        data: new Date().toLocaleString('pt-BR')
    };

    let historico = JSON.parse(localStorage.getItem('historicoCalculadora')) || [];
    
    historico.unshift(novoCalculo);

    localStorage.setItem('historicoCalculadora', JSON.stringify(historico));

    console.log('Função: ' + nomeDaFuncao);
    console.log('Primeiro numero: ' + num1 + ', SegundoNumero: ' + num2);
    console.log('Resultado: ' + resultado);
    console.log('--------------------------------------');
}