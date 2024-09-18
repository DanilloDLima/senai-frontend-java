// Função genérica para criar e adicionar o formulário
function criarFormulario(container, id, inputsHTML, enviarCallback) {
    // Verifica se o formulário já foi criado
    const formDiv = container.querySelector(`#${id}`);
    if (formDiv) {
        // Remove o formulário se ele já existir
        container.removeChild(formDiv);
        // Remove o resultado se existir
        const resultDiv = container.querySelector(`#result-${id}`);
        if (resultDiv) {
            container.removeChild(resultDiv);
        }
        return; // Sai da função após remover o formulário
    }

    // Cria e adiciona o formulário
    const inputContainer = document.createElement('div');
    inputContainer.id = id;
    inputContainer.innerHTML = `
        ${inputsHTML}
        <div class="buttonGuilhermeOtario">
            <button id="enviar-btn-${id}" class="enviarBtn">Enviar</button>
        </div>
    `;
    container.appendChild(inputContainer);

    const enviarBtn = inputContainer.querySelector(`#enviar-btn-${id}`);
    enviarBtn.addEventListener('click', enviarCallback);
}

// Função genérica para exibir o resultado
function exibirResultado(container, id, resultadoHTML) {
    let resultDiv = container.querySelector(`#result-${id}`);
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = `result-${id}`;
        resultDiv.className = 'result';
        container.appendChild(resultDiv);
    }
    resultDiv.innerHTML = resultadoHTML;
}

// Funções específicas de cada atividade
function calcularCustoTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function dobrarNumero(numero) {
    return numero * 2;
}

function verificarPar(numero) {
    return numero % 2 === 0 ? 'Sim' : 'Não';
}

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function calcularQuadrado(numero) {
    return numero ** 2;
}

function triplicar(numero) {
    return numero * 3;
}

function soma2(valor1, valor2) {
    return valor1 + valor2;
}

// Valores fixos para a Atividade 5
const valor1 = 10; 
const valorA = 20; 
const valorB = 30; 
const valor4 = 40; 

// Funções para cada atividade
function setupAtividade1() {
    const atividade1Btn = document.getElementById('atividade-1-btn');
    const atividade1Container = document.getElementById('atividade-1-container');

    atividade1Btn.addEventListener('click', () => {
        criarFormulario(
            atividade1Container,
            'atividade1',
            `
                <p>
                    1-Você está desenvolvendo um pequeno programa para uma loja que precisa calcular o
                    custo total de uma compra. <br><br> Para isso, você deve criar uma função em JavaScript chamada
                    calcularCustoTotal.
                    A função deve receber dois parâmetros:<br><br>
                    <strong>precoUnitario </strong>– o preço de um item.<br><br>
                    <strong>quantidade </strong>– a quantidade de itens comprados.<br><br>
                    A função deve retornar o custo total da compra, que é o resultado da multiplicação do
                    precoUnitario pela quantidade.<br><br>
                    Depois de definir a função, você deve chamar a função calcularCustoTotal com os
                    seguintes valores:<br><br>
                    <strong>•precoUnitario </strong>= R$15.50<br><br>
                    <strong>•quantidade </strong>= 4
                </p>
                <label for="precoUnitario">Preço Unitário:</label>
                <input type="number" id="precoUnitario">
                <br>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade">
            `,
            () => {
                const precoUnitario = parseFloat(document.getElementById('precoUnitario').value);
                const quantidade = parseInt(document.getElementById('quantidade').value, 10);
                const custoTotal = calcularCustoTotal(precoUnitario, quantidade);
                exibirResultado(atividade1Container, 'atividade1', `O custo total da compra é de R$ ${custoTotal.toFixed(2)}`);
            }
        );
    });
}

function setupAtividade2() {
    const atividade2Btn = document.getElementById('atividade-2-btn');
    const atividade2Container = document.getElementById('atividade-2-container');

    atividade2Btn.addEventListener('click', () => {
        criarFormulario(
            atividade2Container,
            'atividade2',
            `
                <label for="numero">Número:</label>
                <input type="number" id="numero">
            `,
            () => {
                const numero = parseFloat(document.getElementById('numero').value);
                const dobro = dobrarNumero(numero);
                exibirResultado(atividade2Container, 'atividade2', `O dobro de ${numero} é ${dobro}`);
            }
        );
    });
}

