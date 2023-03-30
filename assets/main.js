//Parola palindroma
let palindroma = prompt("Inserisci una parola");

for (let i = 0; i < palindroma.length; i++) {

    if (palindroma[i]!== palindroma[palindroma.length - 1 - i]) {
        
        document.querySelector("#parolaScelta").innerHTML = `non è palindroma`
    }else {
         
        document.querySelector("#parolaScelta").innerHTML = `è palindroma`  
    }
}

//Gioco pari o dispari?

invia.addEventListener("click", inviaDati);

function inviaDati() {
    let pariDispari = document.querySelector("#pariDispari").value;
    document.querySelector("#scelta").innerText = `Hai scelto ${pariDispari}`;
    let numeroScelto = parseInt(document.querySelector("#numeroUtente").value);
    document.querySelector("#numeroScelto").innerText = `Hai scelto il n. ${numeroScelto} `;
    let numeroAvversario = numeroRandom()
    document.querySelector("#numeroRandom").innerHTML = `Il numero dell'avversario è il n.${numeroAvversario}`
    let risultatoFinale = somma(numeroAvversario, numeroScelto);
    document.querySelector("#numeroFinale").innerHTML = `Il totale è ${risultatoFinale}` 

    const numeroPari = `pari`;
    const numeroPari1 = `Pari`
    const numeroDispari = `dispari`
    const numeroDispari1 = `Dispari`
    if (risultatoFinale % 2 == 0) {
        if (numeroPari == pariDispari || numeroPari1 == pariDispari) {
            console.log(`hai vinto`)
            document.querySelector("#risultato-finale").innerHTML = `Hai Vinto!`
            document.querySelector("#risultato-finale").style.border = `5px solid #44e311`
        }else{
            console.log(`hai perso`)
            document.querySelector("#risultato-finale").innerHTML = `Hai Perso!`
            document.querySelector("#risultato-finale").style.border = `5px solid red`
        }
    } else {
        if (numeroDispari == pariDispari || numeroDispari1 == pariDispari) {
            console.log(`hai vinto`)
            document.querySelector("#risultato-finale").innerHTML = `Hai Vinto!`
            document.querySelector("#risultato-finale").style.border = `5px solid #44e311`
        }else{
            console.log(`hai perso`)
            document.querySelector("#risultato-finale").innerHTML = `Hai Perso!`
            document.querySelector("#risultato-finale").style.border = `5px solid red`
        }
    }
}

function numeroRandom() {
    let numeroPc = Math.floor(Math.random() * 5) + 1;
    return numeroPc
}

function somma(num1, num2){
    let sommaNumeri= num1 + num2;
    return sommaNumeri
}