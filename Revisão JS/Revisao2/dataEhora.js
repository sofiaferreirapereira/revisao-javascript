/* Manipulação de Datas e Horas */

// Crie uma data representando o seu próximo aniversário.
let dataAniversario = new Date(new Date().getFullYear(), 11, 27) // ano atual, mês e dia
console.log(dataAniversario);

// Crie uma data representando a data atual.
let dataAtual = new Date();
console.log(dataAtual);

// Calcule a diferença em dias entre a data atual e o seu próximo aniversário e exiba o resultado no console.
let diferencaMilissegundos = dataAniversario - dataAtual 
let diferencaDias = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24))
console.log(diferencaDias);

// Formate a data atual no formato "YYYY-MM-DD" e exiba no console.
let formatarData = dataAtual.toLocaleDateString('pt-BR')
console.log(formatarData);
