const pessoas = [
    {id: 4, nome: 'Aline'},
    {id: 3, nome: 'Ian'},
    {id: 2, nome: 'Lucas'},
    {id: 1, nome: 'Maria'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set ( id , { ...pessoa });
}

for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas);
}

novasPessoas.delete(1);
console.log(novasPessoas);

// for (const [identifier, {id, nome}] of novasPessoas) {
//     console.log(identifier, id, nome);
// }

// console.log(novasPessoas);
// console.log(novasPessoas.get(2));