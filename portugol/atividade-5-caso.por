programa {
  funcao inicio() {
    cadeia filmes

    escreva("Digite o filme que deseja assistir: DeadPool, Homem Aranha, Batman, Kong Fu Panda, Patos " )
    leia(filmes)

    escolha(filmes){
      caso "Patos":
        escreva("Voc� escolheu a op��o Patos: Classifica�ao indicativa, 10 anos.")
        pare

      caso "Kung Fu Panda":
        escreva("Voc� escolheu a op��o Kong Fu Panda: Classifica�ao indicativa, 12 anos.")
        pare

      caso "Homem Aranha":
        escreva("Voc� escolheu a op��o Homem Aranha: Classifica�ao indicativa, 14 anos.")
        pare

      caso "Batman":
        escreva("Voc� escolheu a op��o Batman: Classifica�ao indicativa, 16 anos.")
        pare

      caso "DeadPool":
       escreva("Voc� escolheu a op��o Batman: Classifica�ao indicativa, 18 anos.")
       pare
       
      caso contrario:
        escreva("Op��o de filme inv�lida.")
    }
  }
}
