// const pessoa = {
//     //corpo do objeto
//     nome: 'Aline',
//     sobrenome: 'Mysna'
// };

// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);

// const chave = 'nome';
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Ian';
// pessoa1.sobreno = 'Lucas';

// delete pessoa1.nome;
// console.log(pessoa1);
//console.log(pessoa1.sobreno);

// const pessoa1 = new Object();
// pessoa1.nome =  'Maria';
// pessoa1.sobrenome= 'Lima';
// pessoa1.idade = 30;

// pessoa1.falarNome = function() {
//     return(`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };
// for(let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// Factory function / Constructor functions / Classes

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return`${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa( 'Aline', 'Mysna');
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this);   //não pode alterar nada e nem criar somente antes do freezer
};
//cria objeto vazio{} com o this -> 
const p1 = new Pessoa( 'Aline', 'Mysna');
const p2 = new Pessoa( 'Ian', 'Lucas');
// console.log(p1);
// console.log(p2.nome);
//Object.freeze(p1);  //não pode alterar o valor de p1
//p1.nome = 'Outra coisa'; //altera o valor
// p1.fala = function() { console.log('oi')};
// p1.fala()
console.log(p1); 