// Vamos verificar se uma pessoa já pode se aposentar ou não. Para isso precisamos fazer duas verificações, precisamos 
// verificar se o candidato tem no mínimo 35 anos de contribuição, ou, se o candidato tem no mínimo 15 anos de contribuição 
// e idade mínima de 65 anos.

// Se ela puder se aposentar, vamos apresentar a mensagem "Parabéns, você já pode entrar com a sua aposentadoria".

// Caso contrário vamos mostrar a mensagem "Você ainda não tem os requisitos mínimos para se aposentar.".

let tempoDeContribuicao : number = 16;
let idade: number = 59;


 if(tempoDeContribuicao>=35 || tempoDeContribuicao >=15 && idade >=60){
    console.log("Parabéns, você já pode entrar com a sua aposentadoria");
  }else{
    console.log("Você ainda não tem os requisitos mínimos para se aposentar.");
  }