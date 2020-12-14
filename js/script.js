// VARIABILI CON ISERIMENTO DATI


var km = prompt("Inserisci i km da percorrere oggi?");
console.log(km);

var eta = prompt("Inserisci la tua età");
console.log(eta);


// VARIABILE PREZZO + VARIABILI SCONTI

var prezzo = 0.21;
console.log(prezzo);

var scontoUnder = 80 / 100;
console.log(scontoUnder);

var scontoOver = 60 / 100;
console.log(scontoOver);


// CALCOLO PREZZO CON SCONTO

if (eta < 18) {
  var biglietto = (km * prezzo) * scontoUnder;
}
else if(eta > 64) {
  var biglietto = (km * prezzo) * scontoOver;
}

// CALCOLO PREZZO SENZA SCONTO

if (eta > 17 && eta < 65 ){
  var biglietto = (km * prezzo);
}

// STAMPA PREZZO BIGLIETTO

document.getElementById("biglietto").innerHTML = biglietto;
