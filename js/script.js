//TRACCIA 1

//VARs
//Inserisco l'email da utilizzare per il confronto con la lista
let userEmail = prompt(
  "Inserisci l'email da confrontare con la lista degli invitati"
);

//Variabile booleana che indica se l'email è presente o meno nella lista
let checkEmail = false;

//Array che conterrà le email degli invitati (impostata con alcuni valori di deafult)
const birthdayList = [
  "user1email@gmail.it",
  "user02@gmail.it",
  "user3@gmail.it",
  "email4@gmail.com",
  "utentenumero5@libero.it",
  "sixthuser@hotmail.com"
];

//METHODS
for (let i = 0; i < birthdayList.length; i++) {
  //Se l'email è presente nella lista allora la persona potrà partecipare alla festa
  if (userEmail == birthdayList[i]) {
    checkEmail = true;
    break;
  }
}
