// VARIABILI
var km, eta, biglietto;
// VARIABILI CON ISERIMENTO DATI


km = prompt("Inserisci i km da percorrere oggi");
console.log(km);

eta = prompt("Inserisci la tua età");
console.log(eta);


// VARIABILE PREZZO + VARIABILI SCONTI
var prezzo, scontoUnder, scontoOver;

 prezzo = 0.21;
console.log(prezzo);

 scontoUnder = 80 / 100;
console.log(scontoUnder);

 scontoOver = 60 / 100;
console.log(scontoOver);

// CALCOLO PREZZO SENZA SCONTO

 biglietto = (km * prezzo);

// CALCOLO PREZZO CON SCONTO

if (eta < 18) {
  biglietto = (km * prezzo) * scontoUnder ;
}
else if(eta >= 65) {
  biglietto = (km * prezzo) * scontoOver ;
}


// STAMPA PREZZO BIGLIETTO

document.getElementById("biglietto").innerHTML = biglietto.toFixed(2);
