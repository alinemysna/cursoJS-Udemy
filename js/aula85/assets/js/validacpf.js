// 705.484.450-52 070.987.720-03
class ValideCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable:true,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g, '')
        });

    }

    éSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    
    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValideCpf.gerDigito(cpfSemDigito);
        const digito2 = ValideCpf.gerDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    static gerDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length +1;

        for(let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }



    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

// let validacpf = new ValideCpf('070.987.720-03');
// //validacpf = new ValideCpf('999.999.999.99')
// if(validacpf.valida()) {
//     console.log('CPF Válido')
// }
// else {
//     console.log('CPF Inválido');
// }