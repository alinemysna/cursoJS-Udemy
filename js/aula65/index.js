//Filter , Map , Reduce

//Retorne os numeros maiores que 10
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//function callbackFilter(valor, indice, array) {
    // if(valor > 10) {
    //     return true;
    // } else {
    //     return false;
    // }
//}
// function callbackFilter(valor) {
//     return valor > 10;
// }

// const numFiltrados = numeros.filter(callbackFilter);
// console.log(numFiltrados);

// function anonima

// const numFiltrados = numeros.filter(function (valor) {
//     return valor > 10;
// }
// );
// console.log(numFiltrados);

// mudar para arrow function

// const numFiltrados = numeros.filter(valor=> {
//     return valor > 10;
// }
// );
// console.log(numFiltrados);

//função de callback

//const numFiltrados = numeros.filter(valor=> valor > 10);

// const numFiltrados = numeros.filter((valor, indice, Array ) => {
//     console.log(valor, indice, Array);
//     return valor > 10;
// });

// const numFiltrados = numeros.filter(valor=> valor > 10);
// console.log(numFiltrados);

//Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos


//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome:'Aline', idade:35},
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Leticia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47}
];
//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
//console.log(pessoasComNomeGrande);

// const pessoasComMaisCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasComMaisCinquentaAnos);

const pessoasNomesTerminamEmA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasNomesTerminamEmA);