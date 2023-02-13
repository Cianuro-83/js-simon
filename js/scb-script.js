console.log("Ciao Cianuro... oggi si gioca a SIMON SAYS");

//********************
// GENERO 5 NUMERI CASUALI
//******************** */
let numeri = [];
while (numeri.length < 5) {
  let num = randomNumber(1, 100);
  if (!numeri.includes(num)) {
    numeri.push(num);
    // console.log(numeri);
  }
}
console.log(numeri);
alert("CERCA DI MEMORIZZARE QUESTI NUMERI " + numeri);
//********************
// SETTO TIMER 30 SECONDI
//******************** */
setTimeout(function () {
  let userNumber = inserisciNumeri();
  console.log(userNumber);
  //********************
  // CONFRONTO I NUMERI
  //******************** */
  let ricordati = numeriRicordati(userNumber);
  console.log(ricordati);
  //********************
  // DESCRIZIONE
  //******************** */

  //FINE FUNZIONE TIME OUT
}, 2000);
function numeriRicordati(userNumber) {
  let numeriRicordati = [];
  for (let i = 0; i < numeri.length; i++) {
    for (let u = 0; u < userNumber.length; u++) {
      if (numeri[i] === userNumber[u]) {
        numeriRicordati.push(numeri[i]);
      }
    }
  }
  //   console.log(numeriRicordati);
  return numeriRicordati;
}

// ---------------------------------------------------------------------------
// FUNZIONI
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
// INIZIALIZZO LA FUNZIONE PER LA CREAZIONE DEI NUMERI CASUALI
//---------------------------------------------------------------------------
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//---------------------------------------------------------------------------
// INIZIALIZZO LA FUNZIONE PER RICHIEDERE I NUMERI ALL'UTENTE
//---------------------------------------------------------------------------
function inserisciNumeri() {
  let userNumber = [];
  for (let i = 0; i < 5; i++) {
    let remember = parseInt(
      prompt("INSERISCI UNO ALLA VOLTA I NUMERI CHE HAI VISUALIZZATO POCO FA")
    );
    userNumber.push(parseInt(remember));
  }
  //   console.log(userNumber);
  return userNumber;
}
