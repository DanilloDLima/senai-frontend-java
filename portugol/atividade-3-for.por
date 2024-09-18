programa {
  funcao inicio() {
    cadeia frase
    inteiro n

    escreva("Digite uma frase: ")
    leia(frase)
    escreva("Digite um número inteiro será o número de repetições: ")
    leia(n)
    
    para(inteiro x = 0; x < n; x++){
      escreva(frase," : ", x ," \n")
    }
  }
}
