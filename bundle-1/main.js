/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

/*
// ESERCIZIO 1
function checkAge(myAge) {
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
}
console.log(checkAge(17));
// 1- Inserita una età verifica se è minore o maggiore di 18
// 2- Eliminata la costante myAge all'interno della funzione in quanto myAge dev'essere il parametro della funzione stessa
//    Modificata variabile message da const a let
// 3- Inserito return message nella funzione
*/

/*
// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
// 1- Stampa il numero di colori totale che sono presenti nell'array
// 2- Sì è stato scritto .lenght al posto di .length
// 3- No

*/

/*
// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1- Dato un numero di ingresso viene sommato a 12
// 2- No
// 3- Sì, bisogna passare il numero inserito da stringa a numero con parseInt

*/



// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1- Inserito un indirizzo mail verifica se è presente nell'array, se è presente viene visualizzato il messaggio accesso consentito altrimenti
//      accesso negato
// 2- Sì, i valori booleani erano stati definiti come stringhe
// 3- No