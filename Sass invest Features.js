<!-- Adicionando novas funcionalidades ao projeto SaaS -->

<!-- HISTÓRICO DE SIMULAÇÕES -->
<h3>Histórico de Simulações</h3>
<ul id="historicoSimulacoes"></ul>

<script>
let historico = JSON.parse(localStorage.getItem("historico")) || [];

function simularInvestimento() {
  const valor = parseFloat(document.getElementById("valorInicial").value);
  const taxa = parseFloat(document.getElementById("taxaAnual").value) / 100;
  const anos = parseFloat(document.getElementById("anos").value);

  const montante = valor * Math.pow(1 + taxa, anos);
  const resultado = `Montante após ${anos} ano(s): R$ ${montante.toFixed(2)}`;
  document.getElementById("resultadoSimulacao").textContent = resultado;

  // Salvando no histórico
  historico.push({ valor, taxa: taxa * 100, anos, montante });
  localStorage.setItem("historico", JSON.stringify(historico));
  atualizarHistorico();
}

function atualizarHistorico() {
  const lista = document.getElementById("historicoSimulacoes");
  lista.innerHTML = "";
  historico.forEach((s, i) => {
    const item = document.createElement("li");
    item.textContent = `R$${s.valor} por ${s.anos} anos @ ${s.taxa}% = R$${s.montante.toFixed(2)}`;
    lista.appendChild(item);
  });
}

atualizarHistorico();
</script>

<!-- COMPARADOR DE INVESTIMENTOS -->
<h3>Comparador de Investimentos</h3>
<label>Renda Fixa (%) ao ano: <input id="rendaFixa" type="number" /></label><br />
<label>Renda Variável (%) ao ano: <input id="rendaVariavel" type="number" /></label><br />
<label>Valor Investido (R$): <input id="valorComparador" type="number" /></label><br />
<label>Tempo (anos): <input id="tempoComparador" type="number" /></label><br />
<button onclick="compararInvestimentos()">Comparar</button>
<p id="resultadoComparador"></p>

<script>
function compararInvestimentos() {
  const fixa = parseFloat(document.getElementById("rendaFixa").value) / 100;
  const variavel = parseFloat(document.getElementById("rendaVariavel").value) / 100;
  const valor = parseFloat(document.getElementById("valorComparador").value);
  const tempo = parseFloat(document.getElementById("tempoComparador").value);

  const montanteFixa = valor * Math.pow(1 + fixa, tempo);
  const montanteVariavel = valor * Math.pow(1 + variavel, tempo);

  document.getElementById("resultadoComparador").innerHTML =
    `Renda Fixa: R$${montanteFixa.toFixed(2)}<br>Renda Variável: R$${montanteVariavel.toFixed(2)}`;
}
</script>

<!-- EXPORTAR EM PDF -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<button onclick="exportarPDF()">Exportar Simulações em PDF</button>

<script>
function exportarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Histórico de Simulações", 10, 10);
  historico.forEach((s, i) => {
    doc.text(
      `Simulacao ${i + 1}: R$${s.valor} por ${s.anos} anos @ ${s.taxa}% = R$${s.montante.toFixed(2)}`,
      10,
      20 + i * 10
    );
  });
  doc.save("historico_simulacoes.pdf");
}
</script>

<!-- PAINEL ADMINISTRATIVO (simples) -->
<h3>Painel Admin</h3>
<p>Total de Simulações Realizadas: <span id="totalSimulacoes"></span></p>
<p>Total de Usuários Cadastrados: <span id="totalUsuarios"></span></p>

<script>
function atualizarPainelAdmin() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  document.getElementById("totalUsuarios").textContent = usuarios.length;
  document.getElementById("totalSimulacoes").textContent = historico.length;
}

atualizarPainelAdmin();
</script>
