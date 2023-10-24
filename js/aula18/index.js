/*const array =[1, 2, 3]
array.push(4)
array[0] = 'Aline'

console.log(array)

const nome1 = 'Aline'
const sobrenome1 = 'Lima'
const idade1 = '30'

const nome2 = 'Ian'
const sobrenome2 = 'Lucas'
const idade2 = '10'

const pessoa1 = {
  nome: 'Aline',
  sobrenome: 'Lima',
  idade: 30
}
const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 50
  }
console.log(pessoa1.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa1.idade)
*/
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome,  idade }
}
/*
 nome: nome,
 sobrenome: sobrenome,
 idade: idade
 não precisa repetir se for igual


const pessoa1 = criaPessoa('Aline', 'Oliveira', 29)
const pessoa2 = criaPessoa('Amanda', 'Lima', 28)
const pessoa3 = criaPessoa('Alex', 'wilton', 30)
const pessoa4 = criaPessoa('Junior', 'Aureliano', 27)
const pessoa5 = criaPessoa('Ian', 'Santos', 10)


console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade)
 */
const pessoa1 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 50,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade(){
        this.idade++;
    }

  }
  pessoa1.fala()
  pessoa1.incrementaIdade()
  pessoa1.fala()
  pessoa1.incrementaIdade()
  pessoa1.fala()
  pessoa1.incrementaIdade()
  pessoa1.fala()
  pessoa1.incrementaIdade()
  pessoa1.fala()
  pessoa1.incrementaIdade()
  pessoa1.fala()
