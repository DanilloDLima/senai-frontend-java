programa
{
	
	funcao inicio()
{
		real num1, num2, num3, num4, media
		
		
		escreva("Digite a primera nota: ")
		leia(num1)
		escreva("Digite segunda nota: ")
		leia(num2)
		escreva("Digite a terceira nota: ")
		leia(num3)
		escreva("Digite a quarta norta: ")
		leia(num4)

		media = (num1+num2+num3+num4) / 4
		
		se (media >= 9){
			escreva("Excelente")
		}senao se(media == 7 e media < 9){
			escreva("bom")
		}senao se(media >= 5 e media < 7){
			escreva("regular")
		}senao{
			escreva("reprovado")
		}
		
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 256; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */