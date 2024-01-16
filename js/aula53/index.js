//Global
function retornaFuncao(nome) {
    //const nome = 'Aline';
    return function() {
        return nome;
    };
}
const funcao = retornaFuncao('Aline');
const funcao2 = retornaFuncao('Mysna');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());