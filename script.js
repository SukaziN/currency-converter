let button = document.getElementById("convert");
function convertCurrency() {
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
  let euros = rands / 7;
  let usDollars = rands / 12;
  let rupees = rands * 34;
  let yen = rands / 10;
  let pounds = rands / 14;
  let emalangeni = rands;
  let message = `${rands}  Rands is equivalent to: `;
  switch (foreignCurrency) {
    case "Naira":
      console.log(message.concat(naira).concat(currency[0]));
      message = message.concat(naira.toPrecision(3)).concat(currency[0]);
      break;
    case "Euros":
      console.log(message.concat(euros).concat(currency[1]));
      message = message.concat(euros.toPrecision(3)).concat(currency[1]);
      break;
    case "US dollars":
    case "Canadian dollars":
      console.log(message.concat(usDollars).concat(currency[2]));
      message = message.concat(usDollars.toPrecision(3)).concat(currency[2]);
      break;
    case "Rupees":
      console.log(message.concat(rupees).concat(currency[3]));
      message = message.concat(rupees.toPrecision(3)).concat(currency[3]);
      break;
    case "Yen":
      console.log(message.concat(yen).concat(currency[4]));
      message = message.concat(yen.toPrecision(3)).concat(currency[4]);
      break;
    case "Pounds":
      console.log(message.concat(pounds).concat(currency[5]));
      message = message.concat(pounds.toPrecision(3)).concat(currency[5]);
      break;
    case "Emalangeni":
    case "Pula":
      console.log(message.concat(emalangeni).concat(currency[6]));
      message = message.concat(emalangeni.toPrecision(3)).concat(currency[6]);
      break;
    default:
      alert(
        "Please enter a valid currency. Note: start your currency with an uppercase character."
      );
  }
  let convertedCurrency = document.createElement("p");
  convertedCurrency.innerText = message;
  document.body.appendChild(convertedCurrency);
}
//button.addEventListener("click", convertCurrency());... you only need to specify event once and this called the function immediately so i placed an onclick event listener directly on the button in html
