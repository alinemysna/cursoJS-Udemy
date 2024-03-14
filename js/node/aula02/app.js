// const Cachorro = require('./B/z/mod2');

// const dog = new Cachorro('bob');
// dog.latir();


//console.log(__filename);
// nome do arquivo atual
//-> /home/aline/git/cursoJS-Udemy/js/node/aula02/app.js

//console.log(__dirname);
// nome da pasta atual
//-> /home/aline/git/cursoJS-Udemy/js/node/aula02

// const path = require('path');
// console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))

// -> /home/aline/git/cursoJS-Udemy/js/arquivos/imagens

const Cachorro = require('./B/z/mod2.js')

const dog = new Cachorro('bob');
dog.latir();