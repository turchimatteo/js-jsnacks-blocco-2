/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */
let somma = 0;
let userNumber = [];
while (somma < 50) {
    const numero = parseInt(prompt('Scrivi un numero:'));
    console.log(numero);
    if (!isNan(numero)) {
        userNumber.push(numero);
        console.log(userNumber);
        somma += numero;
        console.log(somma);
    }
}
console.log('Il risultato finale è: ${somma}');
