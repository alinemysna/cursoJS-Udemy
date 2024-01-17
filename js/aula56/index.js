//Functory function (Função Fábrica)
//Constuctor function (Função Construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        fala: function(assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //GETTER
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}
const p1 = criaPessoa('Aline', 'Mysna', 1.60, 70);
//console.log(p1.nome);
//console.log(p1.nomeCompleto);
//console.log(p1.imc);
p1.nomeCompleto = 'Israel Girão dos Santos';
//console.log(p1.nome);
//console.log(p1.sobrenome);
const p2 = criaPessoa('Ian', 'Lucas', 1.50, 50);
//console.log(p2.fala('falando sobre JS'));
//console.log(p2.nomeCompleto);
//console.log(p2.imc);
//console.log(p1.fala());
const p3 = criaPessoa('Israel', 'Girão', 1.80, 90);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

