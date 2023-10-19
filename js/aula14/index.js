let num1 = 0.7
let num2 = 0.1

//num1 += num2 > num1 = num1 + num2

//console.log(num1.toString() + num2) não altera o valor de num1
//num1 = num1.toString() altera o valor de num1
//console.log(num1.toString(2)) representação binária
//console.log(num1.toFixed(2))  quantas casas decimais eu quero que apareça depois do ponto(arredondado)
//console.log(Number.isInteger(num1)) ele vai retornar se o número é inteiro true/ false
//let temp = num1 * '5' - variavel temporária
//console.log(Number.isNaN(temp)) Estar perguntando se é uma NaN? TRUE/FALSE
/*num1 += num2 //0.8
num1 += num2 //0.9
num1 += num2 //1.0 true
num1 += num2 //1.1
num1 += num2 //1.2
num1 += num2 //1.3
num1 += num2 //1.4
num1 += num2 //1.5
num1 += num2 //1.6
num1 += num2 //1.7
num1 += num2 //1.8
num1 += num2 //1.9
num1 += num2 //2.0 true

num1 = parseFloat(num1.toFixed(2)) //- < vai deixar o número inteiro parseFloat ou Number 
console.log(num1)
console.log(Number.isInteger(num1)) //para saber se ele é um número inteiro true/false
*/
//para resolver impresiçao nos resultados
num1 = ((num1 * 100) + (num2 *100) ) /100  // 0.8 multiplica por 100 e tira a casa decimal
num1 = ((num1 * 100) + (num2 *100) ) /100  //0.9 false deividir por100
num1 = ((num1 * 100) + (num2 *100) ) /100  //11.0 true

console.log(num1)
console.log(Number.isInteger(num1))