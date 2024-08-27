const diaPrimeiro = new Date(new Date().getFullYear(), 0, 1) // getFullYear: Pega o ano atual, mês e dia
console.log(`Primeiro dia do ano: ${diaPrimeiro}`);

const hoje = new Date()
console.log(`Hoje: ${hoje}`);

var diferencaMilissegundos = hoje - diaPrimeiro

// Convertendo milissegundos para dias
const convertendo = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24)) // multiplicando milissegundos por 1 minuto, 1 minuto por 60 para transformar 
                                                    // em horas e depois em 24 para transformar em um dia
console.log(convertendo); 

// Convertendo o padrão de data EUA para o do Brasil
const formatarData = hoje.toLocaleDateString('pt-BR')
console.log(formatarData);
