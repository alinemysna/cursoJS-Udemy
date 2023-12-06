// Escreva uma função que recebe um número e 
// retorne o seguinte:
// numero é divisivel por 3 = Fizz
// numero é divisivel por 5 = Buzz
// numero é divisivel por 3 e 5 = FizzBuzz
// numero não é divisivel por 3 e 5 = retorna o pŕprio numero
// Checar se o numero é realmente um numero
// Use a função com numeros de 0 a 100

// function FizzBuzz (numero) {
//     if(typeof numero !== 'number'){
//         return numero;
//     }
//     if (numero % 3 === 0 && numero % 5 === 0 ) {
//         return 'FizzBuzz';
//     }
//     else if(numero % 3 === 0 ) {
//         return 'Fizz';
//     }
//     else if ( numero % 5 === 0) {
//         return 'Buzz';
//     }
    
//     else {
//         return numero;
//     }
// }

function FizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', FizzBuzz('a'))

for ( let i = 0; i <= 100; i++) {
    console.log(FizzBuzz(i))
}
