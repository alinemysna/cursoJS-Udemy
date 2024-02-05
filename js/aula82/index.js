class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}
// const d1 = new DispositivoEletronico('SmartPhone');
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }       
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha você alterou o modo ligar.');
    }

    falaOi() {
        console.log('Oi');
    }
}

const s1 = new SmartPhone('Sansung', 'preto', 'Galaxy S10');

const t1 = new Tablet('iPad', true);
t1.falaOi();
t1.desligar();
console.log(t1);