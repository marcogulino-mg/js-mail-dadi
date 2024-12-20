//TRACCIA 1

//VARs
//Inserisco l'email da utilizzare per il confronto con la lista e la rendo minuscola
let userEmail = prompt(
  "Inserisci l'email da confrontare con la lista degli invitati"
).toLowerCase();

//Variabile booleana che indica se l'email è presente o meno nella lista
let checkEmail = false;

//Array che conterrà le email degli invitati (impostata con alcuni valori di deafult)
const birthdayList = [
  "user1email@gmail.it",
  "user02@gmail.it",
  "user3@gmail.it",
  "email4@gmail.com",
  "utentenumero5@libero.it",
  "sixthuser@hotmail.com",
];

//METHODS
//Controllo che l'email sia formattata correttamente

//Stringa contenente la formattazione corretta dell'email
let validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(userEmail.match(validRegex));
//Se l'email rispecchia la formattazione dichiarata sopra allora potrò fare il confronto con il contenuto dell'array
if (userEmail.match(validRegex)) {
  for (let i = 0; i < birthdayList.length; i++) {
    //Se l'email è presente nella lista allora la persona potrà partecipare alla festa
    if (userEmail == birthdayList[i]) {
      checkEmail = true;
      break;
    }
  }

  //Avviso l'utente sul risultato del confronto
  if (checkEmail == true) {
    console.log("Ciao, benvenuto alla festa!");
  } else {
    console.log("Mi dispiace ma non sei stato invitato.");
  }
} else {
  console.log("Email non valida!");
}

//TRACCIA 2

//VARs
//Risultati lanci
let userRes = 0;
let pcRes = 0;

//METHODS
//Lancio del dado per l'utente
userRes = Math.floor(Math.random() * 6) + 1;
console.log(
  `Il giocatore ha tirato il dado è ha ottenuto il numero ${userRes}`
);

//Lancio del dado per il pc
pcRes = Math.floor(Math.random() * 6) + 1;
console.log(`Il computer ha tirato il dado è ha ottenuto il numero ${pcRes}`);

//Confronto i risultati e decreto il vincitore
if (userRes > pcRes) {
  console.log("Il giocatore vince!");
} else if (userRes < pcRes) {
  console.log("Il computer vince!");
} else {
  console.log("Pareggio!");
}
