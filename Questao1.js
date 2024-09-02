function main() {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  for (x = 1; K < INDICE; x++) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  console.log("o valor da variável SOMA é =", SOMA);
}

main();
