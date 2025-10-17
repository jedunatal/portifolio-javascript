function calcularIdade() {
  const anoNascimento = document.getElementById("anoNascimento").value;
  const resultado = document.getElementById("resultado");
  const anoAtual = new Date().getFullYear();

  if (anoNascimento === "" || anoNascimento <= 0) {
    resultado.textContent = "Por favor, informe um ano válido!";
    resultado.style.color = "red";
  } else {
    const idade = anoAtual - anoNascimento;
    resultado.textContent = `Você tem ${idade} anos de idade.`;
    resultado.style.color = "green";
  }
}
