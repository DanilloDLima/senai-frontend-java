frutas = ["Morango", "Maçã", "Uva", "Banana", "Abacaxi"]
numeros = [10, 11, 12, 13, 14, 15]

frutas_filtradas = [fruta for fruta in frutas if len(fruta) < 5]
soma_pares = sum(n for n in numeros if n % 2 == 0)
resultado = ", ".join(frutas) if frutas else ""

print(soma_pares)
print(frutas_filtradas)
print(resultado)