def sinal_transito(cor):
    sinais = {
        "vermelho": "Pare",
        "amarelo": "Atenção",
        "verde": "Siga",
        "outro": "Cor inválida"
    }
    return sinais.get(cor, sinais["outro"])

# Exemplo de uso
cor_sinal = "ver".lower()
print(sinal_transito(cor_sinal))