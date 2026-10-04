// VARIÁVEIS DE ESTADO DA CALCULADORA
let primeiroNumero = null;
let operadorAtual = null;
let limparNoProximoDigito = false;

// FUNÇÃO PARA SINTETIZAR VOZ (ACESSIBILIDADE PARA LEITOR DE TELA)
function falar(texto) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const mensagem = new SpeechSynthesisUtterance(texto);
    mensagem.lang = "pt-BR";
    window.speechSynthesis.speak(mensagem);
  }
}

// ETAPA 3 - ADICIONAR NÚMERO AO VISOR
function adicionarNumero(numero) {
  let visor = document.getElementById("visor");

  // Se acabou de calcular ou escolher operador, substitui o valor
  if (visor.value === "0" || visor.value === "Erro" || limparNoProximoDigito) {
    visor.value = String(numero);
    limparNoProximoDigito = false;
  } else {
    visor.value = visor.value + numero; // Concatena os números
  }

  falar(numero);
}

// ADICIONAR PONTO DECIMAL
function adicionarPonto() {
  let visor = document.getElementById("visor");

  if (limparNoProximoDigito) {
    visor.value = "0.";
    limparNoProximoDigito = false;
    return;
  }

  // Validação: Impede múltiplos pontos no mesmo número
  if (!visor.value.includes(".")) {
    visor.value = visor.value + ".";
    falar("ponto");
  }
}

// ETAPA 4 - REGISTRAR OPERADOR (+, -, x, ÷, %)
function adicionarOperador(operador) {
  let visor = document.getElementById("visor");
  let expressao = document.getElementById("expressao");

  if (visor.value === "Erro") return;

  // Se já existir uma operação pendente, calcula primeiro antes de seguir
  if (primeiroNumero !== null && operadorAtual !== null && !limparNoProximoDigito) {
    calcular();
  }

  primeiroNumero = Number(visor.value);
  operadorAtual = operador;
  limparNoProximoDigito = true;

  // Atualiza o visor de expressão no topo
  expressao.innerText = `${primeiroNumero} ${operadorAtual}`;

  const nomesOperadores = { '+': 'mais', '-': 'menos', 'x': 'vezes', '÷': 'dividir', '%': 'por cento de' };
  falar(nomesOperadores[operador] || operador);
}

// ETAPA 4 - EXECUTAR CÁLCULO E VALIDAÇÕES DO BACKEND
function calcular() {
  let visor = document.getElementById("visor");
  let expressao = document.getElementById("expressao");

  if (primeiroNumero === null || operadorAtual === null) return;

  let segundoNumero = Number(visor.value);
  let resultado = 0;

  // Atualiza a expressão no topo para mostrar o cálculo completo
  expressao.innerText = `${primeiroNumero} ${operadorAtual} ${segundoNumero} =`;

  // --- VALIDAÇÕES E REGRAS DE NEGÓCIO DO BACKEND ---

  // 1. Validação de Divisão por Zero
  if (operadorAtual === "÷" && segundoNumero === 0) {
    visor.value = "Erro";
    falar("Erro: Divisão por zero não é permitida");
    resetarEstado();
    return;
  }

  // 2. Execução da Operação Matemática
  switch (operadorAtual) {
    case "+":
      resultado = primeiroNumero + segundoNumero;
      break;
    case "-":
      resultado = primeiroNumero - segundoNumero;
      break;
    case "x":
      resultado = primeiroNumero * segundoNumero;
      break;
    case "÷":
      resultado = primeiroNumero / segundoNumero;
      break;
    case "%":
      resultado = (primeiroNumero * segundoNumero) / 100;
      break;
  }

  // 3. Validação de Limite Numérico (Overflow / Infinity)
  if (!isFinite(resultado)) {
    visor.value = "Erro";
    falar("Erro: Número muito grande");
    resetarEstado();
    return;
  }

  // Arredonda casas decimais para evitar números como 0.30000000000000004
  resultado = Math.round(resultado * 100000000) / 100000000;

  visor.value = resultado;
  falar(`Resultado: ${resultado}`);

  resetarEstado();
}

// ETAPA 5 - LIMPAR (BOTÃO C)
function limpar() {
  document.getElementById("visor").value = "0";
  document.getElementById("expressao").innerText = "";
  resetarEstado();
  falar("Visor limpo");
}

// DESAFIO OPCIONAL - APAGAR ÚLTIMO NÚMERO (<-)
function apagarUltimo() {
  let visor = document.getElementById("visor");

  if (visor.value === "Erro" || limparNoProximoDigito) {
    limpar();
    return;
  }

  if (visor.value.length > 1) {
    visor.value = visor.value.slice(0, -1);
  } else {
    visor.value = "0";
  }

  falar("Apagado");
}

// RESET AUXILIAR DAS VARIÁVEIS
function resetarEstado() {
  primeiroNumero = null;
  operadorAtual = null;
  limparNoProximoDigito = true;
}