// ATIVIDADE 1
const nomeDoProjeto = "Projeto sem nome";
let inicioProjeto = "10/10/2010";
let statusProjeto = "Iniciado";

const projetoDiv = document.getElementById('projeto');
projetoDiv.innerHTML = `
    <strong>Nome do projeto:</strong> ${nomeDoProjeto}<br>
    <strong>Data inicial:</strong> ${inicioProjeto}<br>
    <strong>Status do Projeto:</strong> ${statusProjeto}
`;

// ATIVIDADE 2
const nomeDoEvento = "Evento sem nome";
let dataEvento = "10/12/2012";
let numeroParticipantes = 10;

const eventoDiv = document.getElementById('evento');
eventoDiv.innerHTML = `
    <strong>Nome do evento:</strong> ${nomeDoEvento}<br>
    <strong>Data do evento:</strong> ${dataEvento}<br>
    <strong>Número de participantes:</strong> ${numeroParticipantes}
`;

// ATIVIDADE 3
const nomeDoProduto = "Produto indefinido";
let precoProduto = 3.99;
let qtdEstoque = 10;

const produtoDiv = document.getElementById('produto');
produtoDiv.innerHTML = `
    <strong>Nome do produto:</strong> ${nomeDoProduto}<br>
    <strong>Preço do produto:</strong> ${precoProduto.toFixed(2)}<br>
    <strong>Quantidade em estoque:</strong> ${qtdEstoque}
`;
