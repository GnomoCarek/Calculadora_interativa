Calculadora Interativa - Miniprojeto Web
Um miniprojeto de Calculadora Interativa Web desenvolvido em HTML5, CSS3 e JavaScript, projetado com foco em interatividade, design moderno de alto contraste e acessibilidade total para deficientes visuais e leitores de tela.

Sobre o Projeto
Este projeto foi desenvolvido para atender à situação-problema de transformar uma calculadora simples em uma interface rica, acessível e intuitiva, no estilo de aplicativo de celular. O usuário realiza as operações clicando diretamente nos botões da interface, acompanhando o histórico da expressão no visor e ouvindo feedbacks por sintetizador de voz.

Destaques de Acessibilidade & Backend
Acessibilidade para Leitores de Tela (NVDA, TalkBack, etc.): Uso de tags semânticas, atributos aria-live="polite", rótulos aria-label e feedback sonoro via Web Speech API.

Visual de Alto Contraste (WCAG AAA): Tema escuro com teclas em cores vibrantes e indicador visível duplo de foco para navegação por teclado (Tab).

Validações do Backend: Tratamento de divisão por zero, prevenção de múltiplos pontos decimais e controle de limite numérico (overflow).

Funcionalidades
[x] Visor Duplo: Exibe a expressão em andamento no topo e o resultado atual no visor principal.

[x] Teclado Completo: Botões numéricos de 0 a 9, ponto decimal e as 4 operações básicas (+, -, x, ÷).

[x] Operação Extra: Suporte ao cálculo de porcentagem (%).

[x] Botão Limpar (C): Reseta as variáveis e limpa o visor.

[x] Botão Apagar (<-): Remove o último caractere digitado.

[x] Botão Igual Expandido (=): Ocupa o espaço de dois botões no grid para fácil acionamento.

[x] Feedback Sonoro: Voz sintetizada em português ao pressionar teclas e calcular resultados.

Tecnologias Utilizadas
HTML5: Estrutura semântica (<main>, <input>, <button>).

CSS3: Layout responsivo com CSS Grid (grid-template-columns, grid-column: span 2), variáveis de cor e efeitos de foco.

JavaScript (Vanilla): Manipulação do DOM (document.getElementById()), eventos onclick, propriedade .value e API de voz (window.speechSynthesis).

Estrutura de Arquivos
Plaintext
/
├── index.html   # Estrutura e marcação da calculadora
├── style.css    # Estilização visual, tema escuro e layout em grid
├── script.js    # Lógica de cálculo, validações e síntese de voz
└── README.md    # Documentação do projeto
🎤 Roteiro de Apresentação (Checklist de Requisitos)
Se você precisar apresentar este projeto, aqui estão os 5 pontos exigidos organizados de forma objetiva:

Uso de Eventos: Utilizado o evento onclick em todos os botões do HTML para disparar as funções no JavaScript.

Uso de getElementById(): Utilizado no JavaScript para localizar os elementos do visor (#visor e #expressao).

Uso da Propriedade .value: Utilizada para ler os números informados pelo usuário e atualizar o resultado impresso no input do visor.

Função Principal (calcular()): Processa as operações matemáticas e aplica as validações de segurança (como bloqueio de divisão por zero e resultados infinitos).

Melhoria Visual com CSS: Organização do teclado usando CSS Grid de 4 colunas, paleta de alto contraste e expansão do botão igual (grid-column: span 2).

Licença e Uso
Este projeto foi desenvolvido para fins educacionais e de estudo sobre acessibilidade e desenvolvimento web frontend.

O documento README.md foi gerado e está pronto para ser incluído no repositório do seu projeto ou entregue na apresentação! Se precisar de mais algum ajuste na documentação, estou à disposição.