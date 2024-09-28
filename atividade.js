//Declarando Nome
var nome = "Cayo"
var idade = "18"
console.log (`Meu nome é ${nome} e tenho ${idade} anos!`)
//Declarando Cidade
var nome1 = "Cayo"
var cidade = "Olinda"
console.log (`${nome1} é de ${cidade}.`)

// Calculando as 4 Operações Básicas.
let num1 = 2000;
let num2 = 500;
console.log(`"Soma" = ${num1 + num2}`)

console.log(`"Subtração" = ${num1 - num2}`)

console.log(`"Multiplicação" = ${num1 * num2}`)

console.log(`"Divisão" = ${num1 / num2}`)

// Calculando a altura do triângulo.
let base = 15;
let altura = 5;
let area = (base * altura) / 2;
console.log("A área do triângulo é " + area);

// Declarando as variáveis para as 3 notas do aluno.
let nota1 = 6;
let nota2 = 8;
let nota3 = 10;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`"O resultado da média é" ${media}`)

// Percentual de desconto.
let precoOriginal = 45;
let percentualDesconto = 5;
let valorDesconto = (precoOriginal * percentualDesconto) / 100;
let precoFinal = precoOriginal - valorDesconto;
console.log(`O valor final do produto com ${percentualDesconto}% de desconto é R$ ${precoFinal}`);

// Calculo De Imposto de Renda.
let salariobruto = 5000;
let aliquota = 15;
let descontoAliquota = (salariobruto * aliquota) / 100;
let salariofinal = salariobruto - descontoAliquota;
console.log(`O salário liquido é ${salariofinal} O Imposto de renda é 750R$.`);

// Conversor de Moeda.
let valorEmReal = 1000;
let taxaDeCambioUSD = 0.20;
let valorEmDolar = valorEmReal * taxaDeCambioUSD;
console.log(`O valor de ${valorEmReal} em doláres é: ${valorEmDolar}$`)

// Celsius Para Fahrenheit
let celsius = 30
let valorFahrenheit = (celsius * 9/5) + 32.;
console.log(`O valor de ${celsius}Cº em Fahrenheit é: ${valorFahrenheit}Fº`);

// Calculadora de Imc
let peso = 95;
let altura1 = 1.75;
let IMC = peso / (altura1 * altura1);
let IMCformatado = IMC.toFixed(2);
console.log(`O IMC de quem tem 1,75 e pesa 95Kg é ${IMCformatado}`)
