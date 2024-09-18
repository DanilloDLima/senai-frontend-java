console.log("Hello World!!!")

pessoa = {
    nome: "Danillo",
    idade: 25,
}

console.log(`
${typeof 25},
${typeof "Babaca"},
${typeof true},
${typeof undefined},
${typeof pessoa}
`)

// Atividade 1

// 1- Utilizar o operador typeof diretamente no console.log para
// identificar os tipos de dados: number, string e boolean dos
// exemplos.

console.log("O tipo de 42 é:", typeof 42)
console.log("O tipo de 'Olá, mundo!' é:", typeof 'Olá, mundo!')
console.log("O tipo de true é:", typeof true)
console.log("O tipo de (5 > 3) é:", typeof (5>3))
console.log("O tipo de (10 == '10') é:", typeof (10 == '10'))
console.log("O tipo de (5 + 2) é:", typeof (5+2))
console.log("O tipo de ('a' + 'b') é:", typeof ('a' + 'b'))

//Atividade 2
// 02- Resolva essas atividades que utilizam diretamente
// os operadores aritméticos no console.log.
console.log("10 + 5 =", 10 + 5)
console.log("20 - 8 =", 20 - 8)
console.log("7 * 3 =", 7 * 3)
console.log("16 / 4 =", 16 / 4)
console.log("10 + 5 * 3 =",10 + 5 * 3)
console.log("(10 + 5) * 3 =",(10 + 5) * 3)

// 03- A interpolação de strings no JavaScript é uma ótima maneira de
// combinar texto e variáveis de forma mais prática, utilizando
// interpolação(criados com crases ` `).

console.log(`A soma de 10 e 5 é: ${10 + 5}`)
console.log(`Olá, meu nome é ${'Maria'} e tenho ${22} anos.`)
console.log(`A multiplicação de 4 por 2 é: ${4 * 2}`)
console.log(`O resultado de (10 + 5) * 2 é: ${(10 + 5) * 2}`)
console.log(`Em 2024, alguém nascido em 1995 teria ${2024 - 1995} anos.`)
console.log(`O resultado de 8 multiplicado por 5 é: ${8 * 5}.`)

// 4-Avalie o resultado das seguintes expressões:
console.log(10 > 5)
console.log(3 < 2)
console.log(7 >= 7)
console.log(4 === '4')
console.log(50 === 100)
console.log(8 <= 12)
console.log(15 < 20)
console.log(30 >= 30)

// Comparação de Strings:
console.log('banana' === 'banana')
console.log('apple' !== 'orange')
console.log('hello' > 'Hello')

// Comparação de Tipos Diferentes:
console.log(10 === '10')
console.log(0 == false)
console.log(10 == '10')

console.log(5 > 2 && 'apple' === 'apple');
console.log(10 === 10 || 'banana' !== 'orange');
console.log('100' == 100 && 20 > 10);

// 5-Um usuário insere sua idade como número e outro como string.
// Verifique se a idade digitada pelos dois é idêntica.

console.log(25 === '25')
console.log(18 === 18)

// Comparação de Entrada de Dados em Formulários
console.log('123456789' === 123456789)
console.log('0987654321' !== 987654321)

// Comparação de Tipos Booleanos e Números
console.log(true === 1)
console.log(false === 0)

// Suponha que o usuário tenha que inserir um valor de confirmação para uma transação.
// O sistema deve verificar se o valor digitado é exatamente idêntico ao esperado.
console.log(100 === '100')
console.log(100 !== '100')
console.log('true' !== true)

const pessoas = {
    nome: 'João',
    idade: 30
  }
  
  pessoas.idade = 31
  pessoas.cidade = 'São Paulo'
  
  console.log(pessoas)

  const numeros = [1, 2, 3]

numeros.push(4)
numeros[0] = 10

console.log(numeros)


 
  