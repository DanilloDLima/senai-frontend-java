programa {
  funcao inicio() {
    inteiro rodas

    escreva("Digite um n�mero de rodas para a classifica��o de ve�culo desejado: ")
    leia(rodas)

    escolha(rodas){
      caso 2:
      escreva("Bicicleta ou Moto")
      pare
      caso 3:
      escreva("Triciclo")
      pare
      caso 4:
      escreva("Carro ou Caminhonete")
      pare
      caso contrario:
      escreva("Ve�culo Inv�lido!")
    }
  }
}
