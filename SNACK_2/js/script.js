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

//SNACK 2.2: creo una lista di studenti con voti >70

const voti70 = persone.filter((item) => {if(item.grado > '70') return true});

console.log(voti70);

//SNACK 2.3: creo una lista di studenti con voti >70 e quelli che hanno un ID > 120

const id120 = persone.filter((item) => {if(item.grado > '70' && item.id > '120') return true});

console.log(id120);