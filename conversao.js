// Converte uma string para um número inteiro
function convertToInt(string) {
  // Sua implementação aqui
  return parseInt(string);
}
console.log(convertToInt("42"));
//console.log(typeof convertToInt());

// Converte um número inteiro para uma string
function convertToString(number) {
  // Sua implementação aqui
  return String(number);
}
console.log(convertToString(-10));

// Converte um valor para um booleano
function convertToBoolean(value) {
  // Sua implementação aqui
  return Boolean(value);
}
console.log(convertToBoolean(0));

module.exports = { convertToInt, convertToString, convertToBoolean };
