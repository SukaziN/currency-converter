let rands = prompt("Enter amount in Rands(ZAR) to convert");
rands = Number(rands);
let foreignCurrency = prompt("Which currency would you like to convert to?");

let currency = [
  " Naira",
  " Euros",
  " Dollars",
  " Rupees",
  " Yen",
  " Pounds",
  " Emalangeni",
];

//NOTE: the conversion values below are placeholders and do not reflect the economic market in real life
let naira = rands * 2000;
//naira = naira.concat(foreignCurrency);
let euros = rands / 7;
//euros = euros.concat(foreignCurrency);
let usDollars = rands / 12;
//usDollars = usDollars.concat(foreignCurrency);
let rupees = rands * 34;
//rupees = rupees.concat(foreignCurrency);
let yen = rands / 10;
//yen = yen.concat(foreignCurrency);
let pounds = rands / 14;
//pounds = pounds.concat(foreignCurrency);
let emalangeni = rands;
//emalangeni = emalangeni.concat(foreignCurrency);
let message = `${rands}  Rands is equivalent to: `;
switch (foreignCurrency) {
  case "Naira":
    console.log(message.concat(naira).concat(currency[0]));
    break;
  case "Euros":
    console.log(message.concat(euros).concat(currency[1]));
    break;
  case "US dollars":
  case "Canadian dollars":
    console.log(message.concat(usDollars).concat(currency[2]));
    break;
  case "Rupees":
    console.log(message.concat(rupees).concat(currency[3]));
    break;
  case "Yen":
    console.log(message.concat(yen).concat(currency[4]));
    break;
  case "Pounds":
    console.log(message.concat(pounds).concat(currency[5]));
    break;
  case "Emalangeni":
  case "Pula":
    console.log(message.concat(emalangeni).concat(currency[6]));
    break;
  default:
    console.log(
      "Please enter a valid currency. Note: start your currency with uppercase character."
    );
}
