// Symbol: variável de valor único que não pode ser modificado

var chave1 = Symbol('descricao')
var chave2 = Symbol('descricao')

var comparacao = chave1 == chave2
console.log(comparacao); // retorna false pq o valor gerado é único, apesar de conter a mesma descricao 

var usuario = {
    [chave1]: '123456' 
}
console.log(usuario[chave1]);