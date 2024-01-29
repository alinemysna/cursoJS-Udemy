//Construtora -> molde(classe)

// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// const pessoa1 = new Pessoa('Aline', 'Lima');
// const pessoa2 = new Pessoa('Ian', 'Lucas');

// console.dir(pessoa1);
// console.dir(pessoa2)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
    this.nomeCompleto = () => 'Original>' + this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Aline', 'Lima');
const data = new Date();

console.dir(pessoa1);
console.dir(data);