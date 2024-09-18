programa
{
    funcao inicio()
    {
        cadeia cor
        inteiro opcao
        
        escreva("Digite o nome de uma cor -Vermelho-Azul-Amarelo-: ")
        leia(cor)

        se(cor == "Azul"){
        	opcao = 1	
        }senao se(cor == "Vermelho"){
        	opcao = 2
        }senao se(cor == "Amarelo"){
        	opcao = 3
        }senao{
        	opcao = 0
        }

        escolha(opcao){
            caso 1:
                escreva("Azul")
                pare
            caso 2:
                escreva("Vermelho")
                pare
            caso 3:
                escreva("Amarelo")
                pare
            caso contrario:
                escreva("Cor não reconhecida")
                pare
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 727; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */