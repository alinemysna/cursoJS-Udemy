const pessoa = {
    nome: 'Aline',
    sobrenome: 'Mysna',
    idade: 35,
    endereco: {
        rua: 'sao joao',
        numero: 170
    }
};
const { nome, ...resto } = pessoa;  //atribuição via desestruturação
console.log(nome, resto);
