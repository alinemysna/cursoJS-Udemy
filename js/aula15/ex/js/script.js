const numero = Number( prompt('Digite um número:'))
const numeroTitulo = document.getElementById('numero-titulo')
const txt = document.getElementById('texto')

numeroTitulo.innerHTML = numero
txt.innerHTML += `Raíz quadrada é: <strong>${numero**(1/2)}</strong> <br/>`
txt.innerHTML += `<strong>${ numero }</strong> é inteiro:<strong>${Number.isInteger(numero)}</strong><br/>`
txt.innerHTML += `É NaN: <strong> ${Number.isNaN(numero)} </strong> <br/>`
txt.innerHTML += `Arredondando para baixo:<strong>${Math.floor(numero)}</strong> <br/>`
txt.innerHTML += `Arredondamento para cima:<strong>${Math.ceil(numero)}</strong> <br/>`
txt.innerHTML += `Com duas casas decimais:<strong>${numero.toFixed(2)}</strong>`


       