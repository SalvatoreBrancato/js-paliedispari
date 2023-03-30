let palindroma = prompt("Inserisci una parola");

for (let i = 0; i < palindroma.length; i++) {

    if (palindroma[i]!== palindroma[palindroma.length - 1 - i]) {
        
        document.querySelector("div").innerHTML = `<h1>Non è un palindromo</h1>`
    }else {
         
        document.querySelector("div").innerHTML = `<h1>E' un palindromo</h1>`  
    }
}




// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
   
// Dichiariamo chi ha vinto.

invia.addEventListener("click", inviaDati);

function inviaDati() {
    let pariDispari = document.querySelector("#pariDispari").value;
    document.querySelector("#scelta").innerText = `Hai scelto ${pariDispari}`;
    let numeroScelto = document.querySelector("#numeroUtente").value;
    document.querySelector("#numeroScelto").innerText = `Hai scelto il n. ${numeroScelto} `;
 
}
function numeroRandom() {
    let numeroPc = Math.floor(Math.random() * 6) + 1;
    return numeroPc
}

let numeroAvversario = numeroRandom()
document.querySelector("#numeroRandom").innerHTML = `Il numero dell'avversario è il n.${numeroAvversario}`    

    
function somma(num1, num2){
    let sommaNumeri= num1 + num2;
    return sommaNumeri
}

let risultatoFinale = somma(numeroAvversario, numeroGiocatore);
console.log(inviaDati(numeroScelto))

