// const frutas = [
//     'Pera', 'Maçã', 'Uva', 'Melancia'
// ];

//for(let i= 0; i < frutas.length; i++) {
//  console.log(frutas[i]);
//}


//For in -> lê os indices ou chaves do objeto
// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Aline',
    sobrenome: 'Mysna',
    idade: 30
};

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

