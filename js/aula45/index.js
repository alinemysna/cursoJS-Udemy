// try {
//    //console.log(a) //error
//    console.log('Abri um arquivo');
//    console.log('Manipulei o arquivo e gerou erro');
//    console.log('Fechei o arquivo');

//     // É EXECUTADA QUANDO NÃO Á ERROS
// try {
//     console.log(b);
// } catch(e) {
//     console.log('Deu erro');
// } finally {
//     console.log('Tambem sou finally');
// }


// } catch (e) {
//    console.log('Tratando o erro');

//     //É EXECUTADA QUANDO HÁ ERROS
// } finally {
//    console.log('Finally: Eu sempre sou executado');

//     //É EXECUTADA SEMPRE
// }

function retornaHora (data) {
    if(data && !(data instanceof Date)) {
      throw new TypeError('Esperando instancia de Date');
    }
    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    })

}

try {
   const data = new Date('01-01-1970 12:22:22');
   const hora = retornaHora();
   console.log(hora);
}catch(e) {
    //trayar erro
   // console.log(e) // para exibir o erro
} finally {
    console.log('Tenha um bom dia.');
}