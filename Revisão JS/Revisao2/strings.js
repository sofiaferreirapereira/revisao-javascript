/* Manipulação de Strings */

// Declare uma variável texto com o valor "Aprendendo JavaScript é divertido e recompensador!".
let frase = "Aprendendo JavaScript é divertido e recompensador!"

// Converta o valor de texto para maiúsculas e exiba no console.
let textoMaiusculo = frase.toUpperCase();
console.log(textoMaiusculo);

// Verifique se texto contém a palavra "divertido" e exiba o resultado no console.
let contemDivertido = frase.match(/divertido/)
console.log(contemDivertido[0]);

// Divida texto em um array de palavras e exiba o array resultante no console.
let array = frase.split(' ')
console.log(array);

// Junte as palavras do array resultante em uma única string, separadas por hífens, e exiba o resultado no console.
let fraseJuntada = array.join('-')
console.log(fraseJuntada);