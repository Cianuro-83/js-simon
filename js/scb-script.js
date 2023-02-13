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
alert(numeri);
//---------------------------------------------------------------------------
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
