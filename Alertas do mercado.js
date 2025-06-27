function verificarAlerta() {
  const limite = parseFloat(document.getElementById("limiteDolar").value);
  fetch("https://api.exchangerate.host/latest?base=USD&symbols=BRL")
    .then(res => res.json())
    .then(data => {
      const dolar = data.rates.BRL;
      if (dolar > limite) {
        document.getElementById("mensagemAlerta").textContent = `⚠️ Alerta: dólar atual (R$${dolar.toFixed(2)}) ultrapassou seu limite!`;
      } else {
        document.getElementById("mensagemAlerta").textContent = `✅ Tudo certo! Dólar atual R$${dolar.toFixed(2)}.`;
      }
    });
}
