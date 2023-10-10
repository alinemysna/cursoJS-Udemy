const nome = 'Aline'
const sobrenome = 'Lima'
const idade = '35'
const peso = '70'
const alturaEmM = 1.60
let imc
let anoNascimento


anoNascimento = 2023 - idade
indiceMassaCorporal = peso / (alturaEmM * alturaEmM) 
 
 console.log(indiceMassaCorporal)
 console.log(anoNascimento)
 
 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`)
 console.log(`Tem  ${alturaEmM}  de altura e seu imc e de ${indiceMassaCorporal}`)
 console.log(`${nome} nasceu em ${anoNascimento}.`)