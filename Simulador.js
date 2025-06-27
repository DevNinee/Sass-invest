function simularInvestimento() {
  const valor = parseFloat(document.getElementById("valorInicial").value);
  const taxa = parseFloat(document.getElementById("taxaAnual").value) / 100;
  const anos = parseFloat(document.getElementById("anos").value);

  const montante = valor * Math.pow(1 + taxa, anos);
  document.getElementById("resultadoSimulacao").textContent = `Montante após ${anos} ano(s): R$ ${montante.toFixed(2)}`;
}
