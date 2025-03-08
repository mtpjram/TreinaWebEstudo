// Para esse desafio vamos fazer o clássico exercício de verificação de número primo. 
// Você receberá o número na variável ehPrimo e terá que imprimir a frase "Esse número é primo" caso ele seja primo.
// Caso não seja, imprima "Não é primo".

// Entrada de dados

// let ehPrimo: number = 7;
// Saída de dados

// Esse número é primo

let ehPrimo: number = 7;

let divisores: number = 0;

for (let i = 1; i <= ehPrimo; i++) {
    if (ehPrimo % i == 0) {
        divisores = divisores + 1;
        // informar a tde de vezes que ele foi divisível.
        console.log(divisores);
      }
    }
    if (divisores <=2) {
        console.log("Esse número é primo");
    } else {
        console.log("Não é primo");
    }