/* Lógica Booleana e Comparações */

// Declare três variáveis: x com valor 8, y com valor 12, e z com valor 8.
let x = 8, y = 12, z = 8

// Compare se x é maior ou igual a y e exiba o resultado no console.
let xMaiorIgualy = x >= y
console.log(xMaiorIgualy);

// Verifique se x é diferente de z (usando !=) e se x é estritamente diferente de z (usando !==). Exiba os resultados no console.
let xDiferentez = x != z
let xEstritamenteDiferentez = x !== z
console.log(`x é diferente de z? ${xDiferentez}`);
console.log(`x é estritamente diferente de z? ${xEstritamenteDiferentez}`);

// Use uma expressão lógica para verificar se x é menor que y e z é maior que x. Exiba o resultado no console.
let xMenory = x < y
let zMaiorx = z > x
console.log(`x é menor que y: ${xMenory} \nz é maior que x: ${zMaiorx}`);

// Use uma expressão lógica para verificar se x é igual a z ou y é menor que z. Exiba o resultado no console.
let comparacoes = x == z || y < z
console.log(comparacoes);