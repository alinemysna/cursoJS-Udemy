/* 
Object. assign(des, any)
Object. getOwnPropetyDescriptor(o, 'prop)
... (spread)

Já vimos
Object. keys (retorna as chaves)
Object. freeze (congela o objeto)
object. definePropeties (define várias propriedades)
Object. defineProperty (define uma propriedade)

*/
// const produto = { nome: 'produto', preco: 1.8};
// const caneca = {
//     ...produto,
//     material: 'porcelana'
// };

// caneca.nome = 'Cara';
// caneca.preco = 2.5;
// //console.log(produto);
// console.log(caneca);

// const produto = { nome: 'produto', preco: 1.8};
// const caneca = Object.assign({}, produto, {material: ' Porcelana'});

// caneca.nome = 'Cara';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// const produto = { nome: 'produto', preco: 1.8};
// Object.freeze(produto);
// produto.nome = 'outro nome';
// const caneca = {nome: produto.nome, preco: produto.preco};
// console.log(Object.keys(produto));

// const produto = { nome: 'produto', preco: 1.8};
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);

// const produto = { nome: 'caneta', preco: 1.8};
// console.log(Object.values(produto));

// const produto = { nome: 'caneta', preco: 1.8, material: 'porcelana'};
// console.log(Object.entries(produto));


// const produto = { nome: 'caneta', preco: 1.8, material: 'porcelana'};
// for(let [chave, valor] of Object.entries(produto)) {
//     console.log(chave, valor);
//}


const produto = { nome: 'caneta', preco: 1.8, material: 'porcelana'};
for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}