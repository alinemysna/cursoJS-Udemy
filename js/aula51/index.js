//return
//retorna um valor
// termina a função
// function soma(a, b) {
//   return a + b;
// }
// //console.log(soma(5 , 2));

// //diferença

// function soma2(a, b) {
//     console.log(a + b);
// }
// soma2(5, 2);

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'blue';
// });

// function criaPessoa(nome, sobrenome) {
//     return{ nome, sobrenome};
// }

// const p1 = criaPessoa('Aline', 'Lima');
// const p2 = {
//     nome: 'Mysna',
//     sobrenome: 'Oliveira'
// };
// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('olá');
// console.log(olaMundo('mundo!'));

// const fala = falaFrase('Olá');
// const resto = fala('Mundo');
// console.log(resto);

// function duplica(n) {
//     return n * 2;
// }
// function triplica(n) {
//     return n * 3;
// }
// function quadriplica(n) {
//     return n * 4;
// }
//  console.log(duplica(2));
//  console.log(triplica(2));
//  console.log(quadriplica(2));

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(5));

