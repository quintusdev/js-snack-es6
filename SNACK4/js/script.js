//creo un array di oggetti delle squadre

const squadre = [{
    nome: 'Milan',
    punti: 0,
    falli: 0
},
{
    nome: 'Juventus',
    punti: 0,
    falli: 0
},
{
    nome: 'Inter',
    punti: 0,
    falli: 0
},
{
    nome: 'Napoli',
    punti: 0,
    falli: 0
},
{
    nome: 'Roma',
    punti: 0,
    falli: 0
},
{
    nome: 'Sassuolo',
    punti: 0,
    falli: 0
},
{
    nome: 'Verona',
    punti: 0,
    falli: 0
}];

//Creo la funzione per generare un numero random compreso tra 1 e 90

function puntiRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creo un ciclo forEach per inserire i numeri random nelle proprieta' PUNTI e FALLI

squadre.forEach(squadra => {
    squadra.punti = puntiRandom(1, 90);
    squadra.falli = puntiRandom(1, 90);
});

console.log(squadre);

// Creo un nuovo array con il destructuring con solo gli elementi NOME e FALLI
const newSquadre = squadre.map(({nome, falli}) => ({nome, falli}));

// Visualizzo il tutto in console
console.log(newSquadre);





