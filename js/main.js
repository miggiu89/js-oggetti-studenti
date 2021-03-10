/*Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.*/

var studente = {
    'nome' : 'eddie',
    'cognome' : 'vedder',
    'età' : 24
}
//stampo in console con ciclo for

//for (var key in studente){
  //  console.log(studente[key]);
//}

/*Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome*/

var studenti = [
    {
        'nome' : 'eddie',
        'cognome' : 'vedder',
        'età' : 24
    },

    {
        'nome' : 'ray',
        'cognome' : 'manzarek',
        'età' : 23
    },

    {
        'nome' : 'serj',
        'cognome' : 'tankian',
        'età' : 20
    }
];

//stampo in console con ciclo for solo il nome e il cognome

/*for (var key in studenti){
    console.log(studenti[key]['nome']);
    console.log(studenti[key]['cognome']);
}

/*Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età.*/

var nuovoStudente = {
    nome : prompt('inserisci il tuo nome'),
    cognome : prompt('inserisci il cognome'),
    età : prompt('inserisci l\'età'),
};

studenti.push(nuovoStudente);
console.log(studenti);
