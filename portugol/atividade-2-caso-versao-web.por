programa
{
    funcao inicio()
    {
        cadeia cor
        
        escreva("Digite o nome de uma cor -Vermelho-Azul-Amarelo-: ")
        leia(cor)

        escolha(cor){
            caso "Azul":
                escreva("Azul")
                pare
            caso "Vermelho":
                escreva("Vermelho")
                pare
            caso "Amarelo":
                escreva("Amarelo")
                pare
            caso contrario:
                escreva("Cor não reconhecida")
                pare
        }
    }
}
