// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
  // Sua implementação aqui
  const perimetro = 2 * (retangulo.largura + retangulo.altura);
  const area = retangulo.largura * retangulo.altura;
  return { perimetro, area };
}
const retangulo = {
  largura: 5,
  altura: 8,
};
console.log(calcularRetangulo(retangulo));

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
  // Sua implementação aqui
  return pessoa.idade >= 18;
}
{
  nome: "John";
  idade: 25;
  cidade: "New York";
}
console.log(ehAdulto({ idade: 15 }));

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
  // Sua implementação aqui
  const { nome, idade, cidade } = obj;
  const frase = `${nome} ${idade} ${cidade}`;
  return frase;
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
