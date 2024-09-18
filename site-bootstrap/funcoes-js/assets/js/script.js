// Atividade 1
const atividade1Btn = document.getElementById('atividade-1-btn');
const atividade1Container = document.getElementById('atividade-1-container');

atividade1Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="precoUnitario">Preço Unitário:</label>
    <input type="number" id="precoUnitario" value="0">
    <br>
    <label for="quantidade">Quantidade:</label>
    <input type="number" id="quantidade" value="0">
    <br>
    <button id="enviar-btn">Enviar</button>
  `;
  atividade1Container.appendChild(inputContainer);

  const enviarBtn = inputContainer.querySelector('#enviar-btn');
  enviarBtn.addEventListener('click', () => {
    const precoUnitarioInput = document.getElementById('precoUnitario');
    const quantidadeInput = document.getElementById('quantidade');
    const precoUnitario = parseFloat(precoUnitarioInput.value);
    const quantidade = parseInt(quantidadeInput.value);

    const custoTotal = calcularCustoTotal(precoUnitario, quantidade);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `O custo total da compra é de R$ ${custoTotal.toFixed(2)}`;
    atividade1Container.appendChild(resultDiv);
  });
});

function calcularCustoTotal(precoUnitario, quantidade) {
  return precoUnitario * quantidade;
}

// Atividade 2
const atividade2Btn = document.getElementById('atividade-2-btn');
const atividade2Container = document.getElementById('atividade-2-container');

atividade2Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="numero">Número:</label>
    <input type="number" id="numero" value="7">
    <br>
    <button id="enviar-btn-2">Enviar</button>
  `;
  atividade2Container.appendChild(inputContainer);

  const enviarBtn2 = inputContainer.querySelector('#enviar-btn-2');
  enviarBtn2.addEventListener('click', () => {
    const numeroInput = document.getElementById('numero');
    const numero = parseFloat(numeroInput.value);

    const dobro = dobrarNumero(numero);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `O dobro de ${numero} é ${dobro}`;
    atividade2Container.appendChild(resultDiv);
  });
});

function dobrarNumero(numero) {
  return numero * 2;
}

// Atividade 3
const atividade3Btn = document.getElementById('atividade-3-btn');
const atividade3Container = document.getElementById('atividade-3-container');

atividade3Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="numeroAt3">Número:</label>
    <input type="number" id="numeroAt3" value="8">
    <br>
    <button id="enviar-btn-3">Enviar</button>
  `;
  atividade3Container.appendChild(inputContainer);

  const enviarBtn3 = inputContainer.querySelector('#enviar-btn-3');
  enviarBtn3.addEventListener('click', () => {
    const numeroAt3Input = document.getElementById('numeroAt3');
    const numeroAt3 = parseInt(numeroAt3Input.value);

    const ehPar = verificarPar(numeroAt3);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `O número ${numeroAt3} é par? ${ehPar}`;
    atividade3Container.appendChild(resultDiv);
  });
});

function verificarPar(numeroAt3) {
  return numeroAt3 % 2 === 0;
}

// Atividade 4
const atividade4Btn = document.getElementById('atividade-4-btn');
const atividade4Container = document.getElementById('atividade-4-container');

atividade4Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="num1">Número 1:</label>
    <input type="number" id="num1" value="5">
    <br>
    <label for="num2">Número 2:</label>
    <input type="number" id="num2" value="3">
    <br>
    <button id="enviar-btn-4">Enviar</button>
  `;
  atividade4Container.appendChild(inputContainer);

  const enviarBtn4 = inputContainer.querySelector('#enviar-btn-4');
  enviarBtn4.addEventListener('click', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    const soma = somar(num1, num2);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `A soma de ${num1} e ${num2} é ${soma}`;
    atividade4Container.appendChild(resultDiv);
  });
});

function somar(num1, num2) {
  return num1 + num2;
}

