programa {
  funcao inicio() {

caracter letra

escreva("Digite uma das letras (A, B, C, D): ")
leia(letra)

escolha(letra){
  caso "A": 
    escreva("Voc� escolheu a op��o A: Cadastrar novo usu�rio.")
    pare
  caso "B":
    escreva("Voc� escolheu a op��o B: Consultar usu�rio.")
    pare
  caso "C":
    escreva("Voc� escolheu a op��o C: Atualizar cadastro.")
    pare
  caso "D":
    escreva("Voc� escolheu a op��o D: Deletar cadastro.")
    pare
  caso contrario:
    escreva("Op��o inv�lida.")
    pare
  }

  }
}
