//creo l'array degli invitati

const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//inserisco nella costante segnaposto creando un nuovo array dove per ogni invitato metto il tavolo, il nome e il numero del posto
const segnaposto = invitati.map((persona, index) => {
    
    let persone = 
    { 'tavolo': 'Tavolo VIP',
        'nome': persona,
        'value': index + 1,
    }
    return persone;
});

//creo un FOR per ciclare l'array generale e visualizzarlo in console.

for (let i = 0; i < segnaposto.length; i++){
    let assegnazione = segnaposto[i];
    console.log(assegnazione.tavolo);
    console.log(assegnazione.nome);
    console.log(assegnazione.value);
}

