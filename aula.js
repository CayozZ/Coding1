var prompt = require('prompt-sync')();

let atendimento = prompt("Qual o seu nome?")

console.log(`Olá,${atendimento}! Bem vindo ao Mercadinho Feirão do Povo !`)

let atendimento2 = prompt (`No momento o estoque está à caminho, temos só salgadinho. O Que deseja?`)

console.log (`Bom, os únicos${atendimento2} que tem são Cheetos e Fofura.`)

let atendimento3 = prompt("Qual deseja?")

console.log (`Boa escolha, entre os dois, o melhor realmente é o ${atendimento3}.`)

let atendimento4 = prompt ("Qual a Forma de Pagamento?")

console.log (`Ok, vou te passar a maquineta com o método de pagamento${atendimento4} na tela, obrigado !!`)
