function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero");
  }
  return a / b;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  ehPar
};