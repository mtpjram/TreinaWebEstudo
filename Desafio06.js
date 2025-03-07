// Nesse exercício, vamos encontrar a média de notas de um aluno que fez 4 atividades valendo cada uma entre 0 e 10 pontos. 
// Vamos receber cada nota nas variáveis, n1, n2, n3 e n4.
// Caso a média for maior ou igual a 6 devemos retornar a mensagem:
// "Parabéns, você foi aprovado! Sua média final é de media".
// Caso seja abaixo de 6, imprimimos a mensagem:
// "Infelizmente você não atingiu a média mínima, sua média foi de media".

// Entrada de dados

let n1: number = 5;
let n2: number = 7;
let n3: number = 8;
let n4: number = 6;


let media: number = (n1+n2+n3+n4)/4;
if(media >= 6){
    console.log("Parabéns, você foi aprovado! Sua média final é de media"+ " " + media);
} else{
    console.log("Infelizmente você não atingiu a média mínima, sua média foi de media"+ "" + media);
}