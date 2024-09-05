const fs = require("fs");

function main() {
  const dados = JSON.parse(fs.readFileSync("faturamento.json", "utf-8"));

  const faturamentoDiario = dados.faturamentoDiario;

  let menorFaturamento = 0;
  let maiorFaturamento = 0;
  let somaFaturamento = 0;
  let mediaFaturamento = 0;
  let diasAcimaDaMedia = 0;
  let dias = 0;

  // Verifica o menor valor do faturamento
  for (let i = 0; i < faturamentoDiario.length; i++) {
    let x = 0;
    if (faturamentoDiario[i] < faturamentoDiario[x]) {
      menorFaturamento = faturamentoDiario[i];
      x++;
    }
  }

  // Verifica o maior valor do faturamento
  for (let i = 0; i < faturamentoDiario.length; i++) {
    let x = 0;
    if (faturamentoDiario[i] > faturamentoDiario[x]) {
      maiorFaturamento = faturamentoDiario[i];
      x++;
    }
  }

  // Calcula todas posições do Json que são maiores que 0
  for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > 0) {
      somaFaturamento = somaFaturamento + faturamentoDiario[i];
      dias++;
    }
  }

  //Verifica o valor da média mensal
  mediaFaturamento = somaFaturamento / dias;

  //Cálcula número de dias no mês em que o valor de faturamento diário foi superior à média mensal
  for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaFaturamento) {
      diasAcimaDaMedia++;
    }
  }

  console.log("Menor valor de faturamento:", menorFaturamento);
  console.log("Maior valor de faturamento:", maiorFaturamento);
  console.log("Dias com faturamento acima de 0:", mediaFaturamento);
  console.log("Número de dias acima da média: ", diasAcimaDaMedia);
}

main();
