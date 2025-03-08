// Para esse último desafio do nosso direto ao ponto, vamos criar um triângulo com *(asterisco).
//Crie um código que imprima na tela o triângulo com tamanho que você irá receber na variável tamanho.

// Entrada de dados

let tamanho: number = 4;
// Saída de dados

// *
// **
// ***
// ****

    for (let i = 1; i <= tamanho; i++) {
        let linha = '';
        for (let j = 1; j <= i; j++) {
            linha += '*';
        }
        console.log(linha);
    }