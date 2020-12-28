# Desafio TV APP

Hora de colocar em prática os conceitos que vimos na apresentação! Para esse desafio, a ideia é desenvolver uma versão web do Jogo da Velha (Tic Tac Toe), em React, e que seja totalmente acessível pela TV considerando a navegação pelo teclado, controle remoto ou qualquer outro dispositivo apontador (e.g. Magic Remote).

## Requisitos

Minimamente, a aplicação deve atender aos seguintes requisitos:

- exibir o tabuleiro 3x3 do jogo da velha, onde cada espaço é um elemento interativo da tela que pode ser apontado/clicado com um dispositivo apontador ou selecionado através da navegação com teclas direcionais (cima, baixo, esquerda, direita e "enter/ok").
- implementar a funcionalidade do jogo com as regras padrão:
  - jogadores X e O alternadamente selecionam um dos campos vazios do tabuleiro para colocar seu respectivo ícone.
  - se após uma jogada houverem 3 ícones iguais em sequência horizontal, vertical ou diagonal, o respectivo jogador deve ser declarado vencedor
  - se todos os 9 campos do tabuleiro forem preenchidos e não houver nenhuma sequência de ícones iguais, deve ser declarado empate
- exibir o status atual do jogo:
  - se o jogo não estiver finalizado, exibir qual o próximo jogador (X ou O)
  - se o jogo estiver finalizado, exibir o resultado (empate ou vencedor)
- exibir um botão para reiniciar o jogo a qualquer momento. Deve ser acessível pela navegação de forma intuitiva, por exemplo, se o botão estiver posicionado abaixo do tabuleiro e o foco da navegação estiver em um dos 3 campos inferiores do tabuleiro, pressionar ⬇️ deve focar o botão. Da mesma forma se o foco estiver no botão, pressionar ⬆️ deve voltar o foco para a linha inferior do tabuleiro. 
- estilizar a aplicação levando em conta as considerações de UX vistas na apresentação: contraste, controle de foco, distância da tela, etc.

## Objetivos bônus

Caso conclua todos os requisitos acima com tempo de sobra, tente cumprir os objetivos bônus abaixo:

- ao iniciar um jogo, permitir escolher entre um jogador contra "a máquina" (computador jogando aleatoriamente) ou dois jogadores
- exibir um histórico das jogadas, e permitir voltar para qualquer ponto desse histórico, atualizando corretamente o tabuleiro e o jogador da vez
- "antecipar" os resultados, ou seja: 
  - se não há mais jogadas possíveis para nenhum jogador que levem à vitória, o empate deve ser declarado imediatamente.
  - se um jogador tiver duas possíveis jogadas vitoriosas no próximo turno e o oponente só consegue impedir uma, deve ser declarada a vitória desse jogador.

## Outras observações

Neste repositório temos uma base para o desenvolvimento da aplicação, mas fique à vontade para modificar a estrutura conforme necessário.

Estão inclusos aqui os `KEY CODES` correspondentes à navegação por controle remoto de algumas TVs, que você pode utilizar para tratar os eventos.

Para reforçar os conceitos de desenvolvimento em React e ajudar na implementação da lógica do jogo, sugerimos seguir [este tutorial oficial](https://pt-br.reactjs.org/tutorial/tutorial.html).
