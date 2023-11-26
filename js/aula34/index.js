//console.log ('Linha 0');
//console.log ('Linha 1');
//console.log ('Linha 2');
//console.log ('Linha 3');
//console.log ('Linha 4');
//console.log ('Linha 5');

// i - index
for (let i = 0; i <= 5; i++) {  //incremento
     console.log(`Linha ${i}`);
}

for (let i = 100; i >= 50; i -= 5) {  //decremento
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {   // para saber se o numero é PAR
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//                0       1       2

const frutas = ['Maçã', 'Pêra', 'Uva', 'melancia', 'Morango', 'abacaxi']
for (let i = 0; i < frutas.length; i++) {
    console.log(`indice ${i}`, frutas[i]);
}