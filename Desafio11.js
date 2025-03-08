// Nesse desafio nós vamos receber uma palavra, ela virá na variável palavraMisteriosa. 
// Crie um código que conte quantas vogais existem nessa palavra.

// Entrada de dados


// Saída de dados

// 4

let palavraMisteriosa: string = "TreinaWeb";
let contadorVogais: number = 0;

for(let i =0; i < palavraMisteriosa.length;i++){
    if(palavraMisteriosa[i] == "a" || palavraMisteriosa[i] == "e"|| palavraMisteriosa[i] == "i" || palavraMisteriosa[i] == "o" || palavraMisteriosa[i] == "u"){
        contadorVogais++;
        console.log(contadorVogais);
    }
}