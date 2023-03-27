/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

/*
// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1- Che cosa fa questo codice? Conta da 0 a 5 escluso e stampa ogni valore di i in console
// 2- Sono presenti errori di sintassi? No
// 3- Sono presenti errori logici? Sì, la condizione dev'essere minore di 5 altrimenti se rimane maggiore il ciclo non parte nemmeno

*/

/*
// ESERCIZIO 2
function addIfEven(num) {
    let sum;
    if (num % 2 === 0) {
        sum = num + 5;
    }
    return sum;
}

console.log(addIfEven(2))

// 1- Che cosa fa questo codice? Inserito un numero verifica se è pari e se lo è viene sommato a 5
// 2- Sono presenti errori di sintassi? Sì la condizione num % 2 === 0 perchè il resto della divisione dev'essere "identico" a 0
// 3- Sono presenti errori logici? Sì, non era stata dichiarata all'interno della funzione una variabile di appoggio (sum), ci sono due return e manca 
// l'invocazione della funzione


*/

/*
// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

console.log(loopToFive());

// 1- Che cosa fa questo codice? Cicla da 0 a 5
// 2- Sono presenti errori di sintassi? Sì, non viene invocata la funzione e all'interno del ciclo ci sono le virgole anzichè ;
// 3- Sono presenti errori logici? No

*/

// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // [2,4,6,8]

// 1- Che cosa fa questo codice? Dato un array di numeri li scorre e verifica se ci sono numeri pari, se si vengono pushati in un nuovo array
// 2- Sono presenti errori di sintassi? Sì, dopo i++ c'è il ; manca l'invocazione della funzione, c'è un ; dopo la condizione dell'if, il return va messo 
// fuori dal ciclo e sia la condizione dell'if che il push dev'essere numbers[i], la condizione del ciclo for dev'essere numbers.length 
// 3- Sono presenti errori logici? Sì, all'interno della condizione if il resto della divisione per 2 dev'essere === 0