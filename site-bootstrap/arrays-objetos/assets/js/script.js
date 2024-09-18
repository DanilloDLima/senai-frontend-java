//shift remove o primeiro, unshift adiciona em ultimo, push add inicio,
//pop remove ultimo

//Atividade 1
console.log("----Atividade 1----")
const frutas = ["Maça", "Banana", "Laranja"]

console.log(`Adicionado Início: ${frutas.push("Uva").shift}\nLenght: ${frutas.length}\nArray: ${frutas}`)

//Atividade 2
console.log("----Atividade 2----")
const cores = ["Vermelho", "Verde", "Azul", "Amarelo", "Roxo"]

console.log(`Último Removido: ${cores.pop()}\nArray: ${cores}`)

//Atividade 3
console.log("----Atividade 3----")
const animais = ["Cachorro", "Gato", "Pássaro"]

console.log(`Removido: ${animais.shift()}\nAdicionado em último: ${animais.unshift("Leão")}\nArray: ${animais}`)

//Atividade 4
console.log("----Atividade 4----")
const numeros = [10, 20, 30, 40]

console.log(`Adicionado Início: ${numeros.push(50)}\nArray: ${numeros}\nÚltimo Removido${numeros.pop()}\nArray:${numeros}`)

//Atividade 5
console.log("----Atividade 5----")
const alunos = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"]

console.log(`Adicionado Início: ${alunos.push("Fernanda", "Gabriel")}\nRemove Primeiro: ${alunos.shift()}\nArray${alunos}`)

//Atividade 6
console.log("----Atividade 6----")
const carrinho = ["Maçã", "Banana", "Laranja"]

carrinho.length < 3 
    ? console.log(`${carrinho.unshift("Uva")} \nAdicionado ao carrinho`)
    : console.log(`${carrinho.pop()} \nRemovido do carrinho`)

console.log(`${carrinho}`)

//Atividade 7
console.log("----Atividade 7----")
const filaDeEspera = ["João", "Maria", "Carlos"]

filaDeEspera.length < 5 
    ? console.log(`${filaDeEspera.unshift("Ana")} \nAna adcionada a fila`)
    : console.log(`${filaDeEspera.pop()} \nRemovido com sucesso da fila`)

console.log(`${filaDeEspera}`)

//Atividade 8
console.log("----Atividade 8----")
const estoque = ["Arroz", "Feijão", "Macarrão"]

estoque.length < 4 
    ? console.log(`${estoque.push("Óleo")} \nÓleo adcionado ao início`)
    : console.log(`${estoque.shift()} \nPrimeiro item removido com sucesso`)

console.log(`${estoque}`)

//Atividade 9
console.log("----Atividade 9----")
const tarefas = ["Estudar", "Ler", "Exercitar"]

tarefas.length <= 2 
    ? console.log(`${tarefas.push("Comprar mantimentos")} \nComprar mantimentos adcionado ao início`)
    : console.log(`${tarefas.shift()} \nPrimeira tarefa removida com sucesso`)

console.log(`${tarefas}`)

//Atividade 10
console.log("----Atividade 10----")
const frutas1 = ["Maçã", "Banana", "Laranja"]
const frutas2 = ["Uva", "Manga"]

const todasFrutas = frutas1.concat(frutas2)
console.log(...todasFrutas)
console.log(`${todasFrutas}`)
console.log(todasFrutas)

//Atividades Objetos 0
console.log("----Atividade Objetos 0----")
const aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia"
}

console.log(`Nome: ${aluno.nome}\nCurso: ${aluno.curso}`)


//Atividade Objetos 1
console.log("----Atividade Objetos 1----")
const contatosCliente = {
    nome: "Diego",
    telefone: 6198765874,
    email: "email@email.com"
}

/* console.log(contatosCliente)
//imprimir apenas os valores
Object.values(contatosCliente).forEach(value => console.log(value))
//imprimir as chaves e valores
Object.entries(contatosCliente).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) */
console.log(`Nome: ${contatosCliente.nome}\nEmail: ${contatosCliente.email}`)

contatosCliente.nome.length >= 5
    ? console.log(`Nome: ${contatosCliente.nome} tem mais ou 5 caracteres`)
    : console.log(`Nome: ${contatosCliente.nome} tem menos de 5 caracteres`)

//Atividade Objetos 2
console.log("----Atividade Objetos 2----")
const perfilUsuario = {
    nome: "Danillo",
    idade: 25,
    cidade: "Brasilia",
    email: "danillodiasdlima@gmail.com"
}

