"use strict";
/* interface Smartphone{
    carica: number;
    numeroChiamate: number;
} */
class User {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    getCarica() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        if (this.carica > 1) {
            this.numeroChiamate += 1;
            this.carica -= minutiDurata * 0.2;
        }
        else {
            console.log("Non hai abbastanza credito per effettuare la chiamata, ricaricalo");
        }
    }
    numero404() {
        return this.carica;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let FirstUser = new User;
let SecondUser = new User;
let ThirdUser = new User;
let utente = new User;
let ricarica1 = 20;
let ricarica2 = 10;
let ricarica3 = 15;
console.log("*****************************UTENTE 1********************************");
FirstUser.ricarica(ricarica1);
console.log("l'utente carica " + ricarica1 + "€");
FirstUser.chiamata(2);
FirstUser.chiamata(3);
FirstUser.chiamata(4);
console.log("l'utente effettua " + FirstUser.getNumeroChiamate() + " chiamate");
console.log("L'utente ora ha credito: " + FirstUser.numero404());
FirstUser.azzeraChiamate();
console.log("L'utente ha azzerato le sue chiamate, ora ha " + FirstUser.getNumeroChiamate() + " chiamate effettuate");
console.log("*****************************UTENTE 2********************************");
SecondUser.ricarica(ricarica2);
console.log("l'utente carica " + ricarica2 + "€");
SecondUser.chiamata(1);
SecondUser.chiamata(5);
SecondUser.chiamata(3);
SecondUser.chiamata(10);
console.log("l'utente effettua " + SecondUser.getNumeroChiamate() + " chiamate");
console.log("L'utente ora ha credito: " + SecondUser.numero404().toFixed(2));
SecondUser.azzeraChiamate();
console.log("L'utente ha azzerato le sue chiamate, ora ha " + SecondUser.getNumeroChiamate() + " chiamate effettuate");
console.log("*****************************UTENTE 3********************************");
ThirdUser.ricarica(ricarica3);
console.log("l'utente carica " + ricarica3 + "€");
ThirdUser.chiamata(2);
ThirdUser.chiamata(6);
console.log("l'utente effettua " + ThirdUser.getNumeroChiamate() + " chiamate");
console.log("L'utente ora ha credito: " + ThirdUser.numero404().toFixed(2));
ThirdUser.azzeraChiamate();
console.log("L'utente ha azzerato le sue chiamate, ora ha " + ThirdUser.getNumeroChiamate() + " chiamate effettuate");
document.addEventListener('DOMContentLoaded', () => {
    let appButtons = document.querySelectorAll(".icon");
    let buttonRicarica = appButtons[0];
    let buttonApriPaginaNumero404 = appButtons[1];
    let buttonPaginaAzzeraChiamate = appButtons[2];
    let buttonChiama = appButtons[3];
    buttonRicarica.addEventListener('click', function () {
        creaPaginaRicarica();
    });
    buttonApriPaginaNumero404.addEventListener('click', function () {
        creaPaginaNumero404();
    });
    buttonPaginaAzzeraChiamate.addEventListener('click', function () {
        creaPaginaAzzeraChiamate();
    });
    buttonChiama.addEventListener('click', function () {
        creaPaginaChiamata();
    });
});
function creaPaginaChiamata() {
    let paginaChiamata = document.querySelector('#paginaAzzeraChiamate');
    if (paginaChiamata != null) {
        paginaChiamata.innerHTML = "";
        let durataUltimaChiamata = document.createElement('p');
        let nChiamate = document.createElement('h3');
        nChiamate.innerText = 'Hai effettuato ' + utente.getNumeroChiamate().toString() + ' chiamate';
        nChiamate.setAttribute('id', 'timer');
        paginaChiamata.className = "modale active call";
        let buttonBack = document.createElement('button');
        buttonBack.innerText = 'Indietro';
        let buttonChiama = document.createElement('button');
        buttonChiama.innerText = 'Chiama';
        paginaChiamata.appendChild(buttonChiama);
        paginaChiamata.appendChild(buttonBack);
        paginaChiamata.appendChild(durataUltimaChiamata);
        paginaChiamata.appendChild(nChiamate);
        buttonChiama.addEventListener('click', function () {
            let rng = Math.floor(Math.random() * 4) + 1;
            if (utente.getCarica() > 1) {
                utente.chiamata(rng);
                nChiamate.innerText = 'Hai effettuato ' + utente.getNumeroChiamate().toString() + ' chiamate';
                durataUltimaChiamata.innerText = 'L\'ultima chiamata è durata ' + rng + ' minuti';
            }
            else {
                nChiamate.innerText = "Non hai abbastanza credito per fare chiamate";
            }
        });
        buttonBack.addEventListener('click', function () {
            if (paginaChiamata != null) {
                paginaChiamata.className = 'modale';
            }
        });
    }
}
function creaPaginaAzzeraChiamate() {
    let paginaAzzeraChiamate = document.querySelector('#paginaAzzeraChiamate');
    if (paginaAzzeraChiamate != null) {
        paginaAzzeraChiamate.innerHTML = "";
        apriPagina(paginaAzzeraChiamate);
        let buttonBack = document.createElement('button');
        buttonBack.innerText = 'Indietro';
        let nChiamate = document.createElement('h2');
        nChiamate.innerText = `Hai effettuato: ${utente.getNumeroChiamate()} chiamate`;
        let btnAzzeraChiamate = document.createElement('button');
        btnAzzeraChiamate.innerHTML = 'Azzera chiamate';
        paginaAzzeraChiamate.appendChild(nChiamate);
        paginaAzzeraChiamate.appendChild(buttonBack);
        paginaAzzeraChiamate.appendChild(btnAzzeraChiamate);
        buttonBack.addEventListener('click', function () {
            if (paginaAzzeraChiamate != null) {
                paginaAzzeraChiamate.className = 'modale';
            }
        });
        btnAzzeraChiamate.addEventListener('click', function () {
            if (utente.getNumeroChiamate() != 0) {
                utente.azzeraChiamate();
                creaPaginaAzzeraChiamate();
            }
        });
    }
}
function creaPaginaNumero404() {
    let paginaNumero404 = document.querySelector('#paginaNumero404');
    if (paginaNumero404 != null) {
        paginaNumero404.innerHTML = "";
        apriPagina(paginaNumero404);
        let buttonBack = document.createElement('button');
        buttonBack.innerText = 'Indietro';
        let mostraCredito = document.createElement('h2');
        mostraCredito.innerText = `Credito disponibile: ${utente.numero404().toFixed(2)}€`;
        paginaNumero404.appendChild(mostraCredito);
        paginaNumero404.appendChild(buttonBack);
        buttonBack.setAttribute('id', 'btnBack');
        buttonBack.addEventListener('click', function () {
            if (paginaNumero404 != null) {
                paginaNumero404.className = 'modale';
            }
        });
    }
}
function creaPaginaRicarica() {
    let paginaRicarica = document.querySelector('#paginaRicarica');
    if (paginaRicarica != null) {
        paginaRicarica.innerHTML = "";
        apriPagina(paginaRicarica);
        let currentCredit = document.createElement('p');
        let title = document.createElement('h2');
        let input = document.createElement('input');
        let button = document.createElement('button');
        let buttonBack = document.createElement('button');
        currentCredit.innerText = `Credito residuo: ${utente.numero404().toFixed(2)}€`;
        title.innerText = 'Quanto credito vuoi ricaricare?';
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'quantitaCredito');
        button.innerText = 'Ricarica';
        buttonBack.innerText = 'Indietro';
        button.setAttribute('id', 'btnRicarica');
        paginaRicarica.appendChild(currentCredit);
        paginaRicarica.appendChild(title);
        paginaRicarica.appendChild(input);
        paginaRicarica.appendChild(button);
        paginaRicarica.appendChild(buttonBack);
        button.addEventListener('click', function () {
            let credito = parseInt(document.querySelector('#quantitaCredito').value);
            if (!isNaN(credito)) {
                utente.ricarica(credito);
                creaPaginaRicarica();
            }
        });
        buttonBack.setAttribute('id', 'btnBack');
        buttonBack.addEventListener('click', function () {
            if (paginaRicarica != null) {
                paginaRicarica.className = 'modale';
            }
        });
    }
}
function apriPagina(pagina) {
    if (pagina != null) {
        pagina.className = 'active modale';
    }
}
