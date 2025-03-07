// Vamos classificar um triângulo baseado nas suas medidas:

// Se todos os lados forem iguais, o triângulo é equilátero;
// Se tiver dois lados iguais é um triângulo isósceles;
// Caso não tenha nenhum lado igual o triângulo é escaleno.
// Vamos receber as medidas nas variáveis: ladoUm, ladoDois e LadoTres:

// Se o triângulo for equilátero imprima "Esse triângulo tem todos os lados iguais, portanto é equilátero";
// Se o triângulo for isósceles imprima "Esse triângulo tem dois os lados iguais, portanto é isósceles";
// Se o triângulo for escaleno imprima "Esse triângulo não possui nenhum lado igual, portanto é escaleno".
// Entrada de dados

let ladoUm: number = 10;
let ladoDois: number = 10;
let ladoTres: number = 5;


if(ladoUm == ladoDois && ladoDois == ladoTres){
    console.log("Esse triângulo tem todos os lados iguais, portanto é equilátero");
}else if(ladoUm == ladoDois || ladoDois == ladoTres || ladoTres == ladoUm){
    console.log("Esse triângulo tem dois os lados iguais, portanto é isósceles");
}else{
    console.log("Esse triângulo não possui nenhum lado igual, portanto é escaleno") ;
}