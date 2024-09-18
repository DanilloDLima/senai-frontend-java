programa {
  funcao inicio() {

caracter letra

escreva("Digite uma das letras (A, B, C, D): ")
leia(letra)

escolha(letra){
  caso "A": 
    escreva("Você escolheu a opção A: Cadastrar novo usuário.")
    pare
  caso "B":
    escreva("Você escolheu a opção B: Consultar usuário.")
    pare
  caso "C":
    escreva("Você escolheu a opção C: Atualizar cadastro.")
    pare
  caso "D":
    escreva("Você escolheu a opção D: Deletar cadastro.")
    pare
  caso contrario:
    escreva("Opção inválida.")
    pare
  }

  }
}
