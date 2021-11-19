/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */

const numbers = [4, 5, 12, 55, 90];

let somma = 0;
for (let i = 0; i < numbers.length; i++) {
    let thisNumber = numbers[i]

    if (i % 2 != 0) {
        console.log(thisNumber, 'indice', i)
        somma += thisNumber
    }
}
console.log(somma)