const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(indice atual, delete, elem1, elem2, elem3 );

//pop
//const removidos = nomes.splice(-1, 1);

//shift
//const removidos = nomes.splice(0, 1);

//push
//nomes.splice(nomes.length, 0, 'Luiz');

//unshift
nomes.splice(2, 0 , 'Luiz', 'Otávio');
console.log(nomes);