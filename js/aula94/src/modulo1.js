export const nome ='Aline';
export const sobrenome ='Lima';
export const idade = 35;


export function soma(x, y) {
    return x + y;
}


export default class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}