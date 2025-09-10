let num1 = parseInt(prompt("Insira o primeiro valor inteiro: "));
let num2 = parseInt(prompt("Insira o segundo valor inteiro: "));
let num3 = parseInt(prompt("Insira o terceiro valor inteiro: "));

// Coloca os números em um array
let numeros = [num1, num2, num3];

// Ordena em ordem decrescente
numeros.sort((a, b) => a - b);5


console.log("Números em ordem decrescente:", numeros);
