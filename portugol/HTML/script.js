var checar1=false, checar2=false

function checarResultado(){
    if(checar1 != false){
        resultado1()
    }else{
        resultado2()
    }
}
function atividade1(){
    checar1 = true
    checar2 = false

    document.getElementById('atividade2').style.display = 'none'
    document.getElementById('atividade3').style.display = 'none'

    const questao = 'Digite um numero de 1 a 7 e descubra o dia da semana.';

    document.getElementById('questao').innerText=questao;

    var inputContainer = document.getElementById('inputContainer');
    // Alterar a propriedade display para mostrar o input
    inputContainer.style.display = 'block';
}
   


function resultado1(){
    let num = document.getElementById('userInput').value;

    switch (num){
        case '1':
            document.getElementById('resultado').innerText='o dia da semana é segunda-feira';
        break

        case '2':
            document.getElementById('resultado').innerText='o dia da semana é terça-feira';
        break

        case '3':
            document.getElementById('resultado').innerText='o dia da semana é quarta-feira';
        break

        case '4':
            document.getElementById('resultado').innerText='o dia da semana é quinta-feira';
        break

        case '5':
            document.getElementById('resultado').innerText='o dia da semana é sexta-feira';
        break

        case '6':
            document.getElementById('resultado').innerText='o dia da semana é sábado';
        break
        case '7':
            document.getElementById('resultado').innerText='o dia da semana é domingo';
        break
        default:
            document.getElementById('resultado').innerText=''
    }
}


function limpar(){
    document.getElementById('userInput').value="";
    num = "";
    document.getElementById('resultado').innerText="";
    document.getElementById('questao').innerText="";
    inputContainer.style.display = 'none'

    document.getElementById('atividade1').style.display = ''
    document.getElementById('atividade3').style.display = ''
    document.getElementById('atividade2').style.display = ''



}

 function atividade2(){
     checar2 = true
     checar1 = false

     document.getElementById('atividade1').style.display = 'none'
     document.getElementById('atividade3').style.display = 'none'

     const questao = 'Digite o nome de uma cor e descubra se ela e uma cor primária';

     document.getElementById('questao').innerText=questao;

     var inputContainer = document.getElementById('inputContainer');
             // Alterar a propriedade display para mostrar o input
             inputContainer.style.display = 'block';

   
 }

 function resultado2(){ 
     let num = document.getElementById('userInput').value;

     switch (num){
         case 'azul':
             document.getElementById('resultado').innerText='A cor azul eé uma cor primária';
         break

         case 'vermelha':
             document.getElementById('resultado').innerText='A cor vermelha é uma cor primária';
         break

         case 'verde':
             document.getElementById('resultado').innerText='A cor verde é uma cor primária';
         break

         default:
             document.getElementById('resultado').innerText='Cor não reconhecida';
         break

     }
}
