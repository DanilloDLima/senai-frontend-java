programa {
  funcao inicio() {
    inteiro rodas

    escreva("Digite um número de rodas para a classificação de veículo desejado: ")
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
      escreva("Veículo Inválido!")
    }
  }
}
