// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     falar() {
//         console.log(`${this.nome} está falando`)
//     }

//     comer() {
//         console.log(`${this.nome} está comendo`)
//     }

//     beber() {
//         console.log(`${this.nome} está bebendo`)
//     }
// }

// const p1 = new Pessoa('Aline', 'Mysna');
// const p2 = new Pessoa('Ian', 'Mysna');
// const p3 = new Pessoa('Lucas', 'Mysna');
// const p4 = new Pessoa('Maria', 'Mysna');
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const p1 = new Pessoa('Aline', 'Mysna');
const p2 = new Pessoa2('Ian', 'Lucas');
console.log(p1);
console.log(p2);
