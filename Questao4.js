function main() {
  const SP_faturamento = 67836.43;
  const RJ_faturamento = 36678.66;
  const MG_faturamento = 29229.88;
  const ES_faturamento = 27165.48;
  const OUTROS_faturamento = 19849.53;

  const faturamentoTotal =
    SP_faturamento +
    RJ_faturamento +
    MG_faturamento +
    ES_faturamento +
    OUTROS_faturamento;

  console.log("Faturamento total: ", faturamentoTotal);

  const porcent_SP = (SP_faturamento / faturamentoTotal) * 100;
  const porcent_RJ = (RJ_faturamento / faturamentoTotal) * 100;
  const porcent_MG = (MG_faturamento / faturamentoTotal) * 100;
  const porcent_ES = (ES_faturamento / faturamentoTotal) * 100;
  const porcent_OU = (OUTROS_faturamento / faturamentoTotal) * 100;

  console.log("Porcentagens:");
  console.log("SP: ", porcent_SP.toFixed(2), "%");
  console.log("RJ: ", porcent_RJ.toFixed(2), "%");
  console.log("MG: ", porcent_MG.toFixed(2), "%");
  console.log("ES: ", porcent_ES.toFixed(2), "%");
  console.log("Outros: ", porcent_OU.toFixed(2), "%");
}

main();
