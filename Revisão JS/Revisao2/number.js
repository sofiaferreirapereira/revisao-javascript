/* Operações com Números */

// Declare uma variável num1 com o valor 200.456 e outra num2 com o valor 150.789.
let num1 = 200.456
let num2 = 150.789

// Arredonde num1 para o valor inteiro mais próximo e exiba no console.
let num1Arredondado = Math.round(num1)
console.log(num1Arredondado);

// Encontre o valor máximo e mínimo entre num1 e num2 usando Math.max e Math.min, respectivamente, e exiba no console.
let maximo = Math.max(num1, num2)
let minimo = Math.min(num1, num2)
console.log(`Num mínimo: ${minimo}, num máximo:${maximo}`);

// Calcule a raiz quadrada de num2 e exiba no console.
let raizQuadradaNum2 = Math.sqrt(num2)
console.log(raizQuadradaNum2);

// Converta num1 para uma string com notação científica (ex.: 2.00456e+2) e exiba no console.
let num1NotacaoCientifica = num1.toExponential() 
console.log(num1NotacaoCientifica)