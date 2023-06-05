//creo un array di oggetti BICI

const bici = [{
    nome: 'Bianchi',
    peso: 50
},
{
    nome: 'Rossi',
    peso: 80
},
{
    nome: 'Pantani',
    peso: 40
},
{
    nome: 'Graziella',
    peso: 70
},
{
    nome: 'Cipollini',
    peso: 100
},
{
    nome: 'Verdi',
    peso: 90
}];

console.log(bici);

//Creo un ciclo forEach che controlli quale bici ha il peso minore

//Dichiaro una variabile e assegno il primo oggetto dell'array bici
let peso_minore = bici[0];

//Utilizzo il destructuring per estrarre le proprieta' "nome" e "peso" dall'oggetto
bici.forEach(({nome, peso}) => {
    //Confronto se il peso attuale dell'oggetto e' minore di quello precendente e eventualmente aggiorno la variabile con le nuove proprieta'
    if (peso < peso_minore.peso) {
        peso_minore = {nome, peso};
    } 

});
//Visualizzo i dati della bici piu' leggera in console log
console.log("La bicicletta piu' leggera e': " + `${peso_minore.peso}` + " KG, il cui nome e' " + `${peso_minore.nome}`);