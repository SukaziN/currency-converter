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
    " Franc",
    "Zim Dollars",
  ];

  let naira = rands * 86.21; //these conversions reflect the market value as of 20/01/26
  let euros = rands / 19.27;
  let usDollars = rands / 16.44;
  let zimDollars = rands * 3906.07;
  let rupees = rands * 5.53;
  let yen = rands * 9.59;
  let pounds = rands / 22; // (British pound)
  let franc = rands / 20.809;
  let message = `${rands}  Rands is equivalent to: `;
  switch (foreignCurrency) {
    case "Naira":
      message = message
        .concat(naira.toLocaleString("en-US")) //groups numbers in the thousands in US english format and differentiates a comma from a decimal
        .concat(currency[0]);
      break;
    case "Euros":
      message = message
        .concat(euros.toLocaleString("en-US"))
        .concat(currency[1]);
      break;
    case "US dollars":
      //case "Canadian dollars": will get actual exchange rate for canadian dollars and include it
      message = message
        .concat(
          usDollars.toLocaleString("en-US", {
            style: "currency",
            currency: "USD", //further specifies that we're working with currency and US dollars and adds the dollar symbol as a prefix to the number
          }),
        )
        .concat(currency[2]);
      break;
    case "Rupees":
      message = message
        .concat(rupees.toLocaleString("en-US"))
        .concat(currency[3]);
      break;
    case "Yen":
      message = message.concat(yen.toLocaleString("en-US")).concat(currency[4]);
      break;
    case "Pounds":
      message = message
        .concat(pounds.toLocaleString("en-US"))
        .concat(currency[5]);
      break;
    case "Franc":
      message = message
        .concat(franc.toLocaleString("en-US"))
        .concat(currency[6]);
      break;
    case "Zim dollars":
      message = message
        .concat(zimDollars.toLocaleString("en-US"))
        .concat(currency[7]);
    default:
      alert(
        "Please enter a valid currency. Note: start your currency with an uppercase character.",
      );
  }
  let convertedCurrency = document.createElement("p");
  convertedCurrency.innerText = message;
  document.body.appendChild(convertedCurrency);
}
