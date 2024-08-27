// Transformação Simples:
// Dado um array de números, use o método map para criar um novo array onde cada número é multiplicado por 3.
let numeros = [1, 2, 3, 4, 5]
numeros = numeros.map(numero => numero * 3)
console.log(numeros)

// Conversão de Tipos:
// Dado um array de números, use o método map para criar um novo array onde cada número é convertido para uma string.
let numeros2 = [1, 2, 3, 4, 5]
numeros2 = numeros2.map(numero2 => numero2.toString())
console.log(numeros2)

// Manipulação de Strings:
// Dado um array de strings, use o método map para criar um novo array onde cada string é convertida para maiúsculas.
let frutas = ["Maça", "Banana", "Laranja"]
frutas = frutas.map(fruta => fruta.toUpperCase())
console.log(frutas)

// Extração de Propriedades
// Dado um array de objetos representando pessoas, use o método map para criar um novo array contendo apenas os nomes das pessoas.
let pessoas = [ { nome: "Alice", idade: 25 }, 
                { nome: "Bob", idade: 30 }, 
                { nome: "Charlie", idade: 35 }]
pessoas = pessoas.map(pessoa => pessoa.nome)
console.log(pessoas)

// Cálculo Composto
// Dado um array de números, use o método map para criar um novo array onde cada número é elevado ao quadrado.
let numeros3 = [1, 2, 3, 4, 5]
numeros3 = numeros3.map(numero3 => numero3 * numero3)
console.log(numeros3)

// Mutabilidade
// Crie um array chamado meuArray com os valores [1, 2, 3].
// Altere o primeiro elemento do array para 4 e imprima o array no console.
// Crie uma string chamada minhaString com o valor "Olá".
// Tente alterar o primeiro caractere da string para "o" e imprima a string no console. O que acontece? Explique.
let meuArray = [1, 2, 3];
meuArray[0] = 4;
console.log(meuArray)
let minhaString  = "Olá";
minhaString.replace()
console.log(minhaString) //Não aconteceu nada, não consegui concluir a atividade.

// Exercício de Persistência
// Explique como você pode tornar os dados persistentes entre execuções de um programa usando localStorage.


// Exercício de Tipos de Dados
// Declare uma variável primitivo do tipo string com o valor "Olá".
// Declare uma variável referencia que contenha um objeto com uma propriedade saudacao com o valor "Olá".
// Imprima os valores de primitivo e referencia.saudacao no console.
let string = "Olá";
var referencia = {
    saudacao: "Olá"
}
console.log("Variável do tipo primitivo: " + string, "\n Variável do tipo referência: " + referencia.saudacao)


// Exercício de Estrutura de Dados
// Crie um array unidimensional chamado arraySimples com os valores [1, 2, 3].
// Crie um array multidimensional chamado arrayMulti com os valores [[1, 2], [3, 4]].
// Imprima ambos os arrays no console.
let arraySimples = [1, 2, 3]
let arrayMulti = [[1, 2], [3, 4]]
console.log(arraySimples, arrayMulti)

// Desafio de Mapeamento Complexo
// Dado um array de objetos representando produtos, use o método map para criar um novo array contendo apenas os preços dos produtos com desconto aplicado de 10%.
// Entrada: [{ nome: "Produto 1", preco: 100 }, { nome: "Produto 2", preco: 200 }, { nome: "Produto 3", preco: 300 }]
// Saída Esperada: [90, 180, 270]
var produtos = [
    { nome: "Produto 1", preco: 100 }, 
    { nome: "Produto 2", preco: 200 }, 
    { nome: "Produto 3", preco: 300 }
]
produtos = produtos.map(produto => produto.preco - (produto.preco / 10))
console.log(produtos)