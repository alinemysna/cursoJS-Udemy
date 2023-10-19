let varA = 'A'
let varB = 'B'
let varC = 'C'

const varATemp = varA
varA = varB
varB = varC
varC = varATemp

// [varA, varB, varC] = [varB, varC, varA] NÃO precisa criar uma const
console.log(varA, varB, varC)