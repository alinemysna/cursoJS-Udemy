// const nome = 'Aline';
// const sobrenome = 'Lima';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Oque eu quiser exportar'


// console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
const nome = 'aline';
const sobrenome = ' Lima'

// module.exports.nome = nome;

// this.sobrenome = 'qualquer coisa que eu quiser';


// module.exports = {
//     nome, sobrenome, Pessoa
// };

exports.Pessoa= Pessoa;
exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'outra coisa';