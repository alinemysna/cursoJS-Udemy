/* Primitivos (imutáveis) - string, number, boolean, undefined, unll (bigint, symbol) -valor

let a = 'A'
let b = a  //cria uma cópia e o valor de B não muda
console.log(a, b)

a = 'uotro valor'
console.log(a, b)



// Referência (mutável) - array, object, function - passados por referencia

let a = [1, 2, 3]
let b = [...a]
let c = b
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

c.push('Aline')
console.log(a, c)
*/

const a = {
    nome: 'Aline',
    sobrenome: 'Lima'
};
const b = {...a};  //não altera o valor de b

a.nome = 'Lucas'
console.log(a)
console.log(b)
