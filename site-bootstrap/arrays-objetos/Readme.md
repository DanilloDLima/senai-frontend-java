# Exercícios de Manipulação de Arrays em JavaScript

## ATIVIDADE 1

1. Crie uma array chamada `const frutas = ["Maçã", "Banana", "Laranja"]`.
2. Adicione a fruta "Uva" ao final da array.
3. Remova o primeiro elemento da array.
4. Exiba a quantidade total de frutas na array.
5. Exiba a lista completa de frutas no console.

## ATIVIDADE 2

1. Dada a array `const cores = ["Vermelho", "Verde", "Azul", "Amarelo", "Roxo"]`:
   - Remova a última cor da array utilizando o método `pop()`.
   - Exiba a cor que foi removida no console.
   - Exiba a array atualizada no console, sem a última cor.

## ATIVIDADE 3

1. Dada a array `const animais = ["Cachorro", "Gato", "Pássaro"]`:
   - Utilize o método `shift()` para remover o primeiro elemento da array.
   - Exiba o animal que foi removido no console.
   - Utilize o método `unshift()` para adicionar o animal "Leão" no início da array.
   - Exiba a array atualizada no console.

## ATIVIDADE 4

1. Dada a array `const numeros = [10, 20, 30, 40]`:
   - Utilize o método `push()` para adicionar o número 50 ao final da array.
   - Exiba a array atualizada no console.
   - Utilize o método `pop()` para remover o último número da array.
   - Exiba o número que foi removido e a array atualizada no console.

## ATIVIDADE 5

1. Dada a array `const alunos = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"]`:
   - Adicione os alunos "Fernanda" e "Gabriel" ao final da array.
   - Remova o primeiro aluno da array e exiba o nome desse aluno no console.

## ATIVIDADE 6

1. Dada a array `const carrinho = ["Maçã", "Banana", "Laranja"]`:
   - Verifique se o carrinho tem mais de 3 itens.
     - Se o carrinho não tiver mais de 3 itens, adicione "Uva" ao final da array.
     - Se o carrinho tiver mais de 3 itens, remova o último item da array.
   - Exiba no console uma mensagem indicando qual operação foi realizada (adição ou remoção) e exiba o carrinho atualizado.

## ATIVIDADE 7

1. Dada a array `const filaDeEspera = ["João", "Maria", "Carlos"]`:
   - Verifique se há menos de 5 pessoas na fila.
     - Se houver menos de 5 pessoas, adicione a pessoa "Ana" ao final da fila.
     - Se houver 5 ou mais pessoas, remova a última pessoa da fila.
   - Exiba uma mensagem no console informando qual operação foi realizada (adição ou remoção).
   - Exiba a fila atualizada no console.

## ATIVIDADE 8

1. Dada a array `const estoque = ["Arroz", "Feijão", "Macarrão"]`:
   - Verifique se o número de itens no estoque é menor que 4.
     - Se o número de itens for menor que 4, adicione o item "Óleo" ao início da array.
     - Se o número de itens for 4 ou mais, remova o primeiro item da array.
   - Exiba uma mensagem no console indicando qual operação foi realizada (adição ou remoção).
   - Exiba a array estoque atualizada no console.

## ATIVIDADE 9

1. Dada a array `const tarefas = ["Estudar", "Ler", "Exercitar"]`:
   - Verifique se o número de tarefas é menor que 3.
     - Se o número de tarefas for menor que 3, adicione a tarefa "Comprar mantimentos" ao início da array.
     - Se o número de tarefas for 3 ou mais, remova a primeira tarefa da array.
   - Exiba uma mensagem no console indicando qual operação foi realizada (adição ou remoção).
   - Exiba a array tarefas atualizada no console.

## ATIVIDADE 10

1. Dadas as arrays `const frutas1 = ["Maçã", "Banana", "Laranja"]` e `const frutas2 = ["Uva", "Manga"]`:
   - Combine as duas arrays em uma nova array chamada `todasFrutas`.
   - Exiba no console a array `todasFrutas` resultante.

## OBJETOS

## ATIVIDADE 0

Crie um objeto que represente um aluno e faça as seguintes operações:
1. Crie um objeto chamado aluno com as seguintes propriedades:
•nome (string)
•idade (número)
•curso (string)

2. Exiba no console o nome do aluno e o curso que ele está matriculado.

3. Adicione uma nova propriedade chamada matricula com um número e
exiba o objeto atualizado no console.

## ATIVIDADE 1

Você tem uma lista de contatos de clientes em um objeto e precisa realizar algumas
operações com esses dados.
1. Crie um objeto chamado contato com as seguintes propriedades:
•nome (string)
•telefone (string)
•email (string)

2. Adicione um novo contato à lista com as seguintes informações:
•Nome: "Mariana"
•Telefone: "1234-5678"
•Email: "mariana@example.com"

3. Exiba no console o objeto completo contato.

