//Função construtora -> objetos
//Funçaõ fábrica -> objetos
// Construtora -> Pessoa(new)
 function Pessoa(nome, sobrenome) {
    //atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {
        s
    };

    //atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou abençoada(o)!')
    }
 }

 const p1 = new Pessoa('Aline', 'Mysna');
 const p2 = new Pessoa('Ian', 'Lucas');

 console.log(p1.nome);
 console.log(p2.nome);
 p1.metodo();
 p2.metodo();