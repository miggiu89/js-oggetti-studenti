/*Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.*/

var studente = {
    'nome' : 'matteo',
    'cognome' : 'migliori',
    'età' : 31
}

for (var key in studente){
    console.log(studente[key]);
}