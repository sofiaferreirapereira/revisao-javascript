/* Trabalhando com Funções de Callback */

// Declare uma função executaOperacao que aceite dois números e uma função de operação como parâmetros, e retorne o resultado da operação aplicada aos números.
function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}

// Use a função executaOperacao para somar dois números, passando uma função de soma como callback.
console.log(executaOperacao(190, 635, soma)); 


// Use a função executaOperacao para multiplicar dois números, passando uma função de multiplicação como callback.
console.log(executaOperacao(32, 12, multiplicacao));

/* Crie uma função repetirOperacao que aceite um número e uma função de operação, e repita a 
operação esse número de vezes, exibindo o resultado a cada iteração. */
function repetirOperacao(valorInicial, vezes, operacao) {
    let resultado = valorInicial;
    for (let i = 0; i < vezes; i++) {
        resultado = operacao(resultado);
        console.log(`Iteração ${i + 1}: ${resultado}`);
    }
    return resultado;
}

function incrementar(valor) {
    return valor + 1;
}
function dobrar(valor) {
    return valor * 2;
}
console.log(repetirOperacao(0, 5, incrementar));
console.log(repetirOperacao(1, 4, dobrar));


// Declare uma função contarOcorrencias que receba uma string e um caractere, e use forEach para contar quantas vezes o caractere aparece na string.
function contarOcorrencias(string, caracter) {
   
    let caracteres = string.split('');
    let contador = 0;
    caracteres.forEach(c => {
      if (c === caracter) {
        contador++;
      }
    });
    return contador;
  }
  
console.log(contarOcorrencias('avatar', 'a')); // Saída: 3
  