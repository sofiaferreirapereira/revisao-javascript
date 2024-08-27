/* Manipulação de Objetos Avançada */

// Crie um objeto pessoa com as propriedades nome, idade, profissao, e endereco (onde endereco é um objeto com rua, cidade, e estado).
let pessoa = {
    nome: 'Sofia',
    idade: 18,
    profissao: 'Jovem Aprendiz',
    endereco: {
        rua: 'blabla',
        cidade: 'São José',
        estado: 'Santa Catarina'
    }
}

// Adicione um método apresentacao ao objeto pessoa que retorne uma string com uma breve apresentação da pessoa.
pessoa.apresentacao = function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, trabalho como ${this.profissao} e moro na ${this.endereco.rua}, ${this.endereco.cidade} - ${this.endereco.estado}.`;
};
console.log(pessoa.apresentacao());

// Acesse e exiba o valor da propriedade cidade do endereco no console.
console.log(pessoa.endereco.cidade);

// Atualize a propriedade profissao para um novo valor e exiba o objeto atualizado no console.
pessoa.profissao = 'Desenvolvedora Junior'
console.log(pessoa.profissao);

// Adicione uma nova propriedade telefone ao objeto pessoa e exiba o objeto atualizado no console.
pessoa.telefone = '(49) 98765-4321'
console.log(pessoa);