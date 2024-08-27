/* Funções e Escopo */

// Declare uma função soma que aceite dois parâmetros e retorne a soma deles.
function somar(a, b) {
    return a + b
}
console.log(somar(79, 323));

// Declare uma função ehPar que receba um número como parâmetro e retorne true se o número for par, ou false se for ímpar.
function ehPar(num) {
    return num % 2 == 0
}
console.log(ehPar(1));

// Declare uma função dobraValores que receba um array de números e retorne um novo array com cada valor dobrado.
function dobraValores(array) {
    return array.map(num => num * 2)
}
let arrayNumeros = [3, 5, 7, 21, 13]
console.log(dobraValores(arrayNumeros));

// Crie uma função contaCaracteres que receba uma string e retorne o número de caracteres na string.
function contaCaracteres(string) {
    return string.length
}
console.log(contaCaracteres('Princesa'));

// Declare uma função fatorial que calcule o fatorial de um número (ex.: fatorial de 5 é 5*4*3*2*1 = 120).
function fatorial(num) {
    if (num === 0) {
      return 1;
    }

    let resultado = 1;
    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  }
console.log(fatorial(98)); 
  