function setupAtividade3() {
    const atividade3Btn = document.getElementById('atividade-3-btn');
    const atividade3Container = document.getElementById('atividade-3-container');

    atividade3Btn.addEventListener('click', () => {
        criarFormulario(
            atividade3Container,
            'atividade3',
            `
                <label for="numeroAt3">Número:</label>
                <input type="number" id="numeroAt3">
            `,
            () => {
                const numeroAt3 = parseInt(document.getElementById('numeroAt3').value, 10);
                const ehPar = verificarPar(numeroAt3);
                exibirResultado(atividade3Container, 'atividade3', `O número ${numeroAt3} é par? ${ehPar}`);
            }
        );
    });
}

function setupAtividade4() {
    const atividade4Btn = document.getElementById('atividade-4-btn');
    const atividade4Container = document.getElementById('atividade-4-container');

    atividade4Btn.addEventListener('click', () => {
        criarFormulario(
            atividade4Container,
            'atividade4',
            `
                <label for="num1">Número 1:</label>
                <input type="number" id="num1">
                <br>
                <label for="num2">Número 2:</label>
                <input type="number" id="num2">
            `,
            () => {
                const num1 = parseFloat(document.getElementById('num1').value);
                const num2 = parseFloat(document.getElementById('num2').value);
                const soma = somar(num1, num2);
                exibirResultado(atividade4Container, 'atividade4', `A soma de ${num1} e ${num2} é ${soma}`);
            }
        );
    });
}

function setupAtividade5() {
    const atividade5Btn = document.getElementById('atividade-5-btn');
    const atividade5Container = document.getElementById('atividade-5-container');

    atividade5Btn.addEventListener('click', () => {
        criarFormulario(
            atividade5Container,
            'atividade5',
            `
                <label for="valorA">Valor A:</label>
                <input type="number" id="valorA" value="20" readonly>
                <br>
                <label for="valorB">Valor B:</label>
                <input type="number" id="valorB" value="30" readonly>
            `,
            () => {
                const valorA = parseFloat(document.getElementById('valorA').value);
                const valorB = parseFloat(document.getElementById('valorB').value);
                const resultado = soma2(valorA, valorB);
                exibirResultado(atividade5Container, 'atividade5', `A soma de ${valorA} e ${valorB} é ${resultado}`);
            }
        );
    });
}

function setupAtividade6() {
    const atividade6Btn = document.getElementById('atividade-6-btn');
    const atividade6Container = document.getElementById('atividade-6-container');

    atividade6Btn.addEventListener('click', () => {
        criarFormulario(
            atividade6Container,
            'atividade6',
            `
                <label for="valor1">Valor 1:</label>
                <input type="number" id="valor1">
                <br>
                <label for="valor2">Valor 2:</label>
                <input type="number" id="valor2">
            `,
            () => {
                const valor1 = parseFloat(document.getElementById('valor1').value);
                const valor2 = parseFloat(document.getElementById('valor2').value);
                const resultadoAt6 = subtrair(valor1, valor2);
                exibirResultado(atividade6Container, 'atividade6', `A diferença entre ${valor1} e ${valor2} é ${resultadoAt6}`);
            }
        );
    });
}

function setupAtividade7() {
    const atividade7Btn = document.getElementById('atividade-7-btn');
    const atividade7Container = document.getElementById('atividade-7-container');

    atividade7Btn.addEventListener('click', () => {
        criarFormulario(
            atividade7Container,
            'atividade7',
            `
                <label for="numeroAt7">Número:</label>
                <input type="number" id="numeroAt7">
            `,
            () => {
                const numeroAt7 = parseFloat(document.getElementById('numeroAt7').value);
                const resultadoAt7 = calcularQuadrado(numeroAt7);
                exibirResultado(atividade7Container, 'atividade7', `O quadrado de ${numeroAt7} é ${resultadoAt7}`);
            }
        );
    });
}

function setupAtividade8() {
    const atividade8Btn = document.getElementById('atividade-8-btn');
    const atividade8Container = document.getElementById('atividade-8-container');

    atividade8Btn.addEventListener('click', () => {
        criarFormulario(
            atividade8Container,
            'atividade8',
            `
                <label for="numeroAt8">Número:</label>
                <input type="number" id="numeroAt8">
            `,
            () => {
                const numeroAt8 = parseFloat(document.getElementById('numeroAt8').value);
                const resultadoAt8 = triplicar(numeroAt8);
                exibirResultado(atividade8Container, 'atividade8', `O triplo de ${numeroAt8} é ${resultadoAt8}`);
            }
        );
    });
}

// Inicializar todas as atividades
function inicializarAtividades() {
    setupAtividade1();
    setupAtividade2();
    setupAtividade3();
    setupAtividade4();
    setupAtividade5();
    setupAtividade6();
    setupAtividade7();
    setupAtividade8();
}

// Chamar a função para inicializar todas as atividades ao carregar a página
document.addEventListener('DOMContentLoaded', inicializarAtividades);
