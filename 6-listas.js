console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // Adiciona item na lista
console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // primeiro valor define a partir de qual item da lista qro excluir, segundo valor defique qtos itens serão excluídos
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

//Documentação Arrays JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array


