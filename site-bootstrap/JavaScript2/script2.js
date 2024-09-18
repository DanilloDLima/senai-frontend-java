//---Atividade 1---
let idade = Number(prompt("--- Atividade 1 --- Digite a sua idade: "))

idade >= 18
    ? alert("Você é maior de idade.") : alert("Você é menor de idade.")

//---Atividade 2---
let notaFinal = Number(prompt("--- Atividade 2 --- Digite a nota final do aluno: "))

notaFinal >= 7
    ? alert("Aprovado")
    : notaFinal >= 5 && notaFinal <= 6.9
    ? alert("Recuperação")
    : alert("Reprovado")

//---Atividade 3---
let numeroChecado = Number(prompt("--- Atividade 3--- Digite um número para saber se e positivo, negativo ou zero: "))

numeroChecado > 0
    ? alert("Número positivo.")
    : numeroChecado < 0
    ? alert("Número negativo.")
    : alert("O número e zero")

//---Atividade 4---
let emprestimo = Number(prompt("--- Atividade 4--- Digite o valor do emprestimo para saber seu status: "))

emprestimo > 10000
    ? alert("O valor do empréstimo é alto e requer uma análise detalhada.")
    : alert("O valor do empréstimo é considerado baixo epode ser processado rapidamente");

//---Atividade 5---
let temperatura = Number(prompt("--- Atividade 5--- Digite a temperatura: "))

temperatura >= 30
    ? alert("Está muito quente. Mantenha-se hidratado!.")
    : temperatura > 15 && temperatura <= 29
    ? alert("A temperatura está agradável.")
    : alert("Está frio. Vista-se adequadamente");

//---Atividade 6---
let classificarNotaFinal = Number(prompt("--- Atividade 6--- Digite a nota final do aluno: "))

classificarNotaFinal >= 9
    ? alert("Excelente.")
    : classificarNotaFinal >= 7 && classificarNotaFinal < 9
    ? alert("Bom.")
    : classificarNotaFinal >= 5 && classificarNotaFinal < 7
    ? alert("Satisfatório.")
    : alert("Insuficiente.")

//---Atividade 7---
let categoria = Number(prompt("--- Atividade 7--- Digite a idade para saber a categoria: "))

categoria >= 18
    ? alert("Filme para maiores de 18 anos.")
    : categoria > 13 && categoria <= 17
    ? alert("Filme para maiores de 13 anos.")
    : categoria >7 && classificarNotaFinal <= 12
    ? alert("Filme para maiores de 7 anos.")
    : alert("Filme para todas as idades.")

//---Atividade 8---
let valorCompras = Number(prompt("--- Atividade 8--- Digite um número com até duas casa decimais: "))

valorCompras >= 500.00
    ? alert("Você ganhou um desconto de 20%.")
    : valorCompras > 200.00 && valorCompras <= 499.99
    ? alert("Você ganhou um desconto de 10%.")
    : valorCompras > 100.00 && valorCompras <= 199.99
    ? alert("Filme para maiores de 7 anos.")
    : alert("Sem desconto disponível.")