// Converter de string para number
var numeroString = '123.98'
var numero = parseFloat(numeroString)
console.log(numero);

// Arredonda o número para inteiro mais proximo 
var numeroInteiro = Math.round(numero) // método de conversão
console.log(numeroInteiro);

// Convertendo o número inteiro arredondado para string com 3 casas decimais
var string = numeroInteiro.toFixed(3)
console.log(string);

// Verifica de é um número
var verifica = isNaN(numeroString)
console.log(verifica);