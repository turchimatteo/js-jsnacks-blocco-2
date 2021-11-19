/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */

const names = [ 'Matteo', 'Olga', 'Mario' ];
const surname = [ 'Turchi', 'Demina', 'Rossi' ];
const random = [];

for (let i = 0; i < names.length; i++) {
    const randomName = names[Math.floor(Math.random() * ( names.length - 1 + 1)) + 0];
    const randomSurname = surname[Math.floor(Math.random() * (surname.length - 1 + 1)) + 0];
    const finalNameSurname = randomName + '' + randomSurname;
    random.push(finalNameSurname);
}
console.log(random);


//! formula corretta : [Math.floor(Math.random() * (max-min + 1)) + min]