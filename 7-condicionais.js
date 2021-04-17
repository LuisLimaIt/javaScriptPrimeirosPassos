console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeDoComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);


// if (idadeDoComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item

// } else {
//     console.log("Para realizar essa compra é necessário a presença de um responsável maior de 18 anos");
// }

if (idadeDoComprador >= 18 || estaAcompanhada==true) {
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Para realizar essa compra é necessário a presença de um responsável maior de 18 anos");
}


console.log("Embarque: \n\n");
if(idadeDoComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!");
} else {
    console.log("Você não pode embarcar!!");
}



console.log(listaDeDestinos);

// console.log(idadeDoComprador > 18);
// console.log(idadeDoComprador < 18);
// console.log(idadeDoComprador <= 18);
// console.log(idadeDoComprador >= 18);
// console.log(idadeDoComprador == 18);

//Ctrl + K + C (transforma várias linhas em comentários)
//Ctrl + K + U (deixa de ser comentário e se torna código)
//Alt = Shift + F (Corrige a identação)



