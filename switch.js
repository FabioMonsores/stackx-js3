// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
  // Sua implementação aqui
  switch (number) {
    case 1:
      return "Domingo";
      break;
    case 2:
      return "Segunda-feira";
      break;
    case 3:
      return "Terça-feira";
      break;
    case 4:
      return "Quarta-feira";
      break;
    case 5:
      return "Quinta-feira";
      break;
    case 6:
      return "Sexta-feira";
      break;
    case 7:
      return "Sábado";
      break;
    default:
      return "Número inválido";
      break;
  }
}
console.log(retornaDiaSemana(9));

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
  // Sua implementação aqui
  switch (code) {
    case "A":
      return 10.99;
      break;
    case "B":
      return 5.99;
      break;
    default:
      return "Código inválido";
      break;
  }
}
console.log(retornaPrecoProduto("A"));

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
  // Sua implementação aqui
  switch (type) {
    case "Eletrônicos":
      return "Tecnologia";
      break;
  }
}
console.log(retornaCategoriaProduto("Eletrônicos"));

module.exports = {
  retornaDiaSemana,
  retornaPrecoProduto,
  retornaCategoriaProduto,
};
