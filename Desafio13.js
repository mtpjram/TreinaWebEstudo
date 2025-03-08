// Crie um código que imprima todos os números pares entre um intervalo. Você receberá o número na variável exibirPar, 
// e terá que imprimir, apenas os pares entre 0 e a variável.

// O valor da variável sempre será um valor positivo e maior que 0.

// Entrada de dados

// let exibirPar: number = 10
// Saída de dados

// 0
// 2
// 4
// 6
// 8
// 10

let exibirPar: number = 10
 for(let i = 0;i <= exibirPar;i++){
     if(i % 2 == 0){
         console.log(i);
     }
 }