// algumas funções que nos ajudam a identificar o quadrado que está focado no board

// transforma o índice sequencial do quadrado em um par de coordenadas
export const getSquareCoordsFromIndex = (i) => [Math.floor(i / 3), i % 3];

// inverso da função acima, transforma par de coords. em um índice
export const getSquareIndexFromCoords = ([x, y]) => 3 * x + y;

// obtém o índice através do id do quadrado
export const getSquareIndexFromId = (id) => id.replace("square-", "");

// forma o id do quadrado usando o índice
export const getSquareIdFromIndex = (i) => `square-${i}`;
