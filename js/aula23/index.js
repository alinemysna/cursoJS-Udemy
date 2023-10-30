/*
&& -> False && True -> false "o valor mesmo"
|| -> True && False -> vai retornar "o valor verdadeiro"
FALSY value
0
'', "" ` ` - vazios
null - undefined
NaN


function falaOi (){
    return'oi';
}
let vaiExecutar = 'Aline';

console.log(vaiExecutar && falaOi());

 //console.log(0 || false || null || 'Aline Mysna' || true)vairetornar o valor verdadeiro

 const corUsuario = 'Azul';
 const corPadrao = corUsuario || 'verde';

 console.log(corPadrao);

const a = 0;
const b = null;
const c = 'Aline'; // retorna a string
const d = false;
const e = NaN; // se todas forem fasas retorna o ultimo valor

console.log(a || b || c || d || e);
*/
