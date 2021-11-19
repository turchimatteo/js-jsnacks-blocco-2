const userNumber = parseInt(prompt('Scrivi un numero:'));
let numberAlert
if(userNumber % 2 === 0) {
    numberAlert = userNumber;
}else {
    numberAlert = userNumber + 1;
}
console.log(numberAlert);