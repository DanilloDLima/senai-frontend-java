programa {
  funcao inicio() {
    cadeia frase
    inteiro n

    escreva("Digite uma frase: ")
    leia(frase)
    escreva("Digite um n�mero inteiro ser� o n�mero de repeti��es: ")
    leia(n)
    
    para(inteiro x = 0; x < n; x++){
      escreva(frase," : ", x ," \n")
    }
  }
}
