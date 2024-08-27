var grandeNumero1 = BigInt('09876543210987654321')
var grandeNumero2 = BigInt('123433333334444441110')

var soma = grandeNumero1 + grandeNumero2
var subtracao = grandeNumero1 - grandeNumero2
var divisao = grandeNumero1 / grandeNumero2
var multiplicacao = grandeNumero1 * grandeNumero2
console.log('Soma:', soma, 
            '\nSubtração:', subtracao,
            '\nDivisão:', divisao,
            '\nMultiplicação:', multiplicacao
            )

var maior = grandeNumero1 > grandeNumero2
var menor = grandeNumero1 < grandeNumero2
console.log('Grande número 1 é maior que grande número 2? ', maior);
console.log('Grande número 1 é menor que grande número 2? ', menor);
