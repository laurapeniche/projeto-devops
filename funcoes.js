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
  return a / b;
}

function ehPar(n) {
  return n % 2 === 0;
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  ehPar
};