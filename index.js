// Get all the necessary elements from the DOM
const transportationArrival = document.getElementById("transportation-arrival");
const transportationDeparture = document.getElementById(
  "transportation-departure"
);
const transportationRelative = document.getElementById(
  "transportation-relative"
);
const airportDepartureEscortYes = document.getElementById(
  "airport-departure-escort-yes"
);
const airportDepartureEscortNo = document.getElementById(
  "airport-departure-escort-no"
);
const securityOfficerNo = document.getElementById("security-officer-no");
const securityOfficerPrivate = document.getElementById(
  "security-officer-private"
);
const securityOfficerPolice = document.getElementById(
  "security-officer-police"
);
const securityOfficerArmed = document.getElementById("security-officer-armed");
const tShirtQueen = document.getElementById("t-shirt-queen");

// Calculate the total cost
let totalCost = 0;

if (transportationArrival.checked) {
  totalCost += Number(transportationArrival.value);
}

if (transportationDeparture.checked) {
  totalCost += Number(transportationDeparture.value);
}

if (transportationRelative.checked) {
  totalCost += Number(transportationRelative.value);
}

if (airportDepartureEscortYes.checked) {
  totalCost += Number(airportDepartureEscortYes.value);
}

if (airportDepartureEscortNo.checked) {
  totalCost += Number(airportDepartureEscortNo.value);
}

if (securityOfficerNo.checked) {
  totalCost += Number(securityOfficerNo.value);
}

if (securityOfficerPrivate.checked) {
  totalCost += Number(securityOfficerPrivate.value);
}

if (securityOfficerPolice.checked) {
  totalCost += Number(securityOfficerPolice.value);
}

if (securityOfficerArmed.checked) {
  totalCost += Number(securityOfficerArmed.value);
}

if (tShirtQueen.checked) {
  totalCost += Number(tShirtQueen.value);
}

// Display the total cost in the cart section
const cartTotal = document.getElementById("cart-total");
cartTotal.textContent = `$${totalCost}`;
