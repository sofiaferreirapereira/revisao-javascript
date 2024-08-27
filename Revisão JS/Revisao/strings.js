var frase = "JavaScript é massa"
var comprimentoFrase = frase.length
console.log(comprimentoFrase);

// Usando split para retornar a palavra massa
// Dividir a frase em um array de palavras, separadas pelo espaço
var palavra = frase.split(' ')
console.log(palavra[2])

// Usando match para encontrar a palavra 'massa'
var ultimaPalavra = frase.match(/massa/)
console.log(ultimaPalavra[0]); //Colocar o índice para caso tenha outra palavra massa na frase

// Substituir a palavra 'massa' pela palavra 'incrivel'
var substituiUltimaPalavra = frase.replace('massa', 'incrivel') 
console.log(substituiUltimaPalavra);