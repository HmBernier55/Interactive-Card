/**
 * Main function that calls all the filling functions
 */
function cardFill() {
  if (document.getElementById("card-info").checkValidity()) {
    nameFill();
    cardNumberFill();
    expDateFill();
    cvcFill();
  }

  if (document.getElementById("card-info").checkValidity()) {
    showFinalScreen();
  }
}

function clearContent() {
  const finalScreen = document.getElementById("final-screen");
  finalScreen.classList.add("hidden");

  const form = document.getElementById("card-info");
  form.classList.remove("hidden");

  resetValues();
}

/**
 * TODO:
 * Validate the name:
 * - first and last
 * - space in between
 * - set character max length
 * Fill the cardholder name on credit card with an input value
 */
function nameFill() {
  const cardName = document.getElementById("name-card");
  const inputName = document.getElementById("cardholder-name").value;

  cardName.textContent = inputName;
}

/**
 * TODO:
 * Validate the card number:
 * - 16 digits
 * - work w/ or w/o spacing between groups
 * Fill card number on credit card with an input value
 */
function cardNumberFill() {
  const cardNumber = document.getElementById("card-digits");
  const cardNumberInput = document.getElementById("card-number").value;

  const cardRegex = /[0-9]{16}/;

  if (cardRegex.test(cardNumberInput)) {
    const text = `
      ${cardNumberInput.slice(0, 4)} 
      ${cardNumberInput.slice(4, 8)} 
      ${cardNumberInput.slice(8, 12)} 
      ${cardNumberInput.slice(12, 16)}
      `;
    cardNumber.textContent = text;
  } else {
    cardNumber.textContent = cardNumberInput;
  }
}

/**
 * TODO:
 * Validate the expiration date:
 * - Month:
 * --> 2 digits
 * --> between 01-12
 * - Year:
 * --> 2 digits
 * --> between 00-99
 * Fill card expiration date on credit card with an input value
 */
function expDateFill() {
  const expMonth = document.getElementById("month-card");
  const expYear = document.getElementById("year-card");

  const expMonthInput = document.getElementById("exp-date-month").value;
  const expYearInput = document.getElementById("exp-date-year").value;

  expMonth.textContent = expMonthInput;

  expYear.textContent = expYearInput;
}

/**
 * TODO:
 * Validate the cvc number:
 * - number
 * - 3 digits
 * Fill card cvc number on credit card with an input value
 */
function cvcFill() {
  const cvc = document.getElementById("cvc-card");
  const cvcInput = document.getElementById("CVC").value;

  cvc.textContent = cvcInput;
}

function showFinalScreen() {
  const form = document.getElementById("card-info");
  form.classList.add("hidden");

  const finalScreen = document.getElementById("final-screen");
  finalScreen.classList.remove("hidden");
}

function resetValues() {
  const form = document.getElementById("card-info");
  form.reset();

  const cardName = document.getElementById("name-card");
  const cardNumber = document.getElementById("card-digits");
  const expMonth = document.getElementById("month-card");
  const expYear = document.getElementById("year-card");
  const cvc = document.getElementById("cvc-card");

  cardName.innerHTML = "Jane Appleseed";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  expMonth.innerHTML = "00";
  expYear.innerHTML = "00";
  cvc.innerHTML = "000";
}
