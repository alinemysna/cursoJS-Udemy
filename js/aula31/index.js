const verdadeira = true;

// let tem escopo de bloco {....bloco}
// var só tem um escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz';

// var nome2 = 'Otavio'; //redeclarada


// if (verdadeira) {
//     let nome = 'Otávio';  // criando outra variavel
//     var nome2 = 'Rogerio';

// if ( verdadeira) {
//     let nome2 = 'Aline'; 
//     let nome = 'Filha';
//     console.log(nome, nome2)
// }
// }



function falaOi() {

if(verdadeira) {
    let nome = 'Aline';
    var sobreNome = 'Mysna'; 
    }
    console.log(sobreNome);
}

falaOi();