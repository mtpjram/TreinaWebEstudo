// Elabore um código que irá receber a idade de um indivíduo e retornar uma mensagem diferente dependendo da faixa 
// etária dessa pessoa. Você irá receber a idade da pessoa na variável idadePessoa, e:

// de 0 à 19 anos: "Sua faixa etária te classifica como uma pessoa jovem";
// de 20 à 59 anos: "Sua faixa etária te classifica como uma pessoa adulta";
// de 60 em diante: "Sua faixa etária te classifica como uma pessoa na fase sênior da vida".
// Entrada de dados

let idadePessoa: number = 61;
if (idadePessoa <= 19){
    console.log("Sua faixa etária te classifica como uma pessoa jovem");
    }else if(idadePessoa <= 59){
        console.log("Sua faixa etária te classifica como uma pessoa adulta");
    }else if(idadePessoa>=60){
        console.log("Sua faixa etária te classifica como uma pessoa na fase sênior da vida");
    }