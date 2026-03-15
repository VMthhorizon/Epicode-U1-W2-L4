// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const checkArray = function (arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      somma += arr[i];
      console.log("Maggiore di 5");
    } else {
      console.log("Minore di 5");
    }
  }
  return somma;
};
let rand = giveMeRandom(2);
console.log(rand);
console.log(checkArray(rand));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  {
    price: 2,
    name: "matita",
    id: 1456,
    quantity: 2,
  },
  {
    price: 4,
    name: "penna",
    id: 2444,
    quantity: 4,
  },
  {
    price: 2,
    name: "gomma",
    id: 2333,
    quantity: 3,
  },
];

const shoppingCartTotal = function () {
  let item = 0;
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    item = shoppingCart[i].price * shoppingCart[i].quantity;
    total += item;
  }
  return total;
};
console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const newObj = {
  price: 3,
  name: "righello",
  id: 3333,
  quantity: 5,
};
const addToShoppingCart = function (obj) {
  shoppingCart.push(obj);
  return shoppingCart.length;
};
console.log(addToShoppingCart(newObj));
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (arr) {
  let mostExp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > mostExp.price) {
      mostExp = arr[i];
    }
  }
  return mostExp;
};
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

const latestShoppingCart = function (arr) {
  return arr[arr.length - 1];
};
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const numbers = [20, "patate", 40, "uova", 60];
const average = function (arr) {
  let somma = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      somma += arr[i];
      count++;
    }
  }
  if (count === 0) return 0;
  return somma / count;
};
console.log(average(numbers));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const stringhe = ["pane", "latte", "burro", "farina", "pomodoro"];
const longest = function (s1) {
  let str = "";
  for (let i = 0; i < stringhe.length; i++) {
    if (str.length < s1[i].length) {
      str = s1[i];
    }
  }
  return str;
};
console.log(longest(stringhe));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
