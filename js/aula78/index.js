//Superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo =saldo;
};

//Métodos
Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente:R$:${this.saldo.toFixed(2)}}`)
        return;
    } 
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo +=valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c:${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}` );
};

const conta1 = new Conta(11, 22, 100);
//conta1.depositar(50);
// conta1.sacar(80);
// conta1.sacar(10);
//console.log(conta1);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente:R$:${this.saldo.toFixed(2)}}`)
        return;
    } 
    this.saldo -= valor;
    this.verSaldo();
    };

    function ContaPoupanca(agencia, conta, saldo) {
        Conta.call(this, agencia, conta, saldo);
    };
    
    ContaPoupanca.prototype = Object.create(Conta.prototype);
    ContaPoupanca.prototype.constructor = ContaPoupanca;

    const contacorrente = new ContaCorrente(11, 22, 0, 100);
    contacorrente.depositar(20);
    contacorrente.sacar(100);
    
    console.log();
    const contapoupanca = new ContaPoupanca (12, 33, 0);
    contacorrente.depositar(90);
    contacorrente.sacar(10);