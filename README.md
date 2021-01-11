# Desafio TV APP

Hora de colocar em prática os conceitos que vimos na apresentação! Para esse desafio, a ideia é desenvolver uma versão web do Jogo da Velha (Tic Tac Toe), em React, e que seja totalmente acessível pela TV considerando a navegação pelo teclado, controle remoto ou qualquer outro dispositivo apontador (e.g. Magic Remote).

## Requisitos

Minimamente, a aplicação deve atender aos seguintes requisitos:

- exibir o tabuleiro 3x3 do jogo da velha, onde cada espaço deve ser um elemento interativo (selecionável) da tela que pode ser selecionado através da navegação com teclas direcionais (cima, baixo, esquerda, direita e "enter/ok");
- implementar a funcionalidade do jogo com as regras padrão:
  - jogadores X e O alternadamente selecionam um dos campos vazios do tabuleiro para colocar seu respectivo ícone;
  - se após uma jogada houverem 3 ícones iguais em sequência horizontal, vertical ou diagonal, o respectivo jogador deve ser declarado vencedor;
  - se todos os 9 campos do tabuleiro forem preenchidos e não houver nenhuma sequência de ícones iguais, deve ser declarado empate.
- exibir o status atual do jogo:
  - se o jogo não estiver finalizado, exibir qual o próximo jogador (X ou O);
  - se o jogo estiver finalizado, exibir o resultado (empate ou vencedor), destacando os espaços que formam a sequência vencedora (por exemplo, mudando a cor ou espessura da borda ou background);
- estilizar a aplicação levando em conta as considerações de UX vistas na apresentação: contraste, controle de foco, distância da tela, etc.

## Objetivos bônus

Caso conclua todos os requisitos acima com tempo de sobra, tente cumprir os objetivos bônus abaixo:

- exibir um botão para reiniciar o jogo a qualquer momento. Deve ser acessível pela navegação de forma intuitiva, por exemplo, se o botão estiver posicionado abaixo do tabuleiro e o foco da navegação estiver em um dos 3 campos inferiores do tabuleiro, pressionar ⬇️ deve focar o botão. Da mesma forma se o foco estiver no botão, pressionar ⬆️ deve voltar o foco para a linha inferior do tabuleiro;
- permitir a navegação e controle de foco apontado/clicado com um dispositivo apontador (mouse/magic remote);
- ao iniciar um jogo, permitir escolher entre um jogador contra "a máquina" (computador jogando aleatoriamente) ou dois jogadores reais (conforme já implementado)
- "antecipar" os resultados, ou seja:
  - se não há mais jogadas possíveis para nenhum jogador que levem à vitória, o empate deve ser declarado imediatamente;
  - se um jogador tiver duas possíveis jogadas vitoriosas no seu próximo turno e o oponente só consegue impedir uma, deve ser declarada a vitória desse jogador. Destaque os espaços das jogadas vitoriosas.
- histórico de jogadas passar a exibir qual foi o jogador daquele turno e qual linha/coluna foi selecionada;

## Outras observações

Neste repositório temos uma implementação inicial do jogo conforme [este tutorial](https://pt-br.reactjs.org/tutorial/tutorial.html), que já contempla os seguintes pontos:

- exibir o tabuleiro do jogo
- implementar a funcionalidade do jogo com as regras padrão

O código foi desenvolvido a partir de um [create-react-app](https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app), portanto fique à vontade para utilizar todos os recursos já oferecidos na sua solução.

Atente-se aos requisitos (nem todos já estão contemplados), foque mais nos aspectos de interface e usabilidade do que na lógica do jogo.

Nossa sugestão é utilizar as props dos componentes para indicar quando um elemento está selecionado ou não. Use `eventListeners` para implementar a lógica de navegação pelo teclado com os eventos `keydown` e pelo mouse/magic remote com os eventos `mouseenter`, `mouseleave` e `click`.

Fique à vontade para modificar a estrutura de arquivos e adicionar pacotes conforme achar necessário (mas leve em consideração as limitações da TV).
