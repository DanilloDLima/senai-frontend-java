import java.util.Scanner;

public class Atividade14 {
    public static void main(String[] args) {
        //calcule a qtd de litros de gasolina gastos em uma viagem
        //sabendo que o carro faz 12km / l
        //deve se fornercer ao usuario o tempo que era gasto na viagem
        //sua velocidade media, distancia percorrida e qtd de litros ultilizados par fazer a viagem
        //distancia percorrida = tempo x velocidade
        //litros usados = distancia / 12
        //pegar do usuario o tempo e a velocidade

        final int kmLitro = 12;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o tempo da viagem em horas: ");
        int tempoViagem = sc.nextInt();

        System.out.println("Digite a velocidade média: ");
        int velocidadeMedia = sc.nextInt();

        int distanciaPercorrida = tempoViagem * velocidadeMedia;
        double litrosUsados = distanciaPercorrida / kmLitro;

        System.out.println("Distância percorrida: "+distanciaPercorrida+" kms");
        System.out.println("Gasolina ultizada: "+litrosUsados+" lts");
    }
}
