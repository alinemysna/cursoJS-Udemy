// Dobre os números
//               0  1   2   3  4  5  6  .....
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto (id)

const pessoas = [
    {nome: 'Aline', idade: 35},
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
// const nomePessoa = pessoas.map(obj => obj.nome);
// console.log(nomePessoa);

// const idadePessoa = pessoas.map(function(obj) {
//     // delete obj.nome;
//     // return obj; OU
//     return {idade: obj.idade};
// });

//para transformar em arrowfaction teve que envolver as chaves com parenteses

// const idadePessoa = pessoas.map(obj =>({idade: obj.idade}));
// console.log(idadePessoa);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = (indice + 1);
    return newObj;
});
console.log(comIds);
console.log(pessoas);