// Atividade 5
const atividade5Btn = document.getElementById('atividade-5-btn');
const atividade5Container = document.getElementById('atividade-5-container');

atividade5Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="valorA">Valor A:</label>
    <input type="number" id="valorA" value="0">
    <br>
    <label for="valorB">Valor B:</label>
    <input type="number" id="valorB" value="0">
    <br>
    <button id="enviar-btn-5">Enviar</button>
  `;
  atividade5Container.appendChild(inputContainer);

  const enviarBtn5 = inputContainer.querySelector('#enviar-btn-5');
  enviarBtn5.addEventListener('click', () => {
    const valorAInput = document.getElementById('valorA');
    const valorBInput = document.getElementById('valorB');
    const valorA = parseFloat(valorAInput.value);
    const valorB = parseFloat(valorBInput.value);

    const resultado = soma2(valorA, valorB);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `A soma de ${valorA} e ${valorB} é ${resultado}`;
    atividade5Container.appendChild(resultDiv);
  });
});

function soma2(valorA, valorB) {
  return valorA + valorB;
}

// Atividade 6
const atividade6Btn = document.getElementById('atividade-6-btn');
const atividade6Container = document.getElementById('atividade-6-container');

atividade6Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="valor1">Valor 1:</label>
    <input type="number" id="valor1" value="0">
    <br>
    <label for="valor2">Valor 2:</label>
    <input type="number" id="valor2" value="0">
    <br>
    <button id="enviar-btn-6">Enviar</button>
  `;
  atividade6Container.appendChild(inputContainer);

  const enviarBtn6 = inputContainer.querySelector('#enviar-btn-6');
  enviarBtn6.addEventListener('click', () => {
    const valor1Input = document.getElementById('valor1');
    const valor2Input = document.getElementById('valor2');
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);

    const resultadoAt6 = subtrair(valor1, valor2);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `A diferença entre ${valor1} e ${valor2} é ${resultadoAt6}`;
    atividade6Container.appendChild(resultDiv);
  });
});

function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

// Atividade 7
const atividade7Btn = document.getElementById('atividade-7-btn');
const atividade7Container = document.getElementById('atividade-7-container');

atividade7Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="numeroAt7">Número:</label>
    <input type="number" id="numeroAt7" value="6">
    <br>
    <button id="enviar-btn-7">Enviar</button>
  `;
  atividade7Container.appendChild(inputContainer);

  const enviarBtn7 = inputContainer.querySelector('#enviar-btn-7');
  enviarBtn7.addEventListener('click', () => {
    const numeroAt7Input = document.getElementById('numeroAt7');
    const numeroAt7 = parseFloat(numeroAt7Input.value);

    const resultadoAt7 = calcularQuadrado(numeroAt7);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `O quadrado de ${numeroAt7} é ${resultadoAt7}`;
    atividade7Container.appendChild(resultDiv);
  });
});

function calcularQuadrado(numero) {
  return numero ** 2;
}

// Atividade 8
const atividade8Btn = document.getElementById('atividade-8-btn');
const atividade8Container = document.getElementById('atividade-8-container');

atividade8Btn.addEventListener('click', () => {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `
    <label for="numeroAt8">Número:</label>
    <input type="number" id="numeroAt8" value="4">
    <br>
    <button id="enviar-btn-8">Enviar</button>
  `;
  atividade8Container.appendChild(inputContainer);

  const enviarBtn8 = inputContainer.querySelector('#enviar-btn-8');
  enviarBtn8.addEventListener('click', () => {
    const numeroAt8Input = document.getElementById('numeroAt8');
    const numeroAt8 = parseFloat(numeroAt8Input.value);

    const resultadoAt8 = triplicar(numeroAt8);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `O triplo de ${numeroAt8} é ${resultadoAt8}`;
    atividade8Container.appendChild(resultDiv);
  });
});

function triplicar(numero) {
  return numero * 3;
}
