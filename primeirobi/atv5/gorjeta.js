const valorConta = 100;
const percentualGorjeta = 15;
let gorjeta;
let contaTotal;

gorjeta = (valorConta * (percentualGorjeta / 100));
contaTotal = valorConta + gorjeta;

console.log("Valor da conta: R$", valorConta);
console.log("Gorjeta(15%): R$", gorjeta);
console.log("Total da conta: R$", contaTotal);
