const frases = [
  "A persistência é o caminho do êxito.",
  "Cada pequeno passo aproxima você do seu grande objetivo.",
  "O conhecimento é a única coisa que ninguém pode tirar de você.",
  "Você é capaz de aprender qualquer coisa com dedicação e prática.",
  "Aprender a programar é transformar ideias em realidade.",
];

const elementoFrase = document.getElementById("texto-frase");
const botaoGerar = document.getElementById("btn-gerar");

function falarTexto(texto) {
  window.speechSynthesis.cancel();

  const mensagem = new SpeechSynthesisUtterance(texto);

  mensagem.lang = "pt-BR";

  window.speechSynthesis.speak(mensagem);
}

function sortearEGerarFrase() {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  const fraseSorteada = frases[indiceAleatorio];

  elementoFrase.innerText = fraseSorteada;

  falarTexto(fraseSorteada);
}

botaoGerar.addEventListener("click", sortearEGerarFrase);

const playlist = [
  {
    nome: "Estação 1: Instrumental Relaxante",
    faixa: "Música Suave - Faixa 01",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    nome: "Estação 2: Ritmos & Lo-Fi",
    faixa: "Batida Tranquila - Faixa 02",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    nome: "Estação 3: Clássicos e Piano",
    faixa: "Melodia de Piano - Faixa 03",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

let indiceAtual = 0;

const player = document.getElementById("player-radio");
const audioSource = document.getElementById("audio-source");
const nomeEstacao = document.getElementById("nome-estacao");
const nomeMusica = document.getElementById("nome-musica");

const btnPlayPause = document.getElementById("btn-play-pause");
const btnAnterior = document.getElementById("btn-anterior");
const btnProxima = document.getElementById("btn-proxima");

function carregarEstacao(posicao) {
  const item = playlist[posicao];

  player.src = item.url;
  nomeEstacao.innerText = item.nome;
  nomeMusica.innerText = item.faixa;

  falarTexto(`Estação alterada para: ${item.nome}`);
}

function alternarPlayPause() {
  if (player.paused) {
    player.play();
    btnPlayPause.innerText = "⏸ Pausar";
    falarTexto("Rádio tocando.");
  } else {
    player.pause();
    btnPlayPause.innerText = "▶ Play";
    falarTexto("Rádio pausada.");
  }
}

function proximaMusica() {
  indiceAtual = (indiceAtual + 1) % playlist.length;
  carregarEstacao(indiceAtual);
  player.play();
  btnPlayPause.innerText = "⏸ Pausar";
}

function musicaAnterior() {
  indiceAtual = (indiceAtual - 1 + playlist.length) % playlist.length;
  carregarEstacao(indiceAtual);
  player.play();
  btnPlayPause.innerText = "⏸ Pausar";
}

btnPlayPause.addEventListener("click", alternarPlayPause);
btnProxima.addEventListener("click", proximaMusica);
btnAnterior.addEventListener("click", musicaAnterior);
