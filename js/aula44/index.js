function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError ('x e y precisam ser números.');
    }
    return x + y;
}
try {
  console.log(soma(1, 2));
  console.log(soma('1', 2));  
} catch(error) {
    // console.log(error); não é interesante mostrar o erro para usuário
    console.log('Alguma coisa mais amigável para o usuário.')
}
