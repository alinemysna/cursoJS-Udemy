function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo);
    });
}

async function executa() {
    try {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi(2, rand());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();

//3 TIPOS DE PROMISES
//PENDING -> PENDENTE
//FULLFILLD -> RESOLVIDA
//REJECT -> REJEITADA


// esperaAi('Fase 1', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi(33333, rand());
// })
// .then(fase => {
//     console.log(fase);
// })
// .catch(e => console.log('ERRO', e))