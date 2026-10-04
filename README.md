# Calculadora Interativa - Miniprojeto Web

Um miniprojeto de **Calculadora Interativa Web** desenvolvido em **HTML5**, **CSS3** e **JavaScript**, projetado com foco em interatividade, design moderno de alto contraste e acessibilidade total para deficientes visuais e leitores de tela.

## Sobre o Projeto

Este projeto foi desenvolvido para atender à situação-problema de transformar uma calculadora simples em uma interface rica, acessível e intuitiva, no estilo de aplicativo de celular. O usuário realiza as operações clicando diretamente nos botões da interface, acompanhando o histórico da expressão no visor e ouvindo feedbacks por sintetizador de voz.

### Destaques de Acessibilidade & Backend

- **Acessibilidade para Leitores de Tela (NVDA, TalkBack, etc.):** uso de tags semânticas, atributos `aria-live="polite"`, rótulos `aria-label` e feedback sonoro via Web Speech API.
- **Visual de Alto Contraste (WCAG AAA):** tema escuro com teclas em cores vibrantes e indicador visível duplo de foco para navegação por teclado (`Tab`).
- **Validações do Backend:** tratamento de divisão por zero, prevenção de múltiplos pontos decimais e controle de limite numérico (overflow).

## Funcionalidades

- [x] **Visor Duplo:** exibe a expressão em andamento no topo e o resultado atual no visor principal.
- [x] **Teclado Completo:** botões numéricos de 0 a 9, ponto decimal e as 4 operações básicas (`+`, `-`, `x`, `÷`).
- [x] **Operação Extra:** suporte ao cálculo de porcentagem (`%`).
- [x] **Botão Limpar (`C`):** reseta as variáveis e limpa o visor.
- [x] **Botão Apagar (`<-`):** remove o último caractere digitado.
- [x] **Botão Igual Expandido (`=`):** ocupa o espaço de dois botões no grid para fácil acionamento.
- [x] **Feedback Sonoro:** voz sintetizada em português ao pressionar teclas e calcular resultados.

## Tecnologias Utilizadas

- **HTML5:** estrutura semântica (`<main>`, `<input>`, `<button>`).
- **CSS3:** layout responsivo com CSS Grid (`grid-template-columns`, `grid-column: span 2`), variáveis de cor e efeitos de foco.
- **JavaScript (Vanilla):** manipulação do DOM (`document.getElementById()`), eventos `onclick`, propriedade `.value` e API de voz (`window.speechSynthesis`).

## Estrutura de Arquivos

```text
/
├── index.html   # Estrutura e marcação da calculadora
├── style.css    # Estilização visual, tema escuro e layout em grid
├── script.js    # Lógica de cálculo, validações e síntese de voz
└── README.md    # Documentação do projeto
```

## Roteiro de Apresentação (Checklist de Requisitos)

Se você precisar apresentar este projeto, aqui estão os 5 pontos exigidos organizados de forma objetiva:

1. **Uso de Eventos:** utilizado o evento `onclick` em todos os botões do HTML para disparar as funções no JavaScript.
2. **Uso de `getElementById()`:** utilizado no JavaScript para localizar os elementos do visor (`#visor` e `#expressao`).
3. **Uso da Propriedade `.value`:** utilizada para ler os números informados pelo usuário e atualizar o resultado impresso no input do visor.
4. **Função Principal (`calcular()`):** processa as operações matemáticas e aplica as validações de segurança (como bloqueio de divisão por zero e resultados infinitos).
5. **Melhoria Visual com CSS:** organização do teclado usando CSS Grid de 4 colunas, paleta de alto contraste e expansão do botão igual (`grid-column: span 2`).

## Licença e Uso

Este projeto foi desenvolvido para fins educacionais e de estudo sobre acessibilidade e desenvolvimento web frontend.
