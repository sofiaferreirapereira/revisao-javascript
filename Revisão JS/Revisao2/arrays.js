/* Manipulação de Arrays */

// Declare um array numeros com os valores [10, 20, 30, 40, 50].
let array = [10, 20, 30, 40, 50]

// Use o método push para adicionar o valor 60 ao final do array e exiba o array atualizado no console.
array.push(60)
console.log(array);

// Use o método pop para remover o último valor do array e exiba o valor removido e o array atualizado no console.
array.pop()
console.log(array);

// Use o método splice para remover o terceiro elemento do array (número 30) e exiba o array atualizado no console.
array.splice(2, 1)
console.log(array);

// Ordene o array em ordem decrescente e exiba o resultado no console.
let decrescente = array.sort(function(a,b) {
    return b - a
})
console.log(decrescente);