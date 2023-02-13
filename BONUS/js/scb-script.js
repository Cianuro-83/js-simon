console.log("Ciao Cianuro... oggi si gioca a SIMON SAYS: BONUS");
//********************
// RICHIAMO ELEMENTI DAL DOM
//******************** */
let playBtnEl = document.getElementById("play-btn");
let userNumberEl = document.getElementById("user-number");
let pcNumberEl = document.getElementById("pc-number");
let validNumber = document.getElementById("valid-number");
//********************
// CREO VARIABILI
//******************** */
let numeri;
//********************
// APERTURA EVENT CLICK PLAY BUTTON
//******************** */
playBtnEl.addEventListener("click", function () {
  //********************
  // RESET PLAYGROUND
  //******************** */
  validNumber.innerHTML = "";
  userNumberEl.innerHTML = "";
  pcNumberEl.innerHTML = "";
  //********************
  // GENERO 5 NUMERI CASUALI
  //******************** */
  numeri = [];
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
    console.log(
      "Questi sono i numeri che ha ricordato dopo 30 secondi " + ricordati
    );

    //********************
    // STAMPO SULLA PAGINA
    //******************** */
    validNumber.innerHTML = ricordati;
    userNumberEl.innerHTML = userNumber;
    pcNumberEl.innerHTML = numeri;

    //FINE FUNZIONE TIME OUT
  }, 2000);

  //********************
  // CHIUSURA EVENT PLAY BUTTON
  //******************** */
});

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

//---------------------------------------------------------------------------
// INIZIALIZZO LA FUNZIONE NUMERI RICORDATI
//---------------------------------------------------------------------------

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
