import java.util.Scanner;

public class Atividade13 {
    public static void main(String[] args) {
        //receba um valor inteiro e imprima a sua tabuada
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite um número inteiro para saber sua tabuada: ");
        int tabuada = sc.nextInt();

        for (int x = tabuada; x <= tabuada; x++){
            for (int y = 0; y <= 10; y++){
                System.out.println("o resultado de "+x+" x "+y+" : "+ x*y);
            }
        }
    }
}