perfilUsuario.nome = "Lucas"
perfilUsuario.idade = 122
perfilUsuario.cidade = "Novo Gama"
perfilUsuario.email = "lucas.novogama@ng.com.br"

console.log(perfilUsuario)
perfilUsuario.telefone = 6199441928
console.log(perfilUsuario)

//Atividades Objetos 3
console.log("----Atividade Objetos 3----")
const lanchonete = {
    cliente: "Mario",
    item: "100 - Bisnaguinha",
    quantidade: 1,
    preco: 12
}

const atualizarStatus = () => { lanchonete.status = "concluido"}

lanchonete.status = "em andamento"
console.log(lanchonete)
atualizarStatus()
console.log(lanchonete)

//Atividade 001
console.log("----Atividade 001----")
const tarefas001 = ["estudar", "compra supermecado", "limpar casa", "estudar"]

console.log(`${tarefas001.indexOf("estudar")} ${tarefas001.indexOf("compra supermecado")}`)

//Atividade 002
console.log("----Atividade 002----")
const numeros002 = [10, 20, 30, 40, 50, 20, 60]

const encontrarIndice = (num) => {return numeros002.indexOf(num)}
console.log(encontrarIndice(20))

//Atividade 003
console.log("----Atividade 003----")
const frutas003 = ["maçã", "banana", "laranja", "maçã", "uva", "maçã"]

const encontrarUltimaOcorrencia = (indice) => {return frutas003.lastIndexOf(indice)}
console.log(encontrarUltimaOcorrencia("maçã"))

//Atividade 004
console.log("----Atividade 004----")
const frutas004 = ["maçã", "banana", "laranja", "manga", "uva", "melancia"]
const subFrutas004 = frutas004.slice(1,4)

console.log(subFrutas004)

//Atividade 005
console.log("----Atividade 005----")
const dados = [5, 10, 15, 20, 25, 30, 35, 40]

const extrairSubarray = (inicio, fim) => {return dados.slice(inicio, fim)}
console.log(extrairSubarray(2, 5))

//Atividade 006
console.log("----Atividade 006----")
const produtos = [    
    { nome: "Camiseta", preco: 29.90, estoque: 50 },    
    { nome: "Calça Jeans", preco: 89.90, estoque: 30 },    
    { nome: "Tênis", preco: 149.90, estoque: 20 },    
    { nome: "Jaqueta", preco: 199.90, estoque: 10 },    
    { nome: "Boné", preco: 19.90, estoque: 100 }    
]

produtos.forEach(produto => {
    console.log(`Nome: ${produto.nome}\nPreço: R$${produto.preco.toFixed(2)}\nEstoque: ${produto.estoque}`)
})

//Atividade 007
console.log("----Atividade 007----")
const funcionarios = [
    {nome: "Ana Souza", cargo: "Analista de Sistemas", salario: 5500},
    {nome: "Carlos Silva", cargo: "Desenvolvedor", salario: 7000},
    {nome: "Mariana Lima", cargo: "Gerente de Projetos", salario: 9000},
    {nome: "João Oliveira", cargo: "Designer", salario: 4500},
    {nome: "Luana Pereira", cargo: "Cordenadora de Marketing", salario: 6000},
]

funcionarios.forEach(funcionario => {
    console.log(`Nome: ${funcionario.nome}\nCargo: ${funcionario.cargo}\nSalário: ${funcionario.salario}`)
})

//Atividade 008
console.log("----Atividade 008----")
const cursos = [
    {nome: "Introdução ao JavaScript", duracao: 40, alunosMatriculados: 120},
    {nome: "Desenvolvimento Web Completo", duracao: 100, alunosMatriculados: 80},
    {nome: "Fundamentos de Python", duracao: 30, alunosMatriculados: 95},
    {nome: "Design de Interfaces", duracao: 50, alunosMatriculados: 60},
    {nome: "Análise de Dados", duracao: 70, alunosMatriculados: 110},
]

cursos.forEach(curso =>{
    console.log(`Nome: ${curso.nome}\nDuração: ${curso.duracao}\nAlunos Matriculados: ${curso.alunosMatriculados}`)
})

//Atividade 009
console.log("----Atividade 009----")
const listaDeItens = [1, 2, 3, 4, 5]
console.log(listaDeItens.reverse())

//Atividade 010
console.log("----Atividade 010----")
const itens = [10, 20, 30, 40, 50]
let deveReverter = true

deveReverter === true
    ? console.log(itens.reverse())
    : console.log(itens)



