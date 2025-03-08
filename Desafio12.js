// Vamos calcular o fatorial de um número. Iremos receber o número na variável numeroFatorial. 
// Para calcular o fatorial de um número precisamos multiplicar todos os números do antecessores até chegar no 1.
// Por exemplo, o fatorial de 5 é: 5 x 4 x 3 x 2 x 1 = 120.
// // Entrada de dados


let numeroFatorial = 4; // Você pode alterar este valor para calcular o fatorial de outro número
let fatorial = 1;

//usamos um loop for que começa em numeroFatorial
//e vai até 1, multiplicando o valor de fatorial = 1

for (let i = numeroFatorial; i > 0; i--) {
    fatorial *= i;
}

console.log(fatorial);
