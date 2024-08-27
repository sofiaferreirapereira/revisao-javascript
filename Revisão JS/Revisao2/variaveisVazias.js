/* Trabalhando com Null, Undefined, e NaN */

// Declare uma variável nulo e atribua a ela o valor null.
let nulo = null

// Verifique se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===). Exiba os resultados no console.
let comparacao = nulo == undefined
let comparacao2 = nulo === undefined
console.log(`Nulo é igual a undefined: ${comparacao} \nNulo é estritamente igual a undefined: ${comparacao2}`);

// Declare uma variável indefinido sem atribuir nenhum valor.
let indefinido 

// Verifique se indefinido é NaN usando a função isNaN e exiba o resultado no console.
console.log('Variável sem valor é igual a NaN:', indefinido == isNaN)

// Declare uma variável numStr2 com o valor "123abc" (string) e tente convertê-la para um número. Verifique se o resultado é NaN e exiba o resultado no console.
let numString = '123abc'
console.log('Transformando a string 123abc em numero:', parseFloat(numString));