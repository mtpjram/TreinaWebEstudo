// Agora, vamos fazer uma verificação de idade e retornar ao usuário algumas mensagens em relação a possibilidade de votar.
// Vamos receber a idade do usuário na variável idadeUsuário.

// Caso o usuário tenha 15 anos ou menos imprima a mensagem: "Você ainda não tem idade mínima para votar".

// Caso ele tenha mais que 15 anos e menor ou igual à 17 anos, ou mais que 69 anos, imprima: 
// "Você pode votar se quiser, porém, seu voto é facultativo".

// Se ele tiver entre 18 e 69 anos, imprima: "Voto obrigatório!".

// Entrada de dados

// let idadeUsuario: number = 17;

let idadeUsuario: number = 25;


if (idadeUsuario <=15){
    console.log("Você ainda não tem idade mínima para votar");
} else if(idadeUsuario > 15 && idadeUsuario <=17){
    console.log("Você pode votar se quiser, porém, seu voto é facultativo");
 } else if(idadeUsuario >= 18 && idadeUsuario <= 69){
    console.log("Voto obrigatório!");
}else if(idadeUsuario > 69){
    console.log("Você pode votar se quiser, porém, seu voto é facultativo");
}