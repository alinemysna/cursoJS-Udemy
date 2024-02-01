// function criaPessoa(nome, sobrenome) {
// const pessoaPrototype = {
//      //metodos

//      falar() {
//         console.log(`${this.nome} está falando.`)
//     },

//     comer() {
//         console.log(`${this.nome} está comendo.`)
//     },
    
//     beber() {
//         console.log(`${this.nome} está bebendo.`)
//     },
// };

//     return Object.create(pessoaPrototype, {
//         nome: {value: nome},
//         sobrenome: {value: sobrenome}
//     });
// }

// const p1 = criaPessoa('Aline', 'Mysna');
// const p2 = criaPessoa('Ian', 'Lucas');
// console.log(p1);

// OUTRA FORMA

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {    
        return Object.create(pessoaPrototype, {
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        });
    }
    
    const p1 = criaPessoa('Aline', 'Mysna');
    const p2 = criaPessoa('Ian', 'Lucas');
    console.log(p1);