programa
{
	
	funcao inicio(){
		inteiro idade
		
		escreva("Digite a sua idade: ")
		leia(idade)
		
		se ((idade >= 0) e (idade <= 12)){
			escreva("Criança")
		}senao se ((idade > 12) e (idade <= 17)){
			escreva("Adolescente")
		}senao se ((idade > 17) e (idade <= 64)){
			escreva("Adulto")
		}senao{
			escreva("Idoso")
		}
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 341; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */