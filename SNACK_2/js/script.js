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

//creo una funzione dove visualizzo tutti i nomi in maiuscolo

const uppercasePersone = persone.map((elem) => {
    let nome_stud = elem.nome.toUpperCase();

    return nome_stud;
});

console.log(uppercasePersone);


