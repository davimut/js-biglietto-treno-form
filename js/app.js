
// richiama dall HTML gli elementi tramite id
const buttonElement                 = document.getElementById('calcola')
const kmInputElement                = document.getElementById('km')
const etaInputElement               = document.getElementById('eta')
const resultElement                 = document.getElementById('risultato')

// esegui tutto il "calcolo js" premendo l elemento button dell html (calcola)
buttonElement.addEventListener('click', function (event) {
    event.preventDefault();

    //recupero con .value i dati inseriti dall utente
    const eta                       = etaInputElement.value
    const km                        = parseInt(kmInputElement.value)

    // costanti di prezzi base e sconti (calcolo base km per prezzo base)
    const prezzoBase                = 0.21
    const prezzoPerKm               = prezzoBase * km
    const sconto20                  = (prezzoPerKm * 0.2)
    const sconto40                  = (prezzoPerKm * 0.4)


    // stampa elementi in tabella sul dom
    kmElement.innerHTML             = (km)
    etaElement.innerHTML            = (eta)
    prezzoElement.innerHTML         = ((prezzoPerKm).toFixed(2) + '€')

    // calcola il prezzo effettivo in base all eta 
    if (!isNaN(km) && km > 0 && (!isNaN.prezzoPerKm)) {
        if (eta                     === 'minorenne') {
            totalElement.innerHTML  = ((prezzoPerKm - sconto20).toFixed(2) + '€')
            scontoElement.innerHTML = ('20%')
            resultElement.innerHTML = ('abbiamo applicato uno sconto del 20% sul tuo bilglietto! essendo minorenne il prezzo del tuo biglietto sara  ' + (prezzoPerKm - sconto20).toFixed(2) + '€')
        } else if (eta              === 'over') {
            totalElement.innerHTML  = ((prezzoPerKm - sconto40).toFixed(2) + '€')
            scontoElement.innerHTML = ('40%')
            resultElement.innerHTML = ('abbiamo applicato uno sconto del 40% sul tuo bilglietto! essendo over 65 il prezzo del tuo biglietto sara  ' + (prezzoPerKm - sconto40).toFixed(2) + '€')
        } else {
            totalElement.innerHTML  = ((prezzoPerKm).toFixed(2) + '€')
            scontoElement.innerHTML = ('0%')
            resultElement.innerHTML = ('non abbiamo applicato nessuno sconto!non essendo minorenne o over 65 il tuo prezzo è   ' + (prezzoPerKm).toFixed(2) + '€')
        }
    }
    //ALTRIMENTI nesusn risultato
    else {
        prezzoElement.innerHTML     = ('0€')
        kmElement.innerHTML         = ('0')
        totalElement.innerHTML      = ('0 €')
        scontoElement.innerHTML     = ('0%')
        resultElement.innerHTML     = ('non è stato possibile eseguire il calcolo')
    }
})
