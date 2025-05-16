function loginbutton() {
  const username = document.getElementById("usuarioInput").value.trim();
  const password = document.getElementById("senhaInput").value.trim();

  const usuariosValidos = [
    { usuario: "suporte@abbas.com.br", senha: "31810315" },
    { usuario: "Admin", senha: "131513" },
  ];

  const usuarioEncontrado = usuariosValidos.find(
    (u) => u.usuario === username && u.senha === password
  );

  if (usuarioEncontrado) {
    window.location.href = "pages/driver.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
}
