//const tresHOras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHOras - umDia);
//const data = new Date(2023, 10, 13);//ano, mes, dia, hora, minutos, segundos, ms
/*const data = new Date('2023-11-13 17:50:30');
console.log('Dia', data.getDate());
console.log('mes', data.getMonth()+ 1); //MES COMEÇA DO 0
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0-DOMINGO, 6 - SABADO
//console.log(Date.now())

console.log(data.toString());
*/
function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
   const dia = zeroAesquerda(data.getDate());
   const mes = zeroAesquerda(data.getMonth()+ 1);
   const ano = zeroAesquerda(data.getFullYear());
   const hora = zeroAesquerda(data.getHours());
   const min = zeroAesquerda(data.getMinutes());
   const seg = zeroAesquerda(data.getSeconds());
   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
