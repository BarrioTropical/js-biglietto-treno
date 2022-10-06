
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

// Numero kilometri viaggio in treno
let numeroKilometri = parseInt(prompt('Di quanti kilometri sarà il tuo viaggio?'));
console.log(numeroKilometri);

// Età passeggeto
let eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);

// Calcolo prezzo standard
let prezzoStandard = numeroKilometri * 0.21;
console.log(prezzoStandard);

//Sconto minorenni (20%) 
if (eta < 18)
    let scontoUnder = ((prezzoStandard * 20) / 100);
    let costoUnder = prezzoStandad - scontoUnder;
console.log(costoUnder);

//e over 65 (40%)
if (eta => 65)
    let scontoOver = ((prezzoStandard * 40) / 100);
    let costoOver = prezzoStandad - scontoOver;
console.log(costoOver);