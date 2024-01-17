//IIFE - Immediately invoked function expression

// function qualquerCoisa() {
//     console.log(123456789);
// }
// qualquerCoisa();

// (function() {
//     const nome = 'Aline';

//     console.log(nome);
// })();

// const nome = 'Qualquer coisa';

(function() {

    const sobrenome = 'Mysna';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Aline'));
    }
    falaNome();
})(); 
