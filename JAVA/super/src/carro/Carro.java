package carro;

public class Carro{
    private String nome;
    private String cor;
    private int ano;
    private String marca;

    public Carro(String nome, String cor, int ano, String marca) {
        this.nome = nome;
        this.cor = cor;
        this.ano = ano;
        this.marca = marca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void exibirCarro(){
        System.out.println("---------------------------------------");
        System.out.println("Nome: " + getNome());
        System.out.println("Cor: " + getCor());
        System.out.println("Ano: " + getAno());
        System.out.println("Marca: " + getMarca());
    }
}
