console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeDoComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);


const podeComprar = idadeDoComprador >= 18 || estaAcompanhada==true;

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length){
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    } 
    //contador+=1
    contador++;
}

console.log("Destino disponível para compra?", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
} else{
    console.log("Desculpe, houve um erro!");
}

// for (let i = 0; i < listaDeDestinos.length; i++){
//     if (listaDeDestinos[i] == destino){
//         destinoExiste = true;
//         console.log("Achei!");
//         break;
//     } 
// }
