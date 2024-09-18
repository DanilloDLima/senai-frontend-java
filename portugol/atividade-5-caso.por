programa {
  funcao inicio() {
    cadeia filmes

    escreva("Digite o filme que deseja assistir: DeadPool, Homem Aranha, Batman, Kong Fu Panda, Patos " )
    leia(filmes)

    escolha(filmes){
      caso "Patos":
        escreva("Você escolheu a opção Patos: Classificaçao indicativa, 10 anos.")
        pare

      caso "Kung Fu Panda":
        escreva("Você escolheu a opção Kong Fu Panda: Classificaçao indicativa, 12 anos.")
        pare

      caso "Homem Aranha":
        escreva("Você escolheu a opção Homem Aranha: Classificaçao indicativa, 14 anos.")
        pare

      caso "Batman":
        escreva("Você escolheu a opção Batman: Classificaçao indicativa, 16 anos.")
        pare

      caso "DeadPool":
       escreva("Você escolheu a opção Batman: Classificaçao indicativa, 18 anos.")
       pare
       
      caso contrario:
        escreva("Opção de filme inválida.")
    }
  }
}
