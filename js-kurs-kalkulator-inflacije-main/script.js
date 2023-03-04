function inflationCalculator(){
	let inflationRate = document.querySelector("#inflationRate");
	let money = document.querySelector("#money");
 
//parseFloat sluzi za pretvaranje iz stringa u broj sa zarezom.

	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);
    
    let years = document.querySelector("#years").value;
    years = parseFloat(years);

    //Formola za izračunavanje inflacije

    let worth = money + (money * (inflationRate / 100))

    for(let i = 1; i < years; i++){
    	worth += worth * (inflationRate / 100);
    }

    worth = worth.toFixed(2);

    let newElement = document.createElement("div");
    newElement.classList = "new-value";

    newElement.innerText = "Vrijediti će " + worth;

    document.querySelector(".container").appendChild(newElement);

	}

