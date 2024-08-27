// Criação e manipulação de objetos

var carro = {
    marca: 'Volkswagen',
    modelo: 'Polo',
    ano: 2019,

    detalhes: function() {
        console.log(`Marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}`);
    }
}

carro.detalhes()

carro.cor = 'Cinza'
console.log(carro)