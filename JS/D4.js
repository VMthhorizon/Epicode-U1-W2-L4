/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  return l1 * l2;
};
const areaRettangolo = area(10, 20);
console.log(areaRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
const somma = crazySum(2, 2);
console.log(somma);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num1) {
  if (num1 > 19) {
    return (num1 - 19) * 3;
  } else {
    return num1 - 19;
  }
};
const diff = crazyDiff(21);
console.log(diff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
const limiti = boundary(102);
console.log(limiti);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (s1) {
  if (s1 !== "EPICODE") {
    return "EPICODE " + s1;
  } else {
    return "EPICODE";
  }
};
const epicode = epify("cane");
console.log(epicode);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n1) {
  if (n1 % 3 === 0 && n1 % 7 === 0) {
    console.log("E' un multiplo di 3 e di 7");
  } else if (n1 % 3 === 0) {
    console.log("E' un multiplo di 3");
  } else if (n1 % 7 === 0) {
    console.log("E' un multiplo di 7");
  } else {
    console.log("Non è un multiplo nè di 3 nè di 7");
  }
};

check3and7(2);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (s1) {
  return s1.split("").reverse().join("");
};
const frase = reverseString("luca");
console.log(frase);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFist = function (s1) {
  let maiuscola = "";

  for (let i = 0; i < s1.length; i++) {
    if (i === 0 || s1[i - 1] === " ") {
      maiuscola += s1[i].toUpperCase();
    } else {
      maiuscola += s1[i];
    }
  }
  return maiuscola;
};
console.log(upperFist("paolo luca antonio"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (s1) {
  return s1.slice(1, s1.length - 1);
};
const esempio = cutString("paolo");
console.log(esempio);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  let arrayCasuale = [];

  for (let i = 0; i < n; i++) {
    let numero = Math.floor(Math.random() * 11);

    arrayCasuale.push(numero);
  }

  return arrayCasuale;
};
