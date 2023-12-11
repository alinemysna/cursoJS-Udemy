function relogio() {

function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
       hour12: false,
       timeZone: 'UTC'
    }); 
}
console.log(criarHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000 );
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('zerar')) {
       clearInterval(timer);
       relogio.innerHTML = '00:00:00';
       relogio.classList.remove('pausado');
       relogio.classList.remove('play');
       segundos = 0;
    }
    if(el.classList.contains('iniciar')) {
       relogio.classList.remove('pausado');
       relogio.classList.add('play');
       clearInterval(timer);
       iniciaRelogio();
    }
    if(el.classList.contains('pausar')) {
       clearInterval(timer);
       relogio.classList.add('pausado');
       relogio.classList.remove('play');
    }
});
}
relogio();
