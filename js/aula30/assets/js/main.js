const texto = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana) {
    const diasSemana = ['Domingo', 'Segunda', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Fiera', 'Sexta-Feira', 'Sábado'];
    return diasSemana[diaSemana];
}


//     let diaSemanaTexto;

//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//     case 1:
//         diaSemanaTexto = 'Segunda-Feira';
//         return diaSemanaTexto;
//     case 2:
//         diaSemanaTexto = 'Terça-Feira';
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = 'Quarta-Feira';
//         return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = 'Quinta-Feira';
//         return diaSemanaTexto;
//     case 5:
//         diaSemanaTexto = 'Sexta-Feira';
//         return diaSemanaTexto;
//     case 6:
//         diaSemanaTexto = 'Sabado';
//         return diaSemanaTexto;
//     default:
//         diaSemanaTexto = '';
//         return diaSemanaTexto;
//     }

// }

function getNomeMes (numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio', 'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];
} 



//    let nomeMes;
//     switch (numeroMes) {
//     case 0:
//         nomeMes = 'Janeiro';
//         return nomeMes;
//     case 1:
//         nomeMes = 'Fevereiro';
//         return nomeMes;
//     case 2:
//         nomeMes = 'Março';
//         return nomeMes;
//     case 3:
//         nomeMes = 'Abril';
//         return dnomeMes;
//     case 4:
//         nomeMes = 'Maio';
//         return nomeMes;
//     case 5:
//         nomeMes = 'JUnho';
//         return dnomeMes;
//     case 6:
//         nomeMes = 'Julho';
//         return nomeMes;
//     case 7:
//         nomeMes = 'Agosto';
//         return nomeMes;
//     case 8:
//         nomeMes = 'Setembro';
//         return nomeMes;
//     case 9:
//         nomeMes = 'Outubro';
//         return nomeMes;
//     case 10:
//         nomeMes = 'Novembro';
//         return nomeMes;
//     case 11:
//         nomeMes = 'Dezembro';
//         return nomeMes;
//     default:
//         nomeMes = '';
//         return nomeMes;
//     }
// }    

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
  `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
  ` de ${data.getFullYear()} ` +
  `${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}`
  );
}

texto.innerHTML = criaData(data);

// const texto = document.querySelector('.container h1');
// const data = new Date();

// texto.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'}); //timeStyle: 'short'