4. Acesse e exiba no console apenas o nome e o email do contato.

5. Verifique se o comprimento do nome do contato é maior que 5 caracteres e exiba uma
mensagem no console indicando se é maior ou não.

## ATIVIDADE 2

Você está gerenciando um sistema de perfil de usuário e precisa realizar algumas
atualizações em um objeto que representa o perfil de um usuário.
1. Crie um objeto chamado perfilUsuario com as seguintes propriedades:
•nome (string)
•idade (número)
•cidade (string)
•email (string)

2. Atualize o objeto perfilUsuario com as seguintes informações:
•Nome: "Lucas"
•Idade: 30
•Cidade: "São Paulo"
•Email: "lucas@example.com"

3. Exiba no console o perfil completo do usuário.

4. Adicione uma nova propriedade ao objeto perfilUsuario chamada telefone e defina um
valor para ela. Exiba a nova propriedade no console.

## ATIVIDADE 3

Você está criando um sistema para gerenciar pedidos de uma lanchonete. Crie um objeto
que represente um pedido e faça as seguintes operações:

1. Crie um objeto chamado pedido com as seguintes propriedades:
•cliente (string)
•item (string)
•quantidade (número)
•preco (número)

2. Adicione uma nova propriedade chamada status com o valor "em andamento".

3. Crie uma função chamada atualizarStatus que recebe um novo status e atualiza a
propriedade status no objeto pedido. Chame a função e altere o status para "concluído".
Exiba o pedido atualizado no console.


## ATIVIDADES 001 à 010

1. Você tem um array de strings que representa uma lista de tarefas de um usuário, conforme
mostrado abaixo:

• Utilize o método para encontrar o índice da primeira ocorrência da tarefa 'estudar' no array tarefas.
• Utilize o método para encontrar o índice da primeira ocorrência da tarefa 'comprar supermercado'
no array tarefas.

2. Você tem um array de números e deseja encontrar a posição de um número específico usando
uma função. Considere o seguinte array:

•Crie uma função chamada encontrarIndice que receba um número como argumento e retorne o
índice da primeira ocorrência desse número no array numeros usando o método indexOf.
•Utilize a função encontrarIndice para encontrar o índice do número 20 no array numeros.

3. Você possui um array de strings representando tipos de frutas:

• Utilize a função encontrarUltimaOcorrencia para encontrar o índice da
última ocorrência da fruta 'maçã' no array frutas.

4. Você tem o seguinte array de frutas:

• Utilize o método slice para extrair um subarray que começa no índice 1 e
termina no índice 4 (não incluindo o índice 4) do array frutas.
• Exiba o subarray resultante.

5. Você tem um array de números que representa uma série de dados:

•Crie uma função chamada extrairSubarray que receba dois argumentos, inicio e fim, e retorne um
subarray extraído do array dados começando no índice inicio e terminando antes do índice fim
usando o método slice.
•Utilize a função extrairSubarray para extrair o subarray que começa no índice 2 e termina no índice 5
do array dados.

6. Você possui o seguinte array de objetos representando produtos em uma loja, onde cada produto
tem um nome, um preço e uma quantidade em estoque:

• Utilize o método forEach para iterar sobre o array produtos e exibir uma mensagem formatada
para cada produto. A mensagem deve seguir o formato: "Nome: [Nome do produto], Preço: R$
[Preço do produto], Estoque: [Quantidade em estoque]".

7. Você possui o seguinte array de objetos representando funcionários de uma empresa, onde cada
funcionário tem um nome, um cargo e um salário:

• Utilize o método forEach para iterar sobre o array funcionarios e exibir uma mensagem formatada
para cada funcionário. A mensagem deve seguir o formato: "Nome: [Nome do funcionário], Cargo:
[Cargo do funcionário], Salário: R$ [Salário do funcionário]".

8. Você possui o seguinte array de objetos representando cursos oferecidos em uma instituição de
ensino, onde cada curso tem um nome, uma duração em horas e um número de alunos
matriculados:

• Utilize o método forEach para iterar sobre o array cursos e exibir uma mensagem formatada para
cada curso. A mensagem deve seguir o formato: "Nome: [Nome do curso], Duração: [Duração em
horas] horas, Alunos Matriculados: [Número de alunos]".

9. Você possui o seguinte array de números que representa a ordem em que alguns itens
foram adicionados a uma lista:

•Utilize o método reverse para inverter a ordem dos elementos no array listaDeItens.
•Exiba o array resultante no console.

10. Você possui o seguinte array de números que representa a ordem dos itens em uma lista:

•Defina uma variável booleana chamada deveReverter e atribua a ela um valor true ou false.
•Utilize uma estrutura condicional if e else para verificar o valor de deveReverter. Se deveReverter for
true, utilize o método reverse para inverter a ordem dos elementos no array itens. Caso contrário,
mantenha o array na mesma ordem.
•Exiba o array itens no console após a verificação e possível reversão.