//creo l'array degli invitati
    
const persone = [
    { 'id': '213',
        'nome': 'Marco della Rovere',
        'grado': '78',
    },
    { 'id': '110',
        'nome': 'Paola Cortellesa',
        'grado': '96',
    },
    { 'id': '250',
        'nome': 'Andrea Mantegna',
        'grado': '48',
    },
    { 'id': '145',
        'nome': 'Gaia Borromini',
        'grado': '74',
    },
    { 'id': '196',
        'nome': 'Luigi Grimaldello',
        'grado': '68',
    },
    { 'id': '102',
        'nome': 'Piero della Francesca',
        'grado': '50',
    },
    { 'id': '120',
        'nome': 'Francesca della Polenta',
        'grado': '84',
    },
];

//SNACK 2.1: creo una funzione dove visualizzo tutti i nomi in maiuscolo

const uppercasePersone = persone.map((elem) => {
    let nome_stud = elem.nome.toUpperCase();

    return nome_stud;
});

console.log(uppercasePersone);

//Ciclo FOR estrarre gli oggetti degli studenti >70
for (let i = 0; i < uppercasePersone.length; i++) {
    console.log(uppercasePersone[i]);
}

//SNACK 2.2: creo una lista di studenti con voti >70

const voti70 = persone.filter((item) => {if(item.grado > '70') return true});

console.log(voti70);

//Ciclo FOR estrarre gli oggetti degli studenti >70
for (let i = 0; i < voti70.length; i++) {
    console.log(voti70[i]);
}

//SNACK 2.3: creo una lista di studenti con voti >70 e quelli che hanno un ID > 120

const id120 = persone.filter((item) => {if(item.grado > '70' && item.id > '120') return true});

console.log(id120);

//Ciclo FOR estrarre gli oggetti degli studenti >70 e con ID > 120
for (let i = 0; i < id120.length; i++) {
    console.log(id120[i]);
}
