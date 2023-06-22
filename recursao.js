// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  var soma = 0;

  for (var i = 1; i <= n; i++) {
    soma += i;
  }

  return soma;
}
console.log(somaNumeros(5));

// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  return number % 2 == 0;
}
console.log(ehPar(2));

function fibonacci(n) {
  // Sua implementação aqui
  if (n <= 0) {
    return "O valor de n deve ser maior que zero.";
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  let fibMinus2 = 1;
  let fibMinus1 = 1;
  let fibN = 0;

  for (var i = 3; i <= n; i++) {
    fibN = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
  }

  return fibN;
}
console.log(fibonacci(-5));

module.exports = { somaNumeros, ehPar, fibonacci };
