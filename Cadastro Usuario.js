document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;

  // Simula banco de dados local (exemplo)
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push({ nome, email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  document.getElementById("mensagemCadastro").textContent = "Cadastro realizado com sucesso!";
});
