function multiplica(valorA, valorB) {
    return valorA * valorB
}
console.log(multiplica(7, 8));

function quadrado(n) {
    return n * n
}
console.log(quadrado(9));

const array = [1, 2, 3, 4, 5]
const quadrados = array.map(quadrado)
console.log(quadrados);