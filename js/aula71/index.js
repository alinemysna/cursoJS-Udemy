// defineProperty
// defineProperties

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    

//     Object.defineProperty(this, 'estoque', {
//     enumerable: true,  //mostra a chave
// value: function() {
//     return estoque;    // valor da chave
// },   
//     writable: false,    //controla se vai fala o valor ->writable
//     configurable: true   // configuravel
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 50000;   
// //delete p1. estoque; //  só apaga se o writable tiver false e configurable true
// console.log(p1.estoque());

Object.defineProperty(this, 'estoque', {
    enumerable: true, 
    value: estoque,  
    writable: true,    
    configurable: true
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome,  
            writable: true,    
            configurable: true
        },
        preco: {
            enumerable: true, 
            value: preco,  
            writable: true,    
            configurable: true
